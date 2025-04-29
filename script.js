document.addEventListener('DOMContentLoaded', () => {
    // --- Element References ---
    const chaptersList = document.getElementById('chapters-list');
    const explanationContent = document.getElementById('explanation-content');
    const exerciseContent = document.getElementById('exercise-content');
    const pythonCodeTextarea = document.getElementById('python-code'); // Textarea originale
    const runButton = document.getElementById('run-button');
    const outputArea = document.getElementById('output'); // Ora è un div
    const menuToggleButton = document.getElementById('menu-toggle');
    const layoutContainer = document.querySelector('.layout-container');
    const markCompleteButton = document.getElementById('mark-complete-button');

    // --- State Variables ---
    let pyodide = null;
    let chapterManifest = [];
    let chapterDataCache = {}; // Cache per i dati JSON (explanation/exercise)
    let chapterCodeCache = {}; // Cache per il codice Python
    let codeEditor = null; // Istanza di CodeMirror
    let currentChapterId = null; // ID del capitolo attualmente visualizzato
    let saveTimeout = null; // Per debounce salvataggio codice

    // --- Pyodide Initialization ---
    async function initializePyodide() {
        outputArea.textContent = "Caricamento di Pyodide e dell'interprete Python...";
        runButton.disabled = true;
        try {
            pyodide = await loadPyodide();
            // Carica pacchetti comuni usati negli esempi
            await pyodide.loadPackage(['sqlite3']);
            outputArea.textContent = "Pyodide caricato. Pronto per eseguire codice Python.";
            runButton.disabled = false;
            console.log("Pyodide loaded successfully");
        } catch (error) {
            console.error("Errore durante il caricamento di Pyodide:", error);
            outputArea.textContent = `Errore durante il caricamento di Pyodide: ${error}`;
            runButton.disabled = true;
        }
    }

    // --- CodeMirror Initialization ---
    function initializeCodeEditor() {
        if (pythonCodeTextarea) {
            codeEditor = CodeMirror.fromTextArea(pythonCodeTextarea, {
                lineNumbers: true,
                mode: "python",
                theme: "material-darker", // Deve corrispondere al CSS importato
                indentUnit: 4,
                smartIndent: true,
                tabSize: 4,
                indentWithTabs: false,
                lineWrapping: true,
            });
            console.log("CodeMirror initialized.");

            // Listener per salvare automaticamente il codice su modifica
            codeEditor.on("change", () => {
                if (saveTimeout) {
                    clearTimeout(saveTimeout);
                }
                saveTimeout = setTimeout(() => {
                    if (currentChapterId && codeEditor) {
                        const currentCode = codeEditor.getValue();
                        try {
                            localStorage.setItem('code-' + currentChapterId, currentCode);
                            console.log(`Codice per capitolo ${currentChapterId} salvato in localStorage.`);
                        } catch (e) {
                            console.error("Errore durante il salvataggio in localStorage:", e);
                            // Potrebbe essere pieno o non supportato
                        }
                    }
                }, 1000); // Salva 1 secondo dopo l'ultima modifica
            });
        } else {
            console.error("Textarea per CodeMirror non trovata.");
        }
    }

    // --- Chapter Completion Logic ---
    function getCompletedChapters() {
        try {
            const completed = localStorage.getItem('completedChapters');
            return completed ? new Set(JSON.parse(completed)) : new Set();
        } catch (e) {
            console.error("Errore leggendo completedChapters da localStorage:", e);
            return new Set(); // Restituisce un set vuoto in caso di errore
        }
    }

    function saveCompletedChapters(completedSet) {
        try {
            localStorage.setItem('completedChapters', JSON.stringify(Array.from(completedSet)));
        } catch (e) {
            console.error("Errore salvando completedChapters in localStorage:", e);
        }
    }

    function updateChapterLinkStatus(chapterId, isComplete) {
         const link = document.querySelector(`#chapters-list a[data-chapter-id="${chapterId}"]`);
         if (link) {
             link.classList.toggle('completed', isComplete); // Aggiunge/rimuove la classe
         }
    }

    // --- Chapter Loading Logic ---
    async function loadChapter(chapterId) {
        explanationContent.innerHTML = '<p>Caricamento capitolo...</p>';
        exerciseContent.innerHTML = '';
        if (codeEditor) {
            codeEditor.setValue('Caricamento codice...');
        } else {
            pythonCodeTextarea.value = 'Caricamento codice...'; // Fallback
        }
        outputArea.innerHTML = ''; // Pulisce output precedente
        currentChapterId = chapterId; // Imposta il capitolo corrente

        const chapterInfo = chapterManifest.find(ch => ch.id === chapterId);

        if (!chapterInfo || !chapterInfo.dataFile || !chapterInfo.codeFile) {
            explanationContent.innerHTML = '<p>Informazioni capitolo non trovate o incomplete nel manifest.</p>';
            if (codeEditor) codeEditor.setValue('# Errore caricamento codice.');
            else pythonCodeTextarea.value = '# Errore caricamento codice.';
            console.error(`Chapter ID "${chapterId}" not found or manifest entry incomplete.`);
            return;
        }

        try {
            let chapterData;
            let chapterCode;

            // Carica Dati JSON (Explanation/Exercise)
            if (chapterDataCache[chapterId]) {
                chapterData = chapterDataCache[chapterId];
            } else {
                const dataResponse = await fetch(chapterInfo.dataFile);
                if (!dataResponse.ok) throw new Error(`Errore HTTP ${dataResponse.status} nel caricare ${chapterInfo.dataFile}`);
                chapterData = await dataResponse.json();
                chapterDataCache[chapterId] = chapterData;
            }

            // Carica Codice Python (.py)
            if (chapterCodeCache[chapterId]) {
                chapterCode = chapterCodeCache[chapterId];
            } else {
                const codeResponse = await fetch(chapterInfo.codeFile);
                if (!codeResponse.ok) throw new Error(`Errore HTTP ${codeResponse.status} nel caricare ${chapterInfo.codeFile}`);
                chapterCode = await codeResponse.text();
                chapterCodeCache[chapterId] = chapterCode;
            }

            // Popola l'interfaccia
            explanationContent.innerHTML = chapterData.explanation || '<p>Spiegazione non disponibile.</p>';
            exerciseContent.innerHTML = chapterData.exercise || '<p>Esercizio non disponibile.</p>';

            // Imposta codice nell'editor (controllando prima localStorage)
            let codeToLoad = chapterCode || '# Nessun codice predefinito.';
            try {
                const savedCode = localStorage.getItem('code-' + chapterId);
                if (savedCode !== null) {
                    codeToLoad = savedCode;
                    console.log(`Codice caricato da localStorage per ${chapterId}.`);
                }
            } catch (e) {
                console.error("Errore leggendo codice da localStorage:", e);
            }

            if (codeEditor) {
                codeEditor.setValue(codeToLoad);
                // Pulisce la history dell'editor per il nuovo capitolo
                codeEditor.clearHistory();
                codeEditor.refresh();
            } else {
                pythonCodeTextarea.value = codeToLoad; // Fallback
            }

            // Evidenzia capitolo attivo e stato completato
            const completedChapters = getCompletedChapters();
            document.querySelectorAll('#chapters-list a').forEach(link => {
                const id = link.dataset.chapterId;
                link.classList.remove('active');
                if (id === chapterId) {
                    link.classList.add('active');
                }
                updateChapterLinkStatus(id, completedChapters.has(id));
            });

        } catch (error) {
            console.error(`Errore durante il caricamento del capitolo ${chapterId}:`, error);
            explanationContent.innerHTML = `<p>Errore nel caricamento del contenuto del capitolo. Dettagli: ${error.message}</p>`;
            exerciseContent.innerHTML = '';
            const errorMsg = `# Errore nel caricamento del codice:\n# ${error.message}`;
            if (codeEditor) codeEditor.setValue(errorMsg);
            else pythonCodeTextarea.value = errorMsg;
        }
    }

    // --- Navigation Menu Building ---
    function populateNavigation(manifest) {
        chaptersList.innerHTML = '';
        const completedChapters = getCompletedChapters();
        manifest.forEach(chapterInfo => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = chapterInfo.title;
            link.href = `#${chapterInfo.id}`;
            link.dataset.chapterId = chapterInfo.id;

            // Applica stato iniziale 'completed'
            updateChapterLinkStatus(chapterInfo.id, completedChapters.has(chapterInfo.id));

            link.addEventListener('click', (event) => {
                event.preventDefault();
                const chapterId = event.target.dataset.chapterId;
                loadChapter(chapterId);
                // window.location.hash = chapterId; // Opzionale: aggiorna URL hash

                // Chiudi menu su mobile dopo selezione
                if (window.innerWidth <= 768 && !layoutContainer.classList.contains('menu-collapsed')) {
                    layoutContainer.classList.add('menu-collapsed');
                }
            });

            listItem.appendChild(link);
            chaptersList.appendChild(listItem);
        });
    }

    // --- Load Initial Chapter ---
    function loadInitialChapter() {
        if (chapterManifest.length === 0) {
            explanationContent.innerHTML = '<p>Nessun capitolo definito nel manifest.</p>';
            return;
        }
        // Prova a caricare dall'hash dell'URL, altrimenti il primo capitolo
        const initialHash = window.location.hash.substring(1);
        const chapterExists = chapterManifest.some(ch => ch.id === initialHash);

        if (initialHash && chapterExists) {
            loadChapter(initialHash);
        } else {
            loadChapter(chapterManifest[0].id);
        }
    }

    // --- Fetch Manifest and Initialize App ---
    async function initializeApp() {
        try {
            const response = await fetch('chapters/manifest.json');
            if (!response.ok) throw new Error(`Errore HTTP ${response.status} nel caricare manifest.json`);
            chapterManifest = await response.json();
            console.log("Manifest loaded:", chapterManifest);

            populateNavigation(chapterManifest);
            loadInitialChapter();

        } catch (error) {
            console.error("Errore critico durante l'inizializzazione dell'app:", error);
            chaptersList.innerHTML = '<li>Errore caricamento capitoli</li>';
            explanationContent.innerHTML = `<p>Impossibile caricare la lista dei capitoli. Dettagli: ${error.message}</p>`;
        }
    }

    // --- FUNZIONE: Spiega Errori Python Comuni ---
    function spiegaErrorePython(errorString) {
        // Funzione per fornire suggerimenti sugli errori Python comuni
        if (!errorString || errorString.trim() === '') { return null; }
        let spiegazione = "💡 Suggerimento: ";
        if (errorString.includes("TypeError: can only concatenate str (not \"int\") to str") || errorString.includes("TypeError: can only concatenate str (not \"float\") to str") || errorString.includes("TypeError: unsupported operand type(s) for +: 'str' and 'int'") || errorString.includes("TypeError: unsupported operand type(s) for +: 'str' and 'float'") || errorString.includes("TypeError: unsupported operand type(s) for &: 'str' and 'int'")) { spiegazione += "Sembra che tu stia cercando di unire (concatenare) una stringa (testo) con un numero (int/float) usando l'operatore `+`. Python non lo permette direttamente. Prova a convertire il numero in stringa usando `str()` prima di unirlo. Esempio: `print(\"Ho \" + str(anni) + \" anni\")`. In alternativa, puoi usare le f-string per formattare l'output: `print(f\"Ho {anni} anni\")`."; }
        else if (errorString.includes("NameError:")) { spiegazione += "Si è verificato un 'NameError'. Questo di solito significa che stai usando un nome (di variabile o funzione) che Python non riconosce in quel punto. Controlla attentamente:\n1. Di aver scritto il nome correttamente (maiuscole/minuscole contano!).\n2. Di aver assegnato un valore alla variabile *prima* di provare a usarla.\n3. Se stai usando una funzione da un modulo, di aver importato correttamente il modulo o la funzione specifica."; }
        else if (errorString.includes("SyntaxError:")) { spiegazione += "Si è verificato un 'SyntaxError'. C'è un errore nella 'grammatica' del tuo codice Python. Controlla la riga indicata nell'errore (o quella subito prima) per:\n- Parentesi `()` o quadre `[]` o graffe `{}` non chiuse correttamente.\n- Virgolette `\"` o apici `'` non chiusi correttamente.\n- Due punti `:` mancanti alla fine di righe come `if`, `else`, `elif`, `for`, `while`, `def`, `class`.\n- Parole chiave scritte male (es. `whle` invece di `while`)."; if (errorString.includes("invalid syntax")) { spiegazione += "\n'invalid syntax' è un errore generico, controlla attentamente la struttura della riga indicata."; } else if (errorString.includes("EOL while scanning string literal")) { spiegazione += "\n'EOL while scanning string literal' indica che hai iniziato una stringa con virgolette/apici ma non l'hai chiusa sulla stessa riga."; } else if (errorString.includes("expected ':'")) { spiegazione += "\n'expected ':' indica che probabilmente mancano i due punti alla fine di un'istruzione come `if`, `for`, `def`, ecc."; } }
        else if (errorString.includes("IndentationError:")) { spiegazione += "Si è verificato un 'IndentationError'. Python usa gli spazi all'inizio della riga (indentazione) per capire quali righe di codice appartengono a un blocco (es. cosa eseguire dentro un `if` o un `for`). Assicurati che:\n- Le righe dentro un blocco siano indentate (di solito 4 spazi).\n- L'indentazione sia consistente (usa sempre spazi o sempre tab, non mescolarli).\n- Non ci siano spazi o tab inaspettati all'inizio di una riga."; if (errorString.includes("expected an indented block")) { spiegazione += "\n'expected an indented block' significa che dopo un'istruzione che inizia un blocco (come `if:`, `for:`, `def:`) la riga successiva non è indentata."; } else if (errorString.includes("unindent does not match any outer indentation level")) { spiegazione += "\n'unindent does not match...' significa che una riga è stata de-indentata (riportata a sinistra) in modo non coerente con i livelli di indentazione precedenti."; } }
        else if (errorString.includes("IndexError: list index out of range")) { spiegazione += "Si è verificato un 'IndexError'. Stai cercando di accedere a un elemento di una lista (o tupla, o stringa) usando un indice numerico che non esiste. Ricorda che gli indici partono da 0 (il primo elemento è all'indice 0, il secondo a 1, ecc.). Controlla che l'indice che usi sia valido per la lunghezza della sequenza (da 0 a `len(lista)-1`)."; }
        else if (errorString.includes("KeyError:")) { const keyMatch = errorString.match(/KeyError: (.*)/); const missingKey = keyMatch ? keyMatch[1] : "una chiave"; spiegazione += `Si è verificato un 'KeyError'. Stai cercando di accedere a un valore in un dizionario usando ${missingKey} che non è presente nel dizionario. Controlla che la chiave sia scritta correttamente (maiuscole/minuscole, spazi, ecc.) e che esista davvero nel dizionario. Puoi usare \`dizionario.keys()\` per vedere le chiavi disponibili o \`dizionario.get(${missingKey})\` per evitare l'errore se la chiave potrebbe mancare.`; }
        else if (errorString.includes("ZeroDivisionError:")) { spiegazione += "Si è verificato un 'ZeroDivisionError'. Stai tentando di dividere un numero per zero (`/ 0` o `// 0`), il che è matematicamente impossibile."; }
        else if (errorString.includes("ValueError:")) { spiegazione += "Si è verificato un 'ValueError'. Questo accade spesso quando una funzione riceve un argomento del tipo giusto, ma con un valore inappropriato. Esempio comune: provare a convertire una stringa che non rappresenta un numero in un numero usando `int()` o `float()` (es. `int('ciao')`). Controlla il valore che stai passando alla funzione."; }
        else if (errorString.includes("AttributeError:")) { spiegazione += "Si è verificato un 'AttributeError'. Stai cercando di accedere a un metodo o a un attributo (usando il punto `.`) su un oggetto che non lo possiede. Esempio: provare a usare `.append()` su una stringa (che non ha `append`, solo le liste lo hanno) o scrivere male il nome di un metodo (es. `.lowerr()` invece di `.lower()`). Controlla il tipo dell'oggetto e i metodi/attributi disponibili per quel tipo."; }
        else if (errorString.includes("TypeError:")) { spiegazione += "Si è verificato un 'TypeError'. Questo accade quando provi a usare un'operazione o una funzione su un tipo di dato sbagliato (es. provare a calcolare la lunghezza `len()` di un numero, o usare un operatore matematico tra tipi incompatibili non gestiti prima). Controlla i tipi delle variabili coinvolte nell'operazione che ha causato l'errore."; }
        else { return null; }
        return spiegazione;
    }
    // ----------------------------------------------------

     // --- Run Button functionality ---
     runButton.addEventListener('click', () => {
        // Ottieni il codice da CodeMirror o dalla textarea di fallback
        const code = codeEditor ? codeEditor.getValue() : pythonCodeTextarea.value;
        outputArea.innerHTML = '<div class="output-stdout">Esecuzione in corso...</div>'; // Usa innerHTML e classe
        runButton.disabled = true;

        if (!pyodide) {
            outputArea.innerHTML = '<div class="output-stderr">Errore: Pyodide non è ancora caricato.</div>';
            runButton.disabled = false;
            return;
        }

        // Usa setTimeout per permettere all'UI di aggiornarsi prima dell'esecuzione bloccante
        setTimeout(() => {
            try {
                // Esegui il codice Python (con escape per sicurezza)
                pyodide.runPython(`
import sys, io, traceback, sqlite3, csv, time, datetime, random

_py_exec_output, _py_exec_error = None, None
_old_stdout, _old_stderr = sys.stdout, sys.stderr
_captured_stdout, _captured_stderr = io.StringIO(), io.StringIO()
sys.stdout, sys.stderr = _captured_stdout, _captured_stderr

try:
    # *** CORREZIONE APPLICATA QUI ***
    # Escape backslashes (regex), backticks (regex), AND triple-double-quotes (string replaceAll)
    _processed_code = """${
        code.replace(/\\/g, '\\\\')      // \ -> \\ (CORRETTO)
            .replace(/`/g, '\\`')        // ` -> \`
            .replaceAll('"""', '\\"\\"\\"') // """ -> \"\"\"
    }"""
    exec(_processed_code, globals())
    _py_exec_output = _captured_stdout.getvalue()
    _py_exec_error = _captured_stderr.getvalue()
except Exception as e:
    _py_exec_error = _captured_stderr.getvalue() + traceback.format_exc()
    _py_exec_output = _captured_stdout.getvalue()
finally:
    sys.stdout, sys.stderr = _old_stdout, _old_stderr
`);

                // Recupera risultati
                const capturedOutput = pyodide.globals.get('_py_exec_output');
                const capturedError = pyodide.globals.get('_py_exec_error');

                // Formatta e visualizza output/errore con classi CSS
                outputArea.innerHTML = ''; // Pulisci area

                if (capturedOutput && capturedOutput.trim() !== '') {
                    const outputElement = document.createElement('div');
                    outputElement.className = 'output-stdout';
                    outputElement.textContent = `Output:\n${capturedOutput.trim()}`;
                    outputArea.appendChild(outputElement);
                }

                 if (capturedError && capturedError.trim() !== '') {
                    if (outputArea.hasChildNodes()) { // Aggiungi separatore solo se c'era già output
                        const separator = document.createElement('hr');
                        separator.className = 'output-separator';
                        outputArea.appendChild(separator);
                    }
                    const errorElement = document.createElement('div');
                    errorElement.className = 'output-stderr';
                    errorElement.textContent = `Errore Originale:\n${capturedError.trim()}`;
                    outputArea.appendChild(errorElement);

                    const spiegazioneAmichevole = spiegaErrorePython(capturedError);
                    if (spiegazioneAmichevole) {
                        const hintElement = document.createElement('div');
                        hintElement.className = 'output-hint';
                        hintElement.textContent = `\n${spiegazioneAmichevole}`;
                        outputArea.appendChild(hintElement);
                    }
                }

                // Messaggio se non c'è nulla da mostrare
                if (!outputArea.hasChildNodes()) {
                     // Usiamo textContent qui per il messaggio semplice
                     outputArea.textContent = '(Nessun output o errore)';
                }

            } catch (error) { // Errore JavaScript durante l'esecuzione
                console.error("Errore JavaScript durante l'esecuzione Pyodide:", error);
                outputArea.innerHTML = ''; // Pulisci prima
                const jsErrorElement = document.createElement('div');
                jsErrorElement.className = 'output-stderr';
                jsErrorElement.textContent = `Errore JavaScript durante l'esecuzione: ${error}`;
                 if (error.constructor.name === 'PythonError') {
                     jsErrorElement.textContent += `\n--- Dettagli Python ---\n${error.message}`;
                 }
                outputArea.appendChild(jsErrorElement);
            } finally {
                 runButton.disabled = false; // Riabilita il pulsante
            }
        }, 10); // Piccolo delay per aggiornamento UI
    });



    // --- Mark Complete Button Functionality ---
    if (markCompleteButton) {
        markCompleteButton.addEventListener('click', () => {
            if (currentChapterId) {
                const completedChapters = getCompletedChapters();

                // Toggle completion status
                if (completedChapters.has(currentChapterId)) {
                    // Se è già completo, rimuovilo
                    completedChapters.delete(currentChapterId);
                    saveCompletedChapters(completedChapters);
                    updateChapterLinkStatus(currentChapterId, false); // Aggiorna UI (rimuove spunta)
                    console.log(`Capitolo ${currentChapterId} segnato come NON completato.`);
                    // Feedback visivo opzionale
                    markCompleteButton.textContent = 'Non Completato';
                    setTimeout(() => { markCompleteButton.textContent = 'Segna come Completato'; }, 1500);
                } else {
                    // Se non è completo, aggiungilo
                    completedChapters.add(currentChapterId);
                    saveCompletedChapters(completedChapters);
                    updateChapterLinkStatus(currentChapterId, true); // Aggiorna UI (aggiunge spunta)
                    console.log(`Capitolo ${currentChapterId} segnato come completato.`);
                    // Feedback visivo opzionale
                    markCompleteButton.textContent = 'Completato ✔';
                    setTimeout(() => { markCompleteButton.textContent = 'Segna come Completato'; }, 1500);
                }

            } else {
                console.warn("Nessun capitolo attualmente selezionato.");
            }
        });
    }

    // --- Menu Toggle Functionality ---
    if (menuToggleButton && layoutContainer) {
        menuToggleButton.addEventListener('click', () => {
            layoutContainer.classList.toggle('menu-collapsed');
        });
        // Collassa di default su schermi piccoli
        if (window.innerWidth <= 768) {
             layoutContainer.classList.add('menu-collapsed');
        }
    }

    // --- Start Application ---
    initializeApp(); // Carica manifest e capitolo iniziale
    initializePyodide(); // Carica Pyodide
    initializeCodeEditor(); // Inizializza l'editor CodeMirror

}); // End of DOMContentLoaded listener
