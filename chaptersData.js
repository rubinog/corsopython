// chaptersData.js

const chapters = [
    // --- INTRO ---
    {
        id: 'introduzione',
        title: 'Introduzione a Python',
        explanation: `
            <h2>Benvenuto nel Mondo di Python!</h2>
            <p>Ciao! Stai per iniziare un viaggio nell'universo di Python, uno dei linguaggi di programmazione più popolari e versatili al mondo. Perché Python?</p>
            <ul>
                <li><strong>Sintassi Chiara:</strong> Il codice Python assomiglia molto all'inglese, rendendolo più facile da leggere e scrivere rispetto a molti altri linguaggi. Questo lo rende ideale per i principianti.</li>
                <li><strong>Versatilità:</strong> Python viene usato ovunque! Dallo sviluppo web (con framework come Django e Flask) all'analisi dei dati, intelligenza artificiale, machine learning, automazione di compiti, scripting, sviluppo di giochi e molto altro.</li>
                <li><strong>Grande Comunità:</strong> Esiste una vasta e attiva comunità di sviluppatori Python. Questo significa tantissime librerie (codice pre-scritto che puoi riutilizzare), tutorial, forum di aiuto e documentazione.</li>
                <li><strong>Interattivo:</strong> Puoi scrivere ed eseguire codice Python una riga alla volta, il che è ottimo per sperimentare e imparare.</li>
            </ul>
            <p>In questo corso interattivo, non solo leggerai le spiegazioni, ma potrai scrivere ed eseguire codice Python direttamente nel browser. Partiremo dalle basi assolute, come le variabili e i tipi di dati, per poi passare a concetti più avanzati.</p>
            <p>L'obiettivo è darti una solida comprensione dei fondamenti di Python, permettendoti di scrivere i tuoi primi programmi e di avere le basi per esplorare aree più specifiche in futuro.</p>
            <p>Non preoccuparti se all'inizio qualcosa sembra complesso. La programmazione è un'abilità che si costruisce con la pratica e la perseveranza. Sbagliare fa parte del processo di apprendimento!</p>
            <p>Sei pronto? Iniziamo dal concetto fondamentale delle variabili nel prossimo capitolo!</p>
        `,
        exercise: `
            <p>Questo capitolo è solo introduttivo.</p>
            <p>Per prendere confidenza con l'editor, prova a modificare il messaggio nel codice predefinito qui sotto e premi "Esegui Codice". Ad esempio, cambia "Ciao, Python!" in "Ciao, Mondo!".</p>
        `,
        defaultCode: `# Benvenuto nel mondo di Python!\n# Questa riga è un commento, Python la ignora.\n# La funzione print() mostra un messaggio nell'area di output.\n\nprint("Ciao, Python!")`
    },
    // --- VARIABILI E TIPI ---
    {
        id: 'variabili_tipi',
        title: 'Variabili e Tipi di Dati',
        explanation: `
            <h2>Variabili: Contenitori Etichettati per i Dati</h2>
            <p>In programmazione, abbiamo costantemente bisogno di memorizzare e manipolare informazioni (dati). Le <strong>variabili</strong> sono i nostri contenitori per questi dati.</p>
            <p>Immagina una variabile come un'etichetta che applichi a una scatola. La scatola contiene un dato (un numero, del testo, ecc.) e l'etichetta (il nome della variabile) ti permette di ritrovare e usare quel dato facilmente. In Python, crei una variabile (assegni un'etichetta) usando l'operatore di assegnamento <code>=</code>.</p>
            <pre><code class="language-python"># Assegniamo il testo "Alice" alla variabile 'nome_utente'
nome_utente = "Alice"

# Assegniamo il numero intero 30 alla variabile 'eta_utente'
eta_utente = 30

# Assegniamo il numero decimale 1.75 alla variabile 'altezza_metri'
altezza_metri = 1.75

# Assegniamo il valore booleano True alla variabile 'is_studente'
is_studente = True</code></pre>
            <p><strong>Nomi delle Variabili (Identificatori):</strong></p>
            <ul>
                <li>Devono iniziare con una lettera (a-z, A-Z) o un underscore (<code>_</code>).</li>
                <li>Possono contenere lettere, numeri (0-9) e underscore.</li>
                <li>Sono <em>case-sensitive</em>: <code>miaVariabile</code> è diversa da <code>miavariabile</code>.</li>
                <li>Non possono essere parole chiave riservate di Python (come <code>if</code>, <code>else</code>, <code>for</code>, <code>while</code>, <code>def</code>, <code>class</code>, ecc.).</li>
                <li>È buona norma usare nomi descrittivi e lo stile <em>snake_case</em> (parole separate da underscore) per la leggibilità: <code>numero_di_scarpe</code> è meglio di <code>nds</code>.</li>
            </ul>
            <p>Puoi cambiare il valore (il contenuto della scatola) associato a una variabile semplicemente riassegnandolo:</p>
            <pre><code class="language-python">punteggio = 100
print(punteggio) # Output: 100
punteggio = 150 # Ora la variabile 'punteggio' contiene 150
print(punteggio) # Output: 150</code></pre>

            <h2>Tipi di Dati Fondamentali: La Natura dei Dati</h2>
            <p>Python è un linguaggio a <strong>tipizzazione dinamica</strong>. Significa che non devi dichiarare esplicitamente il tipo di una variabile (come faresti in altri linguaggi come Java o C++); Python lo capisce automaticamente dal valore che le assegni.</p>
            <p>I tipi di dati fondamentali che incontrerai più spesso sono:</p>
            <ul>
                <li><strong>Stringhe (<code>str</code>):</strong> Rappresentano testo. Si definiscono racchiudendo i caratteri tra virgolette singole (<code>'...'</code>) o doppie (<code>"..."</code>). Puoi usare le une o le altre, ma sii consistente. Se la stringa stessa deve contenere un apice, usa le virgolette doppie per delimitarla, e viceversa.
                    <pre><code class="language-python">saluto = "Ciao a tutti!"
frase = 'Il linguaggio Python è potente.'
citazione = "Lui disse: 'Imparare è divertente!'"</code></pre>
                </li>
                <li><strong>Numeri Interi (<code>int</code>):</strong> Numeri senza parte decimale (positivi, negativi o zero).
                    <pre><code class="language-python">anno_corrente = 2024
temperatura_minima = -5
numero_oggetti = 0</code></pre>
                </li>
                <li><strong>Numeri Decimali (<code>float</code>):</strong> Numeri in virgola mobile (in Python si usa il punto <code>.</code> come separatore decimale).
                    <pre><code class="language-python">prezzo_benzina = 1.89
pi_greco = 3.14159
percentuale = 75.5</code></pre>
                     <p><em>Nota:</em> Anche se scrivi <code>numero = 10.0</code>, Python lo considererà un <code>float</code> a causa del punto decimale.</p>
                </li>
                <li><strong>Booleani (<code>bool</code>):</strong> Rappresentano valori di verità: possono essere solo <code>True</code> (Vero) o <code>False</code> (Falso). Sono cruciali per prendere decisioni nel codice (controllo del flusso). Nota che <code>True</code> e <code>False</code> iniziano con la lettera maiuscola.
                    <pre><code class="language-python">login_effettuato = True
email_verificata = False</code></pre>
                </li>
            </ul>
            <p>Puoi scoprire il tipo di una variabile usando la funzione <code>type()</code>:</p>
            <pre><code class="language-python">x = 10
y = "Testo"
z = 3.14
print(type(x)) # Output: <class 'int'>
print(type(y)) # Output: <class 'str'>
print(type(z)) # Output: <class 'float'></code></pre>

            <h2>Visualizzare i Valori: La Funzione <code>print()</code></h2>
            <p>Come già visto, <code>print()</code> è essenziale per mostrare l'output del tuo programma, incluso il valore contenuto nelle variabili.</p>
            <pre><code class="language-python">nome_utente = "Mario"
punti_gioco = 550
print(nome_utente)
print(punti_gioco)
print("Benvenuto", nome_utente, "Hai totalizzato", punti_gioco, "punti.")
# Nota: print() aggiunge automaticamente uno spazio tra gli elementi separati da virgola.</code></pre>

            <h2>⚠️ Insidia Comune: Mescolare Stringhe e Numeri con <code>+</code></h2>
            <p>L'operatore <code>+</code> ha un doppio significato:</p>
            <ul>
                <li>Tra numeri, esegue la somma matematica.</li>
                <li>Tra stringhe, esegue la <strong>concatenazione</strong> (unisce le stringhe).</li>
            </ul>
            <pre><code class="language-python">num1 = 10
num2 = 5
print(num1 + num2) # Output: 15 (somma)

str1 = "Ciao "
str2 = "Mondo"
print(str1 + str2) # Output: Ciao Mondo (concatenazione)</code></pre>
            <p>Il problema sorge quando provi a usare <code>+</code> tra una stringa e un numero. Python non sa se vuoi fare una somma o unire del testo, quindi solleva un errore <code>TypeError</code>.</p>
            <pre><code class="language-python"># QUESTO CODICE DARÀ ERRORE!
eta = 30
# print("L'utente ha " + eta + " anni.") # TypeError: can only concatenate str (not "int") to str
</code></pre>
            <p><strong>Soluzioni:</strong></p>
            <ol>
                <li><strong>Convertire il numero in stringa con <code>str()</code>:</strong> Puoi dire esplicitamente a Python di trattare il numero come testo prima di unirlo.
                    <pre><code class="language-python">eta = 30
print("L'utente ha " + str(eta) + " anni.") # Output: L'utente ha 30 anni.</code></pre>
                </li>
                <li><strong>Usare le f-string (Metodo Moderno e Consigliato):</strong> Le f-string (stringhe formattate, introdotte in Python 3.6) sono il modo più pulito e leggibile. Metti una <code>f</code> prima delle virgolette e inserisci le variabili o espressioni direttamente tra parentesi graffe <code>{}</code>. Python gestirà la conversione automaticamente.
                    <pre><code class="language-python">eta = 30
nome = "Giulia"
print(f"L'utente {nome} ha {eta} anni.") # Output: L'utente Giulia ha 30 anni.</code></pre>
                    <p>Puoi anche mettere espressioni complesse nelle graffe: <code>print(f"Il doppio dell'età è {eta * 2}.")</code></p>
                </li>
                <li><strong>Passare elementi multipli a <code>print()</code>:</strong> Come visto prima, <code>print()</code> può accettare più argomenti separati da virgola e li stamperà separati da spazi. Questo funziona ma offre meno controllo sulla formattazione rispetto alle f-string.
                    <pre><code class="language-python">eta = 30
print("L'utente ha", eta, "anni.") # Output: L'utente ha 30 anni.</code></pre>
                </li>
            </ol>
            <p>Imparare a gestire i tipi di dati e le conversioni è fondamentale per evitare errori comuni.</p>
        `,
        exercise: `
            <p>1. Crea una variabile <code>nome_prodotto</code> e assegnale il nome di un oggetto (es. "Tastiera").</p>
            <p>2. Crea una variabile <code>costo_unitario</code> e assegnale un valore numerico con decimali (es. 75.99).</p>
            <p>3. Crea una variabile <code>numero_pezzi</code> e assegnale un numero intero (es. 2).</p>
            <p>4. Calcola il costo totale moltiplicando <code>costo_unitario</code> per <code>numero_pezzi</code> e memorizzalo in una variabile <code>costo_totale</code>.</p>
            <p>5. Verifica il tipo di dato della variabile <code>costo_totale</code> usando <code>type()</code> e stampalo.</p>
            <p>6. Usando una <strong>f-string</strong>, stampa una frase che riassume l'ordine, mostrando il numero di pezzi, il nome del prodotto e il costo totale. Esempio: "Ordine: 2 x Tastiera - Costo Totale: 151.98 euro."</p>
        `,
        defaultCode: `# 1. Nome prodotto
nome_prodotto = "Tastiera"

# 2. Costo unitario
costo_unitario = 75.99

# 3. Numero pezzi
numero_pezzi = 2

# 4. Calcola totale
costo_totale = costo_unitario * numero_pezzi

# 5. Verifica e stampa il tipo del costo totale
print("Tipo del costo totale:", type(costo_totale))

# 6. Stampa il riepilogo con una f-string
print(f"Ordine: {numero_pezzi} x {nome_prodotto} - Costo Totale: {costo_totale} euro.")`
    },
    // --- OPERATORI ---
    {
        id: 'operatori',
        title: 'Operatori: Eseguire Calcoli e Confronti',
        explanation: `
            <h2>Operatori: Gli Strumenti per Manipolare i Dati</h2>
            <p>Gli operatori sono simboli speciali che eseguono operazioni su valori (chiamati operandi). Abbiamo già visto l'operatore di assegnamento <code>=</code>. Ora vediamo i più comuni.</p>

            <h2>Operatori Aritmetici: Fare i Conti</h2>
            <p>Questi eseguono le classiche operazioni matematiche:</p>
            <ul>
                <li><code>+</code> : Addizione (<code>10 + 5</code> risulta <code>15</code>)</li>
                <li><code>-</code> : Sottrazione (<code>10 - 5</code> risulta <code>5</code>)</li>
                <li><code>*</code> : Moltiplicazione (<code>10 * 5</code> risulta <code>50</code>)</li>
                <li><code>/</code> : Divisione (restituisce sempre un <code>float</code>) (<code>10 / 5</code> risulta <code>2.0</code>; <code>10 / 4</code> risulta <code>2.5</code>)</li>
                <li><code>//</code> : Divisione Intera (tronca il risultato all'intero inferiore) (<code>10 // 5</code> risulta <code>2</code>; <code>10 // 4</code> risulta <code>2</code>; <code>11 // 4</code> risulta <code>2</code>)</li>
                <li><code>%</code> : Modulo (restituisce il resto della divisione intera) (<code>10 % 5</code> risulta <code>0</code>; <code>10 % 4</code> risulta <code>2</code>; <code>11 % 4</code> risulta <code>3</code>). Utile per verificare se un numero è pari (<code>numero % 2 == 0</code>) o dispari.</li>
                <li><code>**</code> : Esponenziazione (elevamento a potenza) (<code>10 ** 2</code> risulta <code>100</code>; <code>2 ** 3</code> risulta <code>8</code>)</li>
            </ul>
            <pre><code class="language-python">base = 10
altezza = 5
area_rettangolo = base * altezza
print(f"Area: {area_rettangolo}")

dividendo = 17
divisore = 5
quoziente = dividendo // divisore
resto = dividendo % divisore
print(f"{dividendo} diviso {divisore} fa {quoziente} con resto {resto}")</code></pre>
            <p><strong>Ordine di Precedenza:</strong> Python segue le regole matematiche standard (PEMDAS/BODMAS): Parentesi, Esponenziazione, Moltiplicazione/Divisione (da sinistra a destra), Addizione/Sottrazione (da sinistra a destra).</p>
            <pre><code class="language-python">risultato = 5 + 2 * 3 # La moltiplicazione viene prima: 5 + 6
print(risultato) # Output: 11

risultato_con_parentesi = (5 + 2) * 3 # Le parentesi vengono prima: 7 * 3
print(risultato_con_parentesi) # Output: 21</code></pre>

            <h2>Operatori di Confronto: Verificare Relazioni</h2>
            <p>Questi operatori confrontano due valori e restituiscono un valore booleano (<code>True</code> o <code>False</code>). Sono fondamentali per le istruzioni condizionali (<code>if</code>).</p>
            <ul>
                <li><code>==</code> : Uguale a (<code>5 == 5</code> è <code>True</code>; <code>5 == 3</code> è <code>False</code>). <strong>Attenzione:</strong> non confondere con l'assegnamento <code>=</code>!</li>
                <li><code>!=</code> : Diverso da (<code>5 != 3</code> è <code>True</code>; <code>5 != 5</code> è <code>False</code>)</li>
                <li><code>></code> : Maggiore di (<code>5 > 3</code> è <code>True</code>)</li>
                <li><code><</code> : Minore di (<code>5 < 3</code> è <code>False</code>)</li>
                <li><code>>=</code> : Maggiore o uguale a (<code>5 >= 5</code> è <code>True</code>; <code>5 >= 3</code> è <code>True</code>)</li>
                <li><code><=</code> : Minore o uguale a (<code>5 <= 5</code> è <code>True</code>; <code>3 <= 5</code> è <code>True</code>)</li>
            </ul>
            <pre><code class="language-python">eta_maggiore_eta = 18
eta_utente = 20
puo_votare = eta_utente >= eta_maggiore_eta
print(f"L'utente può votare? {puo_votare}") # Output: L'utente può votare? True

password_inserita = "12345"
password_corretta = "segreta"
password_valida = password_inserita == password_corretta
print(f"Password corretta? {password_valida}") # Output: Password corretta? False</code></pre>

            <h2>Operatori Logici: Combinare Condizioni Booleane</h2>
            <p>Questi operatori lavorano su valori booleani (<code>True</code>/<code>False</code>) o su espressioni che restituiscono booleani, permettendo di creare condizioni più complesse.</p>
            <ul>
                <li><code>and</code> : Restituisce <code>True</code> se <strong>entrambi</strong> gli operandi sono veri.
                    <pre><code class="language-python">True and True   # Risultato: True
True and False  # Risultato: False
False and True  # Risultato: False
False and False # Risultato: False</code></pre>
                </li>
                <li><code>or</code> : Restituisce <code>True</code> se <strong>almeno uno</strong> degli operandi è vero.
                    <pre><code class="language-python">True or True    # Risultato: True
True or False   # Risultato: True
False or True   # Risultato: True
False or False  # Risultato: False</code></pre>
                </li>
                <li><code>not</code> : Inverte il valore booleano dell'operando.
                    <pre><code class="language-python">not True  # Risultato: False
not False # Risultato: True</code></pre>
                </li>
            </ul>
            <p><strong>Esempio Combinato:</strong> Verificare se un utente è adulto E ha un account attivo.</p>
            <pre><code class="language-python">eta = 25
account_attivo = True

accesso_consentito = (eta >= 18) and account_attivo
print(f"Accesso consentito? {accesso_consentito}") # Output: Accesso consentito? True

eta_bambino = 10
accesso_consentito_bambino = (eta_bambino >= 18) and account_attivo
print(f"Accesso consentito al bambino? {accesso_consentito_bambino}") # Output: Accesso consentito al bambino? False</code></pre>
            <p><strong>Corto Circuito (Short-circuiting):</strong> Gli operatori <code>and</code> e <code>or</code> sono "pigri".</p>
            <ul>
                <li>Con <code>and</code>, se il primo operando è <code>False</code>, Python sa già che il risultato sarà <code>False</code> e non valuta nemmeno il secondo operando.</li>
                <li>Con <code>or</code>, se il primo operando è <code>True</code>, Python sa già che il risultato sarà <code>True</code> e non valuta il secondo operando.</li>
            </ul>
            <p>Questo può essere utile per evitare errori, ad esempio controllando se un divisore è diverso da zero prima di eseguire la divisione:</p>
            <pre><code class="language-python">numero = 10
divisore = 0
# Senza corto circuito, divisore != 0 and numero / divisore > 5 darebbe ZeroDivisionError
# Con il corto circuito:
if divisore != 0 and numero / divisore > 5:
     print("Il risultato è maggiore di 5")
else:
     print("Il divisore è zero o il risultato non è maggiore di 5")
# Output: Il divisore è zero o il risultato non è maggiore di 5 (nessun errore!)</code></pre>

            <h2>Operatori di Assegnamento Composti</h2>
            <p>Sono scorciatoie per aggiornare il valore di una variabile usando un operatore aritmetico.</p>
            <ul>
                <li><code>+=</code> (es. <code>x += 1</code> è uguale a <code>x = x + 1</code>)</li>
                <li><code>-=</code> (es. <code>x -= 2</code> è uguale a <code>x = x - 2</code>)</li>
                <li><code>*=</code> (es. <code>x *= 3</code> è uguale a <code>x = x * 3</code>)</li>
                <li><code>/=</code> (es. <code>x /= 4</code> è uguale a <code>x = x / 4</code>)</li>
                <li><code>//=</code>, <code>%=</code>, <code>**=</code> funzionano allo stesso modo.</li>
            </ul>
            <pre><code class="language-python">contatore = 0
contatore += 1 # Incrementa di 1
print(contatore) # Output: 1

punteggio = 100
punteggio -= 10 # Decrementa di 10
print(punteggio) # Output: 90</code></pre>
            <p>Questi operatori rendono il codice più conciso quando aggiorni una variabile basandoti sul suo valore attuale.</p>
        `,
        exercise: `
            <p>1. Definisci due variabili numeriche, <code>a = 15</code> e <code>b = 4</code>.</p>
            <p>2. Calcola e stampa la somma, la differenza, il prodotto e la divisione (<code>/</code>) tra <code>a</code> e <code>b</code>.</p>
            <p>3. Calcola e stampa il risultato della divisione intera (<code>//</code>) e il resto (<code>%</code>) di <code>a</code> diviso <code>b</code>.</p>
            <p>4. Verifica (e stampa il risultato <code>True</code>/<code>False</code>) se <code>a</code> è maggiore di <code>b</code>.</p>
            <p>5. Verifica (e stampa il risultato) se <code>a</code> è un numero pari (usa l'operatore modulo <code>%</code>).</p>
            <p>6. Definisci una variabile <code>punti = 50</code>. Usa l'operatore di assegnamento composto <code>+=</code> per aggiungere 25 punti e poi stampa il nuovo valore di <code>punti</code>.</p>
        `,
        defaultCode: `# 1. Definisci le variabili
a = 15
b = 4

# 2. Operazioni aritmetiche base
print(f"{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} * {b} = {a * b}")
print(f"{a} / {b} = {a / b}")

# 3. Divisione intera e resto
print(f"{a} // {b} = {a // b}")
print(f"{a} % {b} = {a % b}")

# 4. Confronto
print(f"{a} > {b} ? {a > b}")

# 5. Verifica se 'a' è pari
print(f"{a} è pari? {(a % 2) == 0}")

# 6. Assegnamento composto
punti = 50
punti += 25
print(f"Nuovo punteggio: {punti}")`
    },
    // --- CONTROLLO FLUSSO ---
    {
        id: 'controllo_flusso',
        title: 'Controllo del Flusso (if/elif/else)',
        explanation: `
            <h2>Prendere Decisioni: L'Istruzione <code>if</code></h2>
            <p>Finora il nostro codice è stato eseguito linearmente, una riga dopo l'altra. Ma spesso abbiamo bisogno che il programma prenda decisioni e si comporti diversamente a seconda delle situazioni. Qui entra in gioco l'istruzione <code>if</code>.</p>
            <p>L'<code>if</code> permette di eseguire un blocco di codice <strong>solo se</strong> una determinata condizione è vera (valutata come <code>True</code>).</p>
            <pre><code class="language-python">temperatura = 25

# La condizione è temperatura > 20
if temperatura > 20:
    # Questo blocco viene eseguito solo se la condizione è True
    print("Fa caldo! È ora di un gelato.")
    print("Ricorda di bere acqua.")

print("Controllo temperatura terminato.") # Questa riga viene eseguita sempre
</code></pre>
            <p><strong>Anatomia dell'<code>if</code>:</strong></p>
            <ul>
                <li>Inizia con la parola chiave <code>if</code>.</li>
                <li>Segue la <strong>condizione</strong> da valutare (un'espressione che risulta <code>True</code> o <code>False</code>, spesso usando operatori di confronto e logici).</li>
                <li>Termina con i due punti <code>:</code>.</li>
                <li>Le righe di codice da eseguire se la condizione è vera devono essere <strong>indentate</strong> (spostate a destra, solitamente di 4 spazi). L'indentazione è fondamentale in Python per definire i blocchi di codice!</li>
            </ul>

            <h2>L'Alternativa: L'Istruzione <code>else</code></h2>
            <p>Cosa succede se la condizione dell'<code>if</code> è falsa? Possiamo specificare un blocco di codice alternativo da eseguire usando <code>else</code>.</p>
            <pre><code class="language-python">temperatura = 15

if temperatura > 20:
    print("Fa caldo!")
else: # Eseguito se temperatura > 20 è False
    print("Non fa molto caldo.")
    print("Forse è meglio una felpa.")

print("Controllo temperatura terminato.")
</code></pre>
            <p>L'<code>else</code> non ha una condizione propria; si lega all'<code>if</code> immediatamente precedente e viene eseguito solo se la condizione di quell'<code>if</code> è <code>False</code>. Anche il blocco <code>else</code> richiede i due punti <code>:</code> e l'indentazione.</p>

            <h2>Controlli Multipli: L'Istruzione <code>elif</code> (Else If)</h2>
            <p>A volte abbiamo bisogno di controllare più condizioni in sequenza. Se la prima è falsa, controlliamo la seconda, poi la terza, e così via. Per questo usiamo <code>elif</code> (abbreviazione di "else if").</p>
            <pre><code class="language-python">voto = 75

if voto >= 90:
    print("Risultato: Ottimo (A)")
elif voto >= 80: # Controllato solo se voto >= 90 è False
    print("Risultato: Distinto (B)")
elif voto >= 70: # Controllato solo se le precedenti sono False
    print("Risultato: Buono (C)")
elif voto >= 60: # Controllato solo se le precedenti sono False
    print("Risultato: Sufficiente (D)")
else: # Eseguito solo se TUTTE le condizioni precedenti sono False
    print("Risultato: Insufficiente (F)")

print("Valutazione completata.")
</code></pre>
            <p><strong>Come funziona la catena <code>if/elif/else</code>:</strong></p>
            <ol>
                <li>Python valuta la condizione dell'<code>if</code>. Se è <code>True</code>, esegue il suo blocco e salta tutti gli <code>elif</code> e l'<code>else</code> successivi.</li>
                <li>Se la condizione dell'<code>if</code> è <code>False</code>, passa al primo <code>elif</code> e ne valuta la condizione. Se è <code>True</code>, esegue il suo blocco e salta il resto.</li>
                <li>Continua così per ogni <code>elif</code>.</li>
                <li>Se nessuna delle condizioni dell'<code>if</code> e degli <code>elif</code> è <code>True</code>, viene eseguito il blocco dell'<code>else</code> (se presente).</li>
            </ol>
            <p>Puoi avere quanti <code>elif</code> vuoi, ma solo un <code>if</code> all'inizio e al massimo un <code>else</code> alla fine.</p>

            <h2>Condizioni Complesse e Nidificazione</h2>
            <p>Le condizioni possono usare gli operatori logici <code>and</code>, <code>or</code>, <code>not</code> per combinare più verifiche.</p>
            <pre><code class="language-python">eta = 22
ha_patente = True

if eta >= 18 and ha_patente:
    print("Può guidare l'auto.")
else:
    print("Non può guidare l'auto.")
</code></pre>
            <p>Puoi anche "nidificare" istruzioni <code>if</code> una dentro l'altra, ma fai attenzione a non rendere il codice troppo complesso e difficile da leggere. L'indentazione diventa ancora più importante!</p>
            <pre><code class="language-python">punteggio = 85
ha_completato_tutorial = False

if punteggio >= 70:
    print("Livello base superato.")
    if ha_completato_tutorial:
        print("Bonus sbloccato!")
    else:
        print("Completa il tutorial per ottenere un bonus.")
else:
    print("Livello non superato.")
</code></pre>

            <h2>Valori "Truthy" e "Falsy"</h2>
            <p>In Python, non solo <code>True</code> e <code>False</code> vengono considerati in contesti booleani. Molti altri valori hanno una "veridicità" implicita:</p>
            <ul>
                <li><strong>Falsy (considerati Falsi):</strong> <code>False</code>, <code>None</code> (un valore speciale che indica assenza di valore), zero numerico (<code>0</code>, <code>0.0</code>), stringhe vuote (<code>""</code>, <code>''</code>), liste/tuple/dizionari/set vuoti (<code>[]</code>, <code>()</code>, <code>{}</code>, <code>set()</code>).</li>
                <li><strong>Truthy (considerati Veri):</strong> Praticamente tutto il resto (<code>True</code>, numeri diversi da zero, stringhe non vuote, liste/tuple/ecc. non vuote).</li>
            </ul>
            <p>Questo permette di scrivere condizioni più concise:</p>
            <pre><code class="language-python">nome_utente = "Luigi"
lista_oggetti = [1, 2]

if nome_utente: # Equivalente a: if nome_utente != ""
    print(f"Benvenuto, {nome_utente}!")
else:
    print("Nome utente non fornito.")

if lista_oggetti: # Equivalente a: if len(lista_oggetti) > 0
    print("La lista contiene elementi.")
else:
    print("La lista è vuota.")
</code></pre>
            <p>Padroneggiare <code>if</code>, <code>elif</code> e <code>else</code> è fondamentale per creare programmi che reagiscono dinamicamente a input e situazioni diverse.</p>
        `,
        exercise: `
            <p>Scrivi un programma che simuli un semplice controllo accessi:</p>
            <ol>
                <li>Crea una variabile <code>ruolo_utente</code> e assegnale una stringa: "admin", "editor" o "visitatore".</li>
                <li>Crea una variabile booleana <code>utente_loggato</code> e impostala a <code>True</code> o <code>False</code>.</li>
                <li>Usando <code>if</code>, <code>elif</code>, <code>else</code> e l'operatore <code>and</code>:
                    <ul>
                        <li>Se l'utente è loggato <strong>E</strong> il suo ruolo è "admin", stampa "Accesso completo al pannello di amministrazione.".</li>
                        <li>Altrimenti, se l'utente è loggato <strong>E</strong> il suo ruolo è "editor", stampa "Accesso limitato alla modifica dei contenuti.".</li>
                        <li>Altrimenti, se l'utente è loggato (indipendentemente dal ruolo, ma non admin o editor), stampa "Accesso base all'area utenti.".</li>
                        <li>Altrimenti (se l'utente non è loggato), stampa "Accesso negato. Effettua il login.".</li>
                    </ul>
                </li>
                <li>Prova a cambiare i valori di <code>ruolo_utente</code> e <code>utente_loggato</code> per vedere come cambia l'output.</li>
            </ol>
        `,
        defaultCode: `# 1. Ruolo utente
ruolo_utente = "editor" # Prova a cambiare in "admin", "visitatore" o altro

# 2. Stato login
utente_loggato = True # Prova a cambiare in False

# 3. Controllo accessi
if utente_loggato and ruolo_utente == "admin":
    print("Accesso completo al pannello di amministrazione.")
elif utente_loggato and ruolo_utente == "editor":
    print("Accesso limitato alla modifica dei contenuti.")
elif utente_loggato: # Se è loggato ma non admin/editor
    print("Accesso base all'area utenti.")
else: # Se utente_loggato è False
    print("Accesso negato. Effettua il login.")

print("\n-- Fine controllo --")`
    },
    // --- CICLI --- (Contenuto originale, da espandere)
    {
        id: 'cicli',
        title: 'Cicli (for/while)',
        explanation: `
            <h2>Ciclo <code>for</code></h2>
            <p>Itera su una sequenza (come una lista, una stringa, o un range).</p>
            <pre><code># Iterare su una lista
frutti = ["mela", "banana", "ciliegia"]
for frutto in frutti:
    print(frutto)

# Iterare usando range()
for i in range(5): # Da 0 a 4
    print(i)</code></pre>
            <h2>Ciclo <code>while</code></h2>
            <p>Esegue un blocco di codice finché una condizione rimane vera.</p>
            <pre><code>contatore = 0
while contatore < 5:
    print(contatore)
    contatore = contatore + 1 # Importante: aggiornare la condizione!</code></pre>
            <p>Attenzione ai cicli infiniti con <code>while</code> se la condizione non diventa mai falsa!</p>
        `,
        exercise: `
            <p>Usa un ciclo <code>for</code> e <code>range()</code> per stampare i numeri da 1 a 5 (inclusi).</p>
            <p>Usa un ciclo <code>while</code> per stampare i numeri pari da 2 a 10 (inclusi).</p>
        `,
        defaultCode: `# Stampa numeri da 1 a 5 con for\nprint("Ciclo for:")\nfor i in range(1, 6):\n    print(i)\n\n# Stampa numeri pari da 2 a 10 con while\nprint("\nCiclo while:")\nnum = 2\nwhile num <= 10:\n    print(num)\n    num = num + 2`
    },
    // ... (Altri capitoli originali, da espandere in modo simile) ...
    // --- LISTE ---
    {
        id: 'liste',
        title: 'Liste',
        explanation: `
            <h2>Cosa sono le Liste?</h2>
            <p>Le liste sono contenitori ordinati e modificabili che possono contenere elementi di tipi diversi.</p>
            <pre><code># Creare una lista
numeri = [1, 2, 3, 4, 5]
misto = ["testo", 10, True, 3.14]</code></pre>
            <h2>Accedere agli Elementi</h2>
            <p>Si accede agli elementi tramite il loro indice (partendo da 0).</p>
            <pre><code>primo_elemento = numeri[0] # Risultato: 1
secondo_elemento = numeri[1] # Risultato: 2</code></pre>
            <h2>Modificare le Liste</h2>
            <p>Le liste sono mutabili, puoi cambiare i loro elementi.</p>
            <pre><code>numeri[0] = 100 # La lista diventa [100, 2, 3, 4, 5]</code></pre>
            <h2>Metodi Utili</h2>
            <ul>
                <li><code>append(x)</code>: Aggiunge <code>x</code> alla fine della lista.</li>
                <li><code>insert(i, x)</code>: Inserisce <code>x</code> all'indice <code>i</code>.</li>
                <li><code>remove(x)</code>: Rimuove la prima occorrenza di <code>x</code>.</li>
                <li><code>pop(i)</code>: Rimuove e restituisce l'elemento all'indice <code>i</code> (o l'ultimo se <code>i</code> non è specificato).</li>
                <li><code>len(lista)</code>: Restituisce la lunghezza della lista.</li>
            </ul>
        `,
        exercise: `
            <p>Crea una lista chiamata <code>animali</code> con i seguenti elementi: "cane", "gatto", "topo".</p>
            <p>Aggiungi "pesce" alla fine della lista.</p>
            <p>Stampa il secondo elemento della lista.</p>
            <p>Stampa la lunghezza finale della lista.</p>
        `,
        defaultCode: `# Crea la lista\nanimali = ["cane", "gatto", "topo"]\n\n# Aggiungi "pesce"\nanimali.append("pesce")\n\n# Stampa il secondo elemento\nprint(animali[1])\n\n# Stampa la lunghezza\nprint(len(animali))\n\n# Stampa la lista completa (opzionale)\nprint(animali)`
    },
    // --- FUNZIONI ---
    {
        id: 'funzioni',
        title: 'Funzioni',
        explanation: `
            <h2>Definire una Funzione</h2>
            <p>Le funzioni sono blocchi di codice riutilizzabili che eseguono un compito specifico. Si definiscono con la parola chiave <code>def</code>.</p>
            <pre><code>def saluta():
    print("Ciao!")</code></pre>
            <h2>Chiamare una Funzione</h2>
            <p>Per eseguire il codice dentro una funzione, devi "chiamarla".</p>
            <pre><code>saluta() # Stampa "Ciao!"</code></pre>
            <h2>Parametri e Argomenti</h2>
            <p>Le funzioni possono accettare input tramite parametri.</p>
            <pre><code>def saluta_persona(nome): # 'nome' è un parametro
    print(f"Ciao, {nome}!")

saluta_persona("Mario") # "Mario" è un argomento</code></pre>
            <h2>Valori di Ritorno</h2>
            <p>Le funzioni possono restituire un valore usando <code>return</code>.</p>
            <pre><code>def somma(a, b):
    return a + b

risultato = somma(5, 3) # risultato ora contiene 8
print(risultato)</code></pre>
        `,
        exercise: `
            <p>Definisci una funzione chiamata <code>moltiplica</code> che accetta due parametri numerici (<code>x</code> e <code>y</code>).</p>
            <p>La funzione deve restituire il prodotto di <code>x</code> e <code>y</code>.</p>
            <p>Chiama la funzione con i valori <code>6</code> e <code>7</code> e stampa il risultato.</p>
        `,
        defaultCode: `# Definisci la funzione\ndef moltiplica(x, y):\n    return x * y\n\n# Chiama la funzione e stampa il risultato\nprodotto = moltiplica(6, 7)\nprint(prodotto)`
    },
    // --- DIZIONARI ---
    {
        id: 'dizionari',
        title: 'Dizionari',
        explanation: `
            <h2>Cosa sono i Dizionari?</h2>
            <p>I dizionari sono collezioni non ordinate di coppie chiave-valore. Le chiavi devono essere uniche e immutabili (es. stringhe, numeri).</p>
            <pre><code># Creare un dizionario
studente = {
    "nome": "Laura",
    "eta": 22,
    "corso": "Informatica"
}</code></pre>
            <h2>Accedere ai Valori</h2>
            <p>Si accede ai valori tramite le loro chiavi.</p>
            <pre><code>print(studente["nome"]) # Stampa "Laura"
print(studente["eta"])  # Stampa 22</code></pre>
            <p>Se la chiave non esiste, si ottiene un errore. Si può usare <code>get()</code> per evitarlo:</p>
            <pre><code>print(studente.get("cognome")) # Stampa None (o un valore di default: get("cognome", "Non presente"))</code></pre>
            <h2>Modificare i Dizionari</h2>
            <p>Puoi aggiungere nuove coppie chiave-valore o modificare quelle esistenti.</p>
            <pre><code># Modificare un valore
studente["eta"] = 23

# Aggiungere una nuova coppia
studente["citta"] = "Roma"

print(studente)</code></pre>
            <h2>Iterare sui Dizionari</h2>
            <pre><code># Iterare sulle chiavi
for chiave in studente:
    print(chiave, studente[chiave])

# Iterare sui valori
for valore in studente.values():
    print(valore)

# Iterare su chiavi e valori
for chiave, valore in studente.items():
    print(f"{chiave}: {valore}")</code></pre>
        `,
        exercise: `
            <p>Crea un dizionario chiamato <code>libro</code> con le seguenti coppie:</p>
            <ul>
                <li><code>"titolo"</code>: "Il Signore degli Anelli"</li>
                <li><code>"autore"</code>: "J.R.R. Tolkien"</li>
                <li><code>"anno"</code>: 1954</li>
            </ul>
            <p>Aggiungi una nuova coppia <code>"genere": "Fantasy"</code>.</p>
            <p>Stampa il valore associato alla chiave <code>"autore"</code>.</p>
            <p>Stampa l'intero dizionario.</p>
        `,
        defaultCode: `# Crea il dizionario\nlibro = {\n    "titolo": "Il Signore degli Anelli",\n    "autore": "J.R.R. Tolkien",\n    "anno": 1954\n}\n\n# Aggiungi il genere\nlibro["genere"] = "Fantasy"\n\n# Stampa l'autore\nprint(libro["autore"])\n\n# Stampa il dizionario completo\nprint(libro)`
    },
    // --- TUPLE ---
    {
        id: 'tuple',
        title: 'Tuple',
        explanation: `
            <h2>Cosa sono le Tuple?</h2>
            <p>Le tuple sono simili alle liste, ma sono <strong>immutabili</strong>, il che significa che non possono essere modificate dopo la creazione. Si definiscono usando parentesi tonde <code>()</code>.</p>
            <pre><code># Creare una tupla
coordinate = (10.0, 25.5)
colori_rgb = (255, 0, 128)</code></pre>
            <h2>Accedere agli Elementi</h2>
            <p>L'accesso agli elementi funziona come per le liste, usando gli indici.</p>
            <pre><code>x = coordinate[0] # Risultato: 10.0
rosso = colori_rgb[0] # Risultato: 255</code></pre>
            <h2>Perché usare le Tuple?</h2>
            <ul>
                <li><strong>Immutabilità:</strong> Garantisce che i dati non vengano cambiati accidentalmente.</li>
                <li><strong>Performance:</strong> Possono essere leggermente più veloci delle liste in alcune operazioni.</li>
                <li><strong>Uso come chiavi di dizionario:</strong> Essendo immutabili, le tuple possono essere usate come chiavi nei dizionari (le liste no).</li>
            </ul>
            <p>Non puoi modificare una tupla (es. <code>coordinate[0] = 5.0</code> causerebbe un errore), ma puoi crearne una nuova basata su quella esistente.</p>
        `,
        exercise: `
            <p>Crea una tupla chiamata <code>giorni_settimana</code> contenente i primi tre giorni della settimana ("lunedì", "martedì", "mercoledì").</p>
            <p>Stampa il secondo giorno della settimana dalla tupla.</p>
            <p>Prova ad aggiungere "giovedì" alla tupla (vedrai un errore nell'output, questo è intenzionale per dimostrare l'immutabilità).</p>
        `,
        defaultCode: `# Crea la tupla\ngiorni_settimana = ("lunedì", "martedì", "mercoledì")\n\n# Stampa il secondo giorno\nprint(giorni_settimana[1])\n\n# Prova a modificare la tupla (questo causerà un errore)\nprint("\nOra proverò ad aggiungere un elemento (causerà un errore):")\ntry:\n    # Le tuple non hanno il metodo append\n    giorni_settimana.append("giovedì") \nexcept AttributeError as e:\n    print(f"Errore come previsto: {e}")\n\ntry:\n    # Non puoi assegnare a un indice\n    giorni_settimana[0] = "Domenica"\nexcept TypeError as e:\n    print(f"Errore come previsto: {e}")`
    },
    // --- SET ---
    {
        id: 'set',
        title: 'Set (Insiemi)',
        explanation: `
            <h2>Cosa sono i Set?</h2>
            <p>I set sono collezioni <strong>non ordinate</strong> di elementi <strong>unici</strong>. Sono utili per operazioni matematiche sugli insiemi come unione, intersezione, differenza.</p>
            <p>Si definiscono usando parentesi graffe <code>{}</code> o la funzione <code>set()</code>.</p>
            <pre><code># Creare un set
numeri_unici = {1, 2, 3, 4, 4, 5} # Duplicati rimossi automaticamente
print(numeri_unici) # Output: {1, 2, 3, 4, 5} (l'ordine può variare)

lettere = set("banana")
print(lettere) # Output: {'a', 'b', 'n'} (l'ordine può variare)</code></pre>
            <h2>Operazioni sui Set</h2>
            <ul>
                <li><code>add(x)</code>: Aggiunge un elemento.</li>
                <li><code>remove(x)</code>: Rimuove un elemento (causa errore se non presente).</li>
                <li><code>discard(x)</code>: Rimuove un elemento se presente (non causa errore).</li>
                <li><code>pop()</code>: Rimuove e restituisce un elemento arbitrario.</li>
                <li><code>clear()</code>: Rimuove tutti gli elementi.</li>
            </ul>
            <h2>Operazioni tra Insiemi</h2>
            <pre><code>set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Unione (|)
print(set1 | set2) # {1, 2, 3, 4, 5}

# Intersezione (&)
print(set1 & set2) # {3}

# Differenza (-)
print(set1 - set2) # {1, 2}

# Differenza simmetrica (^)
print(set1 ^ set2) # {1, 2, 4, 5}</code></pre>
        `,
        exercise: `
            <p>Crea un set chiamato <code>frutta1</code> con "mela", "banana", "arancia".</p>
            <p>Crea un set chiamato <code>frutta2</code> con "banana", "kiwi", "mela".</p>
            <p>Trova e stampa l'unione dei due set.</p>
            <p>Trova e stampa l'intersezione dei due set.</p>
            <p>Trova e stampa gli elementi presenti solo in <code>frutta1</code>.</p>
        `,
        defaultCode: `# Crea i set\nfrutta1 = {"mela", "banana", "arancia"}\nfrutta2 = {"banana", "kiwi", "mela"}\n\n# Unione\nunione = frutta1 | frutta2\nprint(f"Unione: {unione}")\n\n# Intersezione\nintersezione = frutta1 & frutta2\nprint(f"Intersezione: {intersezione}")\n\n# Differenza (elementi solo in frutta1)\ndifferenza = frutta1 - frutta2\nprint(f"Solo in frutta1: {differenza}")`
    },
    // --- STRINGHE ---
    {
        id: 'stringhe_manipolazione',
        title: 'Manipolazione Stringhe',
        explanation: `
            <h2>Concatenazione e Ripetizione</h2>
            <pre><code>str1 = "Ciao"
str2 = " Mondo"
saluto = str1 + str2 # "Ciao Mondo"
ripetizione = str1 * 3 # "CiaoCiaoCiao"</code></pre>
            <h2>Indicizzazione e Slicing</h2>
            <p>Funzionano come per le liste/tuple.</p>
            <pre><code>testo = "Python"
print(testo[0]) # 'P'
print(testo[-1]) # 'n' (ultimo carattere)
print(testo[1:4]) # 'yth' (dall'indice 1 fino a 4 escluso)
print(testo[:3]) # 'Pyt' (dall'inizio fino a 3 escluso)
print(testo[2:]) # 'thon' (dall'indice 2 fino alla fine)</code></pre>
            <h2>Metodi Utili</h2>
            <ul>
                <li><code>len(stringa)</code>: Lunghezza della stringa.</li>
                <li><code>lower()</code> / <code>upper()</code>: Converte in minuscolo/maiuscolo.</li>
                <li><code>strip()</code>: Rimuove spazi bianchi iniziali e finali.</li>
                <li><code>replace(old, new)</code>: Sostituisce occorrenze di <code>old</code> con <code>new</code>.</li>
                <li><code>split(sep)</code>: Divide la stringa in una lista usando <code>sep</code> come separatore (spazio di default).</li>
                <li><code>join(iterable)</code>: Unisce gli elementi di un iterabile (es. lista) in una stringa, usando la stringa stessa come separatore.</li>
                <li><code>find(sub)</code>: Restituisce l'indice della prima occorrenza di <code>sub</code> (o -1 se non trovata).</li>
                <li><code>startswith(prefix)</code> / <code>endswith(suffix)</code>: Controlla se la stringa inizia/finisce con un prefisso/suffisso.</li>
            </ul>
            <h2>f-strings (Formattazione)</h2>
            <p>Un modo comodo per inserire variabili nelle stringhe.</p>
            <pre><code>nome = "Giovanni"
eta = 28
messaggio = f"Mi chiamo {nome} e ho {eta} anni."
print(messaggio)</code></pre>
        `,
        exercise: `
            <p>Crea una stringa <code>frase = "  Python è divertente!  "</code>.</p>
            <p>Rimuovi gli spazi bianchi iniziali e finali.</p>
            <p>Converti la frase tutta in maiuscolo.</p>
            <p>Sostituisci "divertente" con "potente".</p>
            <p>Stampa la lunghezza della stringa finale.</p>
            <p>Stampa la stringa finale.</p>
        `,
        defaultCode: `# Stringa iniziale\nfrase = "  Python è divertente!  "\n\n# Rimuovi spazi\nfrase = frase.strip()\n\n# Converti in maiuscolo\nfrase = frase.upper()\n\n# Sostituisci\nfrase = frase.replace("DIVERTENTE", "POTENTE")\n\n# Stampa lunghezza\nprint(f"Lunghezza: {len(frase)}")\n\n# Stampa frase finale\nprint(frase)`
    },
    // --- MODULI ---
    {
        id: 'moduli_pacchetti',
        title: 'Moduli e Pacchetti',
        explanation: `
            <h2>Importare Moduli</h2>
            <p>I moduli sono file Python contenenti definizioni e istruzioni. Puoi usare codice da altri moduli importandoli.</p>
            <pre><code># Importa l'intero modulo 'math'
import math
print(math.sqrt(16)) # Usa la funzione sqrt dal modulo math -> 4.0

# Importa solo una funzione specifica
from random import randint
print(randint(1, 10)) # Genera un intero casuale tra 1 e 10

# Importa una funzione con un alias (nome alternativo)
from math import pi as PI_GRECO
print(PI_GRECO) # 3.14159...</code></pre>
            <h2>Pacchetti</h2>
            <p>I pacchetti sono collezioni di moduli organizzati in directory. L'importazione funziona in modo simile, usando la notazione col punto.</p>
            <pre><code># Esempio (ipotetico pacchetto 'scienza')
# import scienza.fisica
# print(scienza.fisica.calcola_energia(10))</code></pre>
            <p>Python ha una vasta libreria standard di moduli inclusi. Puoi anche installare pacchetti esterni usando <code>pip</code> (non eseguibile direttamente qui, ma importante da sapere).</p>
        `,
        exercise: `
            <p>Importa il modulo <code>datetime</code>.</p>
            <p>Ottieni e stampa la data e l'ora correnti usando <code>datetime.datetime.now()</code>.</p>
            <p>Importa solo la funzione <code>choice</code> dal modulo <code>random</code>.</p>
            <p>Crea una lista di colori <code>["rosso", "verde", "blu"]</code> e usa <code>choice</code> per selezionare e stampare un colore casuale dalla lista.</p>
        `,
        defaultCode: `# Importa datetime\nimport datetime\n\n# Stampa data e ora correnti\nora_attuale = datetime.datetime.now()\nprint(f"Ora attuale: {ora_attuale}")\n\n# Importa choice da random\nfrom random import choice\n\n# Lista colori\ncolori = ["rosso", "verde", "blu"]\n\n# Scegli e stampa un colore casuale\ncolore_casuale = choice(colori)\nprint(f"Colore casuale: {colore_casuale}")`
    },
    // --- FILE I/O ---
    {
        id: 'file_io',
        title: 'Input/Output File',
        explanation: `
            <h2>Aprire e Leggere File</h2>
            <p>Puoi leggere il contenuto dei file usando la funzione <code>open()</code>. È buona pratica usare il costrutto <code>with</code> che gestisce automaticamente la chiusura del file.</p>
            <pre><code># Nota: L'esecuzione di I/O su file reali non è possibile
# direttamente in questo ambiente browser con Pyodide standard
# per motivi di sicurezza. Questo è un esempio concettuale.

# Ipotetico file 'esempio.txt' con contenuto:
# Riga 1
# Riga 2

# Leggere l'intero file
# with open('esempio.txt', 'r') as f: # 'r' per modalità lettura
#     contenuto = f.read()
#     print(contenuto)

# Leggere riga per riga
# with open('esempio.txt', 'r') as f:
#     for riga in f:
#         print(riga.strip()) # strip() rimuove newline finali</code></pre>
            <h2>Scrivere su File</h2>
            <p>Usa la modalità <code>'w'</code> (write) per scrivere (sovrascrive il file esistente) o <code>'a'</code> (append) per aggiungere alla fine.</p>
            <pre><code># Scrivere su un file (sovrascrive)
# with open('output.txt', 'w') as f:
#     f.write("Questa è la prima riga.\n")
#     f.write("Questa è la seconda.\n")

# Aggiungere a un file
# with open('output.txt', 'a') as f:
#     f.write("Questa riga viene aggiunta.\n")</code></pre>
            <p><strong>Importante:</strong> L'accesso diretto al filesystem locale dal browser è limitato per sicurezza. Pyodide offre modi per interagire con file virtuali o dati caricati, ma non può leggere/scrivere file arbitrari sul computer dell'utente come farebbe uno script Python standard.</p>
        `,
        exercise: `
            <p>Questo esercizio è concettuale, dato che non possiamo scrivere file reali qui.</p>
            <p>Scrivi il codice Python che, <i>ipoteticamente</i>, creerebbe un file chiamato <code>saluti.txt</code> e scriverebbe al suo interno la riga "Ciao dal corso Python!".</p>
            <p>Poi, scrivi il codice che leggerebbe il contenuto di <code>saluti.txt</code> e lo stamperebbe.</p>
        `,
        defaultCode: `# Codice concettuale per scrivere su file\ncontenuto_da_scrivere = "Ciao dal corso Python!"\nprint(f"Ipoteticamente scriverei '{contenuto_da_scrivere}' su 'saluti.txt'")\n# with open('saluti.txt', 'w') as f:\n#     f.write(contenuto_da_scrivere + '\n')\n\nprint("\nIpoteticamente leggerei 'saluti.txt':")\n# with open('saluti.txt', 'r') as f:\n#     contenuto_letto = f.read()\n#     print(contenuto_letto)\n# Simulazione dell'output letto:\nprint(contenuto_da_scrivere)`
    },
    // --- ERRORI ---
    {
        id: 'errori_eccezioni',
        title: 'Gestione Errori (try/except)',
        explanation: `
            <h2>Cosa sono le Eccezioni?</h2>
            <p>Quando si verifica un errore durante l'esecuzione di uno script Python (es. divisione per zero, tentativo di accedere a un indice di lista inesistente), Python solleva un'<strong>eccezione</strong>.</p>
            <p>Se non gestita, un'eccezione interrompe l'esecuzione del programma.</p>
            <h2>Il Blocco <code>try...except</code></h2>
            <p>Permette di "catturare" e gestire specifici tipi di errori senza bloccare il programma.</p>
            <pre><code>try:
    # Codice che potrebbe causare un errore
    risultato = 10 / 0
    print(risultato)
except ZeroDivisionError:
    # Codice da eseguire se si verifica ZeroDivisionError
    print("Errore: Impossibile dividere per zero!")

print("Il programma continua...")</code></pre>
            <h2>Gestire Tipi Diversi di Errori</h2>
            <p>Puoi avere più blocchi <code>except</code>.</p>
            <pre><code>lista = [1, 2, 3]
try:
    indice = 5
    valore = lista[indice]
    # risultato = 10 / 0 # Un altro possibile errore
except ZeroDivisionError:
    print("Errore: Divisione per zero.")
except IndexError:
    print(f"Errore: Indice {indice} fuori dai limiti per la lista.")
except Exception as e: # Cattura generica (usa con cautela)
    print(f"Si è verificato un errore generico: {e}")</code></pre>
            <h2><code>else</code> e <code>finally</code></h2>
            <ul>
                <li><code>else</code>: Eseguito solo se nel blocco <code>try</code> <strong>non</strong> si verificano eccezioni.</li>
                <li><code>finally</code>: Eseguito <strong>sempre</strong>, indipendentemente dal fatto che si sia verificata un'eccezione o meno (utile per pulizia, come chiudere file).</li>
            </ul>
             <pre><code>try:
    num = int(input("Inserisci un numero: ")) # input() non funziona qui
    ris = 10 / num
except ValueError:
    print("Input non valido, inserisci un numero.")
except ZeroDivisionError:
    print("Non puoi dividere per zero.")
else:
    print(f"Il risultato è {ris}")
finally:
    print("Blocco finally eseguito.")</code></pre>
        `,
        exercise: `
            <p>Scrivi un blocco <code>try...except</code> che:</p>
            <ol>
                <li>Tenta di accedere all'elemento all'indice <code>10</code> di una lista <code>numeri = [1, 2, 3]</code>.</li>
                <li>Cattura l'eccezione <code>IndexError</code> e stampa un messaggio appropriato (es. "Errore: Indice non valido!").</li>
                <li>Aggiungi un blocco <code>finally</code> che stampa "Tentativo di accesso completato.".</li>
            </ol>
        `,
        defaultCode: `numeri = [1, 2, 3]\nindice_da_provare = 10\n\nprint(f"Tenterò di accedere all'indice {indice_da_provare} della lista {numeri}")\n\ntry:\n    valore = numeri[indice_da_provare]\n    print(f"Valore trovato: {valore}") # Questo non verrà eseguito\nexcept IndexError:\n    print("Errore: Indice non valido!")\nfinally:\n    print("Tentativo di accesso completato.")`
    },
    // --- CLASSI ---
    {
        id: 'classi_oggetti',
        title: 'Classi e Oggetti (OOP)',
        explanation: `
            <h2>Programmazione Orientata agli Oggetti (OOP)</h2>
            <p>L'OOP è un paradigma di programmazione basato sul concetto di "oggetti", che possono contenere dati (attributi) e codice (metodi).</p>
            <h2>Definire una Classe</h2>
            <p>Una classe è un modello per creare oggetti. Si usa la parola chiave <code>class</code>.</p>
            <pre><code>class Cane:
    # Metodo speciale __init__ (costruttore), eseguito quando si crea un oggetto
    def __init__(self, nome, razza):
        self.nome = nome # Attributo dell'istanza
        self.razza = razza # Attributo dell'istanza
        print(f"Creato un cane di nome {self.nome}")

    # Metodo dell'istanza
    def abbaia(self):
        print(f"{self.nome} dice: Bau!")</code></pre>
            <p><code>self</code> si riferisce all'istanza specifica dell'oggetto.</p>
            <h2>Creare Oggetti (Istanze)</h2>
            <p>Si crea un oggetto "istanziando" la classe.</p>
            <pre><code>mio_cane = Cane("Fido", "Labrador")
altro_cane = Cane("Luna", "Golden Retriever")</code></pre>
            <h2>Accedere ad Attributi e Metodi</h2>
            <pre><code>print(mio_cane.nome) # Stampa "Fido"
print(altro_cane.razza) # Stampa "Golden Retriever"

mio_cane.abbaia() # Esegue il metodo abbaia per mio_cane
altro_cane.abbaia() # Esegue il metodo abbaia per altro_cane</code></pre>
            <p>L'OOP permette di organizzare il codice in modo più strutturato e riutilizzabile, specialmente per programmi complessi.</p>
        `,
        exercise: `
            <p>Definisci una classe chiamata <code>Automobile</code>.</p>
            <p>Nel costruttore <code>__init__</code>, accetta <code>marca</code> e <code>modello</code> come parametri e memorizzali come attributi dell'istanza.</p>
            <p>Aggiungi un metodo chiamato <code>mostra_info</code> che stampa una stringa tipo "Automobile: [marca] [modello]".</p>
            <p>Crea un'istanza della classe <code>Automobile</code> con marca "Fiat" e modello "500".</p>
            <p>Chiama il metodo <code>mostra_info</code> sull'oggetto creato.</p>
        `,
        defaultCode: `# Definisci la classe Automobile\nclass Automobile:\n    def __init__(self, marca, modello):\n        self.marca = marca\n        self.modello = modello\n        print(f"Creata automobile {self.marca} {self.modello}")\n\n    def mostra_info(self):\n        print(f"Automobile: {self.marca} {self.modello}")\n\n# Crea un'istanza\nmia_auto = Automobile("Fiat", "500")\n\n# Chiama il metodo\nmia_auto.mostra_info()`
    },
    // --- LIST COMPREHENSIONS ---
    {
        id: 'list_comprehensions',
        title: 'List Comprehensions',
        explanation: `
            <h2>Cosa sono?</h2>
            <p>Le list comprehensions offrono una sintassi concisa per creare liste basate su iterabili esistenti.</p>
            <p>Sono spesso più leggibili e performanti dei cicli <code>for</code> tradizionali per questo scopo.</p>
            <h2>Sintassi Base</h2>
            <pre><code>nuova_lista = [espressione for elemento in iterabile]</code></pre>
            <p>Esempio: Creare una lista dei quadrati dei numeri da 0 a 9.</p>
            <pre><code># Modo tradizionale con ciclo for
quadrati = []
for x in range(10):
    quadrati.append(x**2)
print(quadrati)

# Con List Comprehension
quadrati_comp = [x**2 for x in range(10)]
print(quadrati_comp)</code></pre>
            <h2>Aggiungere Condizioni</h2>
            <p>Puoi aggiungere una condizione <code>if</code> per filtrare gli elementi.</p>
            <pre><code>nuova_lista = [espressione for elemento in iterabile if condizione]</code></pre>
            <p>Esempio: Creare una lista dei numeri pari da 0 a 9.</p>
            <pre><code># Modo tradizionale
numeri_pari = []
for x in range(10):
    if x % 2 == 0:
        numeri_pari.append(x)
print(numeri_pari)

# Con List Comprehension
numeri_pari_comp = [x for x in range(10) if x % 2 == 0]
print(numeri_pari_comp)</code></pre>
            <p>Puoi anche usare espressioni condizionali nell'<code>espressione</code> stessa.</p>
             <pre><code># Esempio: 'pari' o 'dispari' per ogni numero
parita = ["pari" if x % 2 == 0 else "dispari" for x in range(5)]
print(parita) # ['pari', 'dispari', 'pari', 'dispari', 'pari']</code></pre>
        `,
        exercise: `
            <p>Data la lista <code>nomi = ["Anna", "Marco", "Elisa", "Luca"]</code>.</p>
            <p>Usa una list comprehension per creare una nuova lista contenente la lunghezza di ogni nome.</p>
            <p>Usa una list comprehension per creare una nuova lista contenente solo i nomi che iniziano con la lettera "A" o "E" (usa <code>startswith()</code>).</p>
            <p>Stampa entrambe le nuove liste.</p>
        `,
        defaultCode: `nomi = ["Anna", "Marco", "Elisa", "Luca"]\n\n# List comprehension per le lunghezze\nlunghezze = [len(nome) for nome in nomi]\nprint(f"Lunghezze: {lunghezze}")\n\n# List comprehension per nomi che iniziano con A o E\nnomi_filtrati = [nome for nome in nomi if nome.startswith("A") or nome.startswith("E")]\nprint(f"Nomi filtrati: {nomi_filtrati}")`
    },
    // --- LAMBDA ---
    {
        id: 'lambda',
        title: 'Funzioni Lambda',
        explanation: `
            <h2>Funzioni Anonime</h2>
            <p>Le funzioni lambda sono piccole funzioni anonime (senza nome) definite con la parola chiave <code>lambda</code>.</p>
            <p>Possono avere un numero qualsiasi di argomenti, ma una sola espressione, il cui valore viene restituito.</p>
            <h2>Sintassi</h2>
            <pre><code>lambda argomenti: espressione</code></pre>
            <p>Esempio: Una funzione lambda che somma 10 a un numero.</p>
            <pre><code>aggiungi_dieci = lambda a : a + 10
print(aggiungi_dieci(5)) # Output: 15</code></pre>
            <p>Esempio: Una funzione lambda che moltiplica due numeri.</p>
            <pre><code>moltiplica = lambda x, y : x * y
print(moltiplica(6, 7)) # Output: 42</code></pre>
            <h2>Quando Usarle?</h2>
            <p>Sono utili quando hai bisogno di una piccola funzione per un breve periodo, specialmente come argomento per funzioni di ordine superiore (funzioni che prendono altre funzioni come argomento, come <code>map()</code>, <code>filter()</code>, <code>sorted()</code>).</p>
            <pre><code># Esempio con sorted() per ordinare una lista di tuple
punti = [(1, 2), (3, 1), (5, 4), (2, 3)]

# Ordina in base al secondo elemento della tupla
punti_ordinati = sorted(punti, key=lambda punto: punto[1])
print(punti_ordinati) # Output: [(3, 1), (1, 2), (2, 3), (5, 4)]</code></pre>
        `,
        exercise: `
            <p>Crea una funzione lambda chiamata <code>quadrato</code> che prende un argomento <code>x</code> e restituisce il suo quadrato (<code>x * x</code>).</p>
            <p>Chiama la funzione lambda con il valore <code>9</code> e stampa il risultato.</p>
            <p>Usa una funzione lambda con <code>filter()</code> per creare una lista contenente solo i numeri maggiori di 5 da <code>numeri = [2, 8, 1, 6, 10, 3]</code>. Stampa la nuova lista (potrebbe essere necessario convertirla da oggetto filter a lista con <code>list()</code>).</p>
        `,
        defaultCode: `# Funzione lambda per il quadrato\nquadrato = lambda x: x * x\nrisultato_quadrato = quadrato(9)\nprint(f"Il quadrato di 9 è: {risultato_quadrato}")\n\n# Filtrare una lista con lambda\nnumeri = [2, 8, 1, 6, 10, 3]\nmaggiori_di_5 = list(filter(lambda n: n > 5, numeri))\nprint(f"Numeri maggiori di 5: {maggiori_di_5}")`
    },
    // --- ARGS/KWARGS/SCOPE ---
    {
        id: 'args_kwargs_scope',
        title: 'Argomenti Funzioni e Scope',
        explanation: `
            <h2>Argomenti Posizionali e Keyword</h2>
            <p>Puoi passare argomenti a una funzione per posizione o per nome (keyword).</p>
            <pre><code>def descrivi_animale(tipo, nome):
    print(f"Ho un {tipo} di nome {nome}")

descrivi_animale("cane", "Fido") # Posizionali
descrivi_animale(nome="Luna", tipo="gatto") # Keyword</code></pre>
            <h2>Valori di Default</h2>
            <p>Puoi specificare valori di default per i parametri.</p>
            <pre><code>def saluta(nome, saluto="Ciao"):
    print(f"{saluto}, {nome}!")

saluta("Anna") # Usa il default "Ciao"
saluta("Marco", "Buongiorno") # Sovrascrive il default</code></pre>
            <h2><code>*args</code> (Argomenti Posizionali Variabili)</h2>
            <p>Permette a una funzione di accettare un numero arbitrario di argomenti posizionali, che vengono raccolti in una tupla.</p>
            <pre><code>def somma_tutto(*numeri):
    totale = 0
    for num in numeri:
        totale += num
    return totale

print(somma_tutto(1, 2, 3)) # Output: 6
print(somma_tutto(10, 20)) # Output: 30</code></pre>
            <h2><code>**kwargs</code> (Argomenti Keyword Variabili)</h2>
            <p>Permette a una funzione di accettare un numero arbitrario di argomenti keyword, che vengono raccolti in un dizionario.</p>
            <pre><code>def stampa_info(**info):
    for chiave, valore in info.items():
        print(f"{chiave}: {valore}")

stampa_info(nome="Paolo", eta=35, citta="Milano")</code></pre>
            <h2>Scope (Ambito) delle Variabili</h2>
            <ul>
                <li><strong>Scope Locale:</strong> Variabili definite all'interno di una funzione sono locali a quella funzione.</li>
                <li><strong>Scope Globale:</strong> Variabili definite al di fuori di tutte le funzioni sono globali.</li>
            </ul>
            <pre><code>x = 10 # Globale

def mia_funzione():
    y = 5 # Locale
    print(f"Dentro la funzione, x={x}, y={y}")

mia_funzione()
print(f"Fuori dalla funzione, x={x}")
# print(y) # Causerebbe un errore (y non è definita qui)

# Per modificare una variabile globale dentro una funzione, usa 'global'
def modifica_globale():
    global x
    x = 100

modifica_globale()
print(f"Dopo modifica_globale, x={x}") # Output: 100</code></pre>
        `,
        exercise: `
            <p>Definisci una funzione <code>crea_report</code> che accetta:</p>
            <ul>
                <li>Un argomento posizionale obbligatorio <code>titolo</code>.</li>
                <li>Un numero variabile di argomenti posizionali <code>*sezioni</code> (che rappresentano i nomi delle sezioni del report).</li>
                <li>Un numero variabile di argomenti keyword <code>**dettagli</code> (che rappresentano dettagli aggiuntivi come autore, data, ecc.).</li>
            </ul>
            <p>La funzione deve stampare il titolo, poi elencare le sezioni, e infine stampare i dettagli chiave-valore.</p>
            <p>Chiamala con un titolo, alcune sezioni e alcuni dettagli.</p>
        `,
        defaultCode: `# Definisci la funzione crea_report\ndef crea_report(titolo, *sezioni, **dettagli):\n    print(f"--- Report: {titolo} ---")\n    \n    print("\nSezioni:")\n    if sezioni:\n        for i, sezione in enumerate(sezioni):\n            print(f"- {i+1}. {sezione}")\n    else:\n        print("(Nessuna sezione specificata)")\n        \n    print("\nDettagli Aggiuntivi:")\n    if dettagli:\n        for chiave, valore in dettagli.items():\n            print(f"- {chiave.capitalize()}: {valore}")\n    else:\n        print("(Nessun dettaglio aggiuntivo)")\n    print("------------------------")\n\n# Chiama la funzione\ncrea_report(\n    "Vendite Trimestrali", \n    "Introduzione", "Analisi Dati", "Conclusioni", \n    autore="Mario Rossi", data="2025-04-28", revisione=2\n)\n\ncrea_report("Progetto Alpha") # Chiamata senza sezioni o dettagli`
    },
    // --- DECORATORS ---
    {
        id: 'decorators',
        title: 'Decorators',
        explanation: `
            <h2>Cosa sono i Decorators?</h2>
            <p>I decorators sono un modo per modificare o estendere funzioni o metodi in Python. Usano la sintassi <code>@nome_decorator</code> sopra la definizione della funzione.</p>
            <p>Sono funzioni che prendono un'altra funzione come argomento, aggiungono qualche funzionalità e restituiscono un'altra funzione.</p>
            <h2>Esempio Semplice</h2>
            <pre><code># Definiamo un decorator
def mio_decorator(func):
    def wrapper():
        print("Qualcosa prima della chiamata alla funzione.")
        func() # Chiama la funzione originale
        print("Qualcosa dopo la chiamata alla funzione.")
    return wrapper # Restituisce la funzione "decorata"

# Applichiamo il decorator
@mio_decorator
def saluta():
    print("Ciao, sono la funzione originale!")

# Chiamiamo la funzione decorata
saluta()</code></pre>
            <p>Output:</p>
            <pre><code>Qualcosa prima della chiamata alla funzione.
Ciao, sono la funzione originale!
Qualcosa dopo la chiamata alla funzione.</code></pre>
            <h2>Decorators con Argomenti</h2>
            <p>Se la funzione originale accetta argomenti, il wrapper deve accettarli e passarli usando <code>*args</code> e <code>**kwargs</code>.</p>
            <pre><code>def log_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Chiamata a {func.__name__} con args: {args}, kwargs: {kwargs}")
        risultato = func(*args, **kwargs) # Chiama l'originale
        print(f"{func.__name__} ha restituito: {risultato}")
        return risultato
    return wrapper

@log_decorator
def aggiungi(a, b):
    return a + b

somma_ris = aggiungi(5, 3)
print(f"Risultato finale: {somma_ris}")</code></pre>
            <p>I decorators sono usati comunemente per logging, controllo accessi, caching, ecc.</p>
        `,
        exercise: `
            <p>Crea un decorator chiamato <code>stampa_tempo</code> che:</p>
            <ol>
                <li>Importa il modulo <code>time</code>.</li>
                <li>Prima di chiamare la funzione originale, registra il tempo di inizio (<code>time.time()</code>).</li>
                <li>Chiama la funzione originale.</li>
                <li>Dopo la chiamata, registra il tempo di fine.</li>
                <li>Stampa il tempo trascorso per l'esecuzione della funzione.</li>
            </ol>
            <p>Applica questo decorator a una funzione semplice (es. una che fa un ciclo o usa <code>time.sleep()</code> per simulare lavoro) e chiamala.</p>
        `,
        defaultCode: `import time\n\n# Definisci il decorator stampa_tempo\ndef stampa_tempo(func):\n    def wrapper(*args, **kwargs):\n        start_time = time.time()\n        result = func(*args, **kwargs) # Chiama la funzione originale\n        end_time = time.time()\n        elapsed_time = end_time - start_time\n        print(f"Funzione '{func.__name__}' eseguita in {elapsed_time:.4f} secondi")\n        return result\n    return wrapper\n\n# Applica il decorator\n@stampa_tempo\ndef lavoro_simulato(durata):\n    print(f"Simulo un lavoro per {durata} secondi...")\n    # time.sleep() non è affidabile in Pyodide/browser. \n    # Usiamo un ciclo per simulare attesa (non preciso come sleep).\n    start_wait = time.time()\n    while time.time() - start_wait < durata:\n        pass # Ciclo attivo per 'durata' secondi\n    print("...lavoro simulato completato.")\n    return f"Completato dopo circa {durata}s"\n\n# Chiama la funzione decorata\nlavoro_simulato(0.5) \nlavoro_simulato(0.1)`
    },
    // --- GENERATORS ---
    {
        id: 'generators',
        title: 'Generators',
        explanation: `
            <h2>Cosa sono i Generators?</h2>
            <p>I generatori sono un modo semplice per creare iteratori. Un iteratore è un oggetto su cui puoi ciclare (come una lista), ma i generatori producono i valori uno alla volta (<em>lazy evaluation</em>) invece di memorizzarli tutti in memoria contemporaneamente.</p>
            <p>Sono particolarmente utili per lavorare con sequenze molto grandi o infinite.</p>
            <h2>Creare un Generatore (con <code>yield</code>)</h2>
            <p>Si definisce una funzione generatore come una normale funzione, ma usando la parola chiave <code>yield</code> per restituire un valore. Quando <code>yield</code> viene incontrato, lo stato della funzione viene "congelato" e il valore restituito. Alla successiva iterazione, l'esecuzione riprende da dove si era interrotta.</p>
            <pre><code>def conta_fino_a(n):
    i = 0
    while i < n:
        yield i # Restituisce i e mette in pausa l'esecuzione
        i += 1 # Riprende da qui alla prossima chiamata next()

# Usare il generatore
contatore = conta_fino_a(5)

print(type(contatore)) # <class 'generator'>

# Iterare sul generatore
for numero in contatore:
    print(numero) # Stampa 0, 1, 2, 3, 4

# Puoi iterare solo una volta su un generatore!
print("\nSecondo tentativo di iterazione:")
for numero in contatore:
     print(numero) # Non stampa nulla, il generatore è esaurito</code></pre>
             <h2>Espressioni Generatore</h2>
             <p>Simili alle list comprehensions, ma usano parentesi tonde. Creano un oggetto generatore senza creare la lista completa in memoria.</p>
             <pre><code># List comprehension (crea tutta la lista)
quadrati_lista = [x*x for x in range(10000)] 

# Espressione generatore (crea un oggetto generatore)
quadrati_gen = (x*x for x in range(10000)) 

print(type(quadrati_gen)) # <class 'generator'>

# Puoi iterare sul generatore
# for q in quadrati_gen:
#     print(q) # Stampa i quadrati uno alla volta</code></pre>
        `,
        exercise: `
            <p>Crea una funzione generatore chiamata <code>numeri_pari(limite)</code> che usa <code>yield</code> per generare tutti i numeri pari da 0 fino a <code>limite</code> (escluso).</p>
            <p>Crea un generatore chiamando <code>numeri_pari(10)</code>.</p>
            <p>Itera sul generatore usando un ciclo <code>for</code> e stampa ogni numero pari generato.</p>
        `,
        defaultCode: `# Definisci la funzione generatore\ndef numeri_pari(limite):\n    num = 0\n    while num < limite:\n        if num % 2 == 0:\n            yield num\n        num += 1\n\n# Crea e itera sul generatore\nprint("Numeri pari generati fino a 10:")\ngeneratore_pari = numeri_pari(10)\nfor pari in generatore_pari:\n    print(pari)`
    },
    // --- CSV ---
    {
        id: 'csv_handling',
        title: 'Lavorare con File CSV',
        explanation: `
            <h2>Il Modulo <code>csv</code></h2>
            <p>Python ha un modulo integrato <code>csv</code> per leggere e scrivere file in formato Comma Separated Values (CSV).</p>
            <p><strong>Nota:</strong> Come per l'I/O generico su file, leggere/scrivere file CSV reali dal filesystem locale è limitato in questo ambiente browser. Gli esempi sono concettuali e simulano l'operazione.</p>
            <h2>Leggere File CSV</h2>
            <p>Puoi leggere un CSV riga per riga, dove ogni riga è una lista di stringhe.</p>
            <pre><code>import csv
import io # Usato per simulare un file in memoria

# Simuliamo un file CSV in memoria
csv_data = """Nome,Eta,Citta
Alice,30,New York
Bob,25,Parigi"""

# Leggere dal testo simulato
try:
    file_simulato = io.StringIO(csv_data)
    reader = csv.reader(file_simulato)
    header = next(reader) # Legge l'intestazione
    print(f"Intestazione: {header}")
    for row in reader:
        print(f"Riga dati: {row}") # row è una lista ['Alice', '30', 'New York']
except Exception as e:
    print(f"Errore durante la lettura simulata: {e}")

# Leggere come dizionari usando DictReader
try:
    file_simulato = io.StringIO(csv_data) # Resetta il file simulato
    reader = csv.DictReader(file_simulato)
    print("\nLettura come Dizionari:")
    for row in reader:
        # row è un dizionario {'Nome': 'Alice', 'Eta': '30', 'Citta': 'New York'}
        print(f"Nome: {row['Nome']}, Età: {row['Eta']}")
except Exception as e:
    print(f"Errore durante la lettura simulata (DictReader): {e}")
            </code></pre>
            <h2>Scrivere File CSV</h2>
            <p>Puoi scrivere dati (liste di liste) su un file CSV.</p>
            <pre><code>import csv
import io

# Dati da scrivere
dati_da_scrivere = [
    ['Prodotto', 'Prezzo'],
    ['Laptop', 1200],
    ['Mouse', 25]
]

# Scrivere su un oggetto StringIO (simula un file in memoria)
try:
    output_simulato = io.StringIO()
    writer = csv.writer(output_simulato)
    writer.writerows(dati_da_scrivere)
    
    print("\nContenuto CSV scritto (simulato):")
    print(output_simulato.getvalue()) 
except Exception as e:
     print(f"Errore durante la scrittura simulata: {e}")
            </code></pre>
        `,
        exercise: `
            <p>Questo esercizio usa <code>io.StringIO</code> per simulare la scrittura su file.</p>
            <p>Scrivi il codice Python che:</p>
            <ol>
                <li>Importa <code>csv</code> e <code>io</code>.</li>
                <li>Definisce una lista di liste chiamata <code>utenti</code> contenente: <code>[['ID', 'Nome'], ['1', 'Mario'], ['2', 'Luisa']]</code>.</li>
                <li>Crea un oggetto <code>io.StringIO</code>.</li>
                <li>Usa <code>csv.writer</code> per scrivere i dati <code>utenti</code> sull'oggetto StringIO.</li>
                <li>Stampa il contenuto dell'oggetto StringIO usando <code>getvalue()</code>.</li>
            </ol>
        `,
        defaultCode: `import csv\nimport io\n\n# Dati utente\nutenti = [\n    ['ID', 'Nome'], \n    ['1', 'Mario'], \n    ['2', 'Luisa']\n]\n\ntry:\n    # Crea StringIO\n    output_csv = io.StringIO()\n    \n    # Crea writer e scrivi\n    writer = csv.writer(output_csv)\n    writer.writerows(utenti)\n    \n    # Stampa il contenuto simulato\n    print("Contenuto CSV generato (in memoria):")\n    print(output_csv.getvalue())\n    \nexcept Exception as e:\n    print(f"Errore durante la simulazione: {e}")\n`
    },
    // --- SQLITE ---
    {
        id: 'database_sqlite',
        title: 'Database con SQLite',
        explanation: `
            <h2>Il Modulo <code>sqlite3</code></h2>
            <p>Python include il modulo <code>sqlite3</code> per lavorare con database SQLite, un sistema di database leggero basato su file.</p>
            <p><strong>Nota Importante:</strong> L'interazione diretta con file di database (come <code>.db</code> o <code>.sqlite</code>) dal filesystem locale è <strong>fortemente limitata o impossibile</strong> in ambienti browser come questo (Pyodide) per motivi di sicurezza. Pyodide può usare una versione <strong>in-memory</strong> di SQLite (usando <code>':memory:'</code> come nome del file), che viene cancellata alla fine dell'esecuzione. Non può persistere i dati su file come farebbe uno script Python standard. Gli esempi usano il database in memoria.</p>
            
            <h2>Connessione e Cursore</h2>
            <p>Per interagire con un database, devi prima connetterti e poi creare un oggetto cursore.</p>
            <pre><code>import sqlite3

# Connessione a un DB in memoria (temporaneo)
conn = sqlite3.connect(':memory:') 

# Creare un cursore
cursor = conn.cursor()
print("Connessione al DB in memoria stabilita.")
            </code></pre>

            <h2>Creare una Tabella (SQL <code>CREATE TABLE</code>)</h2>
            <p>Usi comandi SQL eseguiti tramite il cursore.</p>
            <pre><code>try:
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS utenti (
            id INTEGER PRIMARY KEY,
            nome TEXT NOT NULL,
            email TEXT UNIQUE
        )
    """)
    conn.commit() # Salva le modifiche (anche se in memoria)
    print("Tabella 'utenti' creata.")
except sqlite3.Error as e:
    print(f"Errore SQLite durante CREATE TABLE: {e}")
            </code></pre>

            <h2>Inserire Dati (SQL <code>INSERT INTO</code>)</h2>
            <p>È buona pratica usare i placeholder (<code>?</code>) per prevenire SQL injection.</p>
            <pre><code>try:
    # Inserire un singolo utente
    cursor.execute("INSERT INTO utenti (nome, email) VALUES (?, ?)", ('Alice', 'alice@example.com'))
    
    # Inserire più utenti
    utenti_da_inserire = [
        ('Bob', 'bob@example.com'),
        ('Charlie', 'charlie@example.com')
    ]
    cursor.executemany("INSERT INTO utenti (nome, email) VALUES (?, ?)", utenti_da_inserire)
    
    conn.commit() # Salva le modifiche
    print("Dati inseriti nella tabella 'utenti'.")
except sqlite3.Error as e:
    print(f"Errore SQLite durante INSERT: {e}")
            </code></pre>

            <h2>Interrogare Dati (SQL <code>SELECT</code>)</h2>
            <p>Usa <code>fetchone()</code>, <code>fetchall()</code>, o itera direttamente sul cursore.</p>
            <pre><code>try:
    # Seleziona tutti gli utenti
    cursor.execute("SELECT * FROM utenti")
    print("\nUtenti nel database:")
    tutti_gli_utenti = cursor.fetchall() # Ottiene tutte le righe come lista di tuple
    for utente in tutti_gli_utenti:
        print(utente) # Es: (1, 'Alice', 'alice@example.com')

    # Seleziona un utente specifico
    cursor.execute("SELECT * FROM utenti WHERE nome = ?", ('Bob',)) # Nota la virgola per creare una tupla
    bob = cursor.fetchone() # Ottiene la prima (e unica) riga corrispondente
    print(f"\nDati di Bob: {bob}")
except sqlite3.Error as e:
    print(f"Errore SQLite durante SELECT: {e}")
            </code></pre>
            
            <h2>Chiudere la Connessione</h2>
            <p>È importante chiudere la connessione quando hai finito (anche se in memoria).</p>
            <pre><code>conn.close()
print("\nConnessione al database chiusa.")
            </code></pre>
        `,
        exercise: `
            <p>Questo esercizio usa un database in memoria.</p>
            <p>Scrivi il codice Python che:</p>
            <ol>
                <li>Importa <code>sqlite3</code>.</li>
                <li>Si connette a un database in memoria (<code>':memory:'</code>).</li>
                <li>Crea un cursore.</li>
                <li>Crea una tabella <code>prodotti</code> con colonne <code>id</code> (INTEGER PRIMARY KEY), <code>nome</code> (TEXT) e <code>prezzo</code> (REAL).</li>
                <li>Inserisce un prodotto ('Laptop', 999.99) nella tabella.</li>
                <li>Seleziona tutti i prodotti dalla tabella e stampa il risultato usando <code>fetchall()</code>.</li>
                <li>Chiude la connessione.</li>
            </ol>
        `,
        defaultCode: `import sqlite3\n\nconn = None # Inizializza conn a None\ntry:\n    # 1 & 2: Connetti al DB in memoria e crea cursore\n    conn = sqlite3.connect(':memory:')\n    cursor = conn.cursor()\n    print("Connesso al DB in memoria.")\n\n    # 4: Crea tabella prodotti\n    cursor.execute("""\n        CREATE TABLE prodotti (\n            id INTEGER PRIMARY KEY,\n            nome TEXT NOT NULL,\n            prezzo REAL\n        )\n    """)\n    conn.commit()\n    print("Tabella 'prodotti' creata.")\n\n    # 5: Inserisci un prodotto\n    prodotto_da_inserire = ('Laptop', 999.99)\n    cursor.execute("INSERT INTO prodotti (nome, prezzo) VALUES (?, ?)", prodotto_da_inserire)\n    conn.commit()\n    print(f"Prodotto '{prodotto_da_inserire[0]}' inserito.")\n\n    # 6: Seleziona e stampa tutti i prodotti\n    cursor.execute("SELECT * FROM prodotti")\n    tutti_i_prodotti = cursor.fetchall()\n    print("\nProdotti nel DB (in memoria):")\n    if tutti_i_prodotti:\n        for prodotto in tutti_i_prodotti:\n            print(prodotto)\n    else:\n        print("(Nessun prodotto trovato)")\n\nexcept sqlite3.Error as e:\n    print(f"Errore SQLite: {e}")\n\nfinally:\n    # 7: Chiudi la connessione se è stata aperta\n    if conn:\n        conn.close()\n        print("\nConnessione chiusa.")\n`
    }
];
