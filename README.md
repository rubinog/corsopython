# Impara Python Interattivamente nel Browser

Questo progetto è un ambiente di apprendimento interattivo che ti permette di esplorare i concetti fondamentali e intermedi del linguaggio di programmazione Python direttamente nel tuo browser web, senza dover installare nulla localmente. Utilizza la libreria [Pyodide](https://pyodide.org/) per eseguire codice Python client-side.


## Funzionalità Attuali
*   Navigazione tra diversi capitoli di apprendimento.
*   Spiegazioni dettagliate dei concetti di Python.
*   Esercizi pratici per ogni capitolo.
*   Un editor di codice Python integrato.
*   Esecuzione del codice Python nell'editor tramite Pyodide.
*   Visualizzazione dell'output e degli errori di esecuzione.
*   Suggerimenti amichevoli per errori Python comuni.
*   Struttura modulare con contenuti dei capitoli caricati dinamicamente da file JSON e codice predefinito da file Python separati.


## Come Avviare il Progetto
Poiché il progetto carica i contenuti dei capitoli tramite richieste HTTP (`fetch`), non può essere semplicemente aperto direttamente dal filesystem (`file:///`). Devi servirlo tramite un server web locale.

Il modo più semplice per farlo è usare il server HTTP integrato di Python:

1.  **Apri il Terminale o Prompt dei Comandi.**
2.  **Naviga** nella directory principale del progetto (quella che contiene `index.html`, `script.js`, `style.css` e la cartella `chapters`).
    ```bash
    cd /percorso/alla/tua/cartella/corso
    ```
3.  **Avvia il server** (per Python 3):
    ```bash
    python -m http.server
    ```
    Se usi Python 2 (meno comune):
    ```bash
    python -m SimpleHTTPServer
    ```
4.  Il terminale ti indicherà su quale indirizzo e porta è in ascolto il server (solitamente `http://localhost:8000`).
5.  **Apri il tuo browser web** e vai all'indirizzo indicato (es. `http://localhost:8000`).

Per fermare il server, torna al terminale e premi `Ctrl + C`.


## Struttura del Progetto
La struttura delle cartelle e dei file principali del progetto è la seguente:

corso/ 
├── index.html # Struttura HTML principale della pagina 
├── style.css # Stili CSS per l'aspetto grafico 
├── script.js # Logica JavaScript (caricamento, Pyodide, esecuzione) 
└── chapters/ # Cartella contenente i dati e il codice dei capitoli 
│ ├── 01_introduzione.json # Dati (spiegazione, esercizio) per Cap. 1 
│ ├── 02_variabili.json # Dati per Cap. 2 
│ ├── ... # (altri file .json per ogni capitolo) 
│ ├── 22_database_sqlite.json 
│ └── code/ # Cartella per i file Python di default 
│ │ ├── 01_introduzione.py # Codice Python di default per Cap. 1 
│ │ ├── 02_variabili.py # Codice Python di default per Cap. 2 
│ │ ├── ... # (altri file .py per ogni capitolo) 
│ └──── 22_database_sqlite.py
└──  manifest.json # Indice dei capitoli e percorsi ai file 


*   **`index.html`**: Contiene l'ossatura della pagina web.
*   **`style.css`**: Definisce l'aspetto visivo dell'interfaccia.
*   **`script.js`**: Gestisce il caricamento dei capitoli, l'inizializzazione di Pyodide, l'esecuzione del codice Python e l'aggiornamento dell'interfaccia utente.
*   **`chapters/manifest.json`**: Un file JSON che elenca tutti i capitoli, i loro titoli e i percorsi ai file `.json` (dati) e `.py` (codice) corrispondenti.
*   **`chapters/*.json`**: File JSON contenenti l'ID, il titolo, la spiegazione (HTML) e l'esercizio (HTML) per ciascun capitolo.
*   **`chapters/code/*.py`**: File Python contenenti il codice predefinito mostrato nell'editor per l'esercizio di ciascun capitolo.


## Capitoli Attualmente Coperti
Il corso copre i seguenti argomenti fondamentali e intermedi di Python:

1.  Introduzione a Python
2.  Variabili e Tipi di Dati
3.  Operatori: Eseguire Calcoli e Confronti
4.  Controllo del Flusso (if/elif/else)
5.  Cicli (for/while): Ripetere le Azioni
6.  Liste: Collezioni Ordinate e Modificabili
7.  Funzioni: Blocchi di Codice Riutilizzabili
8.  Dizionari: Coppie Chiave-Valore
9.  Tuple: Sequenze Ordinate e Immutabili
10. Set (Insiemi): Collezioni Uniche e Non Ordinate
11. Manipolazione Stringhe: Lavorare con il Testo
12. Moduli e Pacchetti: Riutilizzare il Codice
13. Input/Output File: Leggere e Scrivere Dati (simulato in memoria)
14. Gestione Errori (try/except)
15. Classi e Oggetti (OOP): Modellare il Mondo Reale
16. List Comprehensions: Creare Liste in Modo Conciso
17. Funzioni Lambda: Funzioni Anonime al Volo
18. Argomenti Funzioni e Scope
19. Decorators: Modificare Funzioni Dinamicamente
20. Generators: Iteratori Efficienti con `yield`
21. Lavorare con File CSV (simulato in memoria)
22. Database con SQLite (in memoria)


## Possibili Espansioni Future
Il progetto offre diverse direzioni per l'espansione, a seconda degli interessi e degli obiettivi:

*   **Approfondimenti su Argomenti Esistenti:**
    *   OOP avanzata (ereditarietà, polimorfismo, metodi speciali).
    *   Moduli `collections` e `itertools` per strutture dati e iteratori avanzati.
    *   Espressioni Regolari (`re`) con esempi più complessi.
*   **Introduzione a Librerie Popolari (verificando il supporto Pyodide):**
    *   **Sviluppo Web:** Introduzione a micro-framework come Flask (anche se l'ambiente browser ha limitazioni I/O). Potrebbe essere più orientato a spiegare i concetti.
    *   **Analisi Dati:** Introduzione a NumPy e Pandas per la manipolazione di dati numerici e tabellari.
    *   **Richieste HTTP:** Utilizzo della libreria `requests` per interagire con API web (se supportato).
*   **Concetti Avanzati:**
    *   Testing con `unittest` o `pytest`.
    *   Type Hinting per codice più robusto.
    *   Programmazione Asincrona (`asyncio`).
*   **Miglioramenti dell'Interfaccia Utente e dell'Esperienza Utente:**
    *   Integrazione di un editor di codice più avanzato con syntax highlighting (es. CodeMirror, Monaco Editor).
    *   Formattazione migliore dell'output (es. distinguere stdout/stderr con colori).
    *   Aggiunta di un sistema per tenere traccia dei capitoli completati.
    *   Possibilità di salvare/caricare il codice dell'utente localmente (usando Local Storage).
*   **Contenuti Aggiuntivi:**
    *   Più esercizi per ogni capitolo.
    *   Esercizi più complessi o basati su piccoli progetti.

Questo `README.md` è solo una panoramica del progetto.
Fammi sapere se vuoi proporre modifiche o integrazioni!

rubinoG
