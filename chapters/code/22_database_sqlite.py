import sqlite3

conn = None # Inizializza a None per il blocco finally

# --- INIZIO BLOCCO TRY PRINCIPALE ---
try:
    # 2. Connetti e crea cursore
    conn = sqlite3.connect(':memory:')
    cursor = conn.cursor()
    print("Connesso al DB in memoria.")

    # 3. Crea tabella contatti
    cursor.execute("""
CREATE TABLE contatti (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT UNIQUE,
    telefono TEXT
)
""")
    conn.commit()
    print("Tabella 'contatti' creata.")

    # 4. Inserisci contatti con executemany
    contatti_da_inserire = [
        ('Mario Rossi', 'mario.rossi@email.com', '123456'),
        ('Laura Bianchi', 'laura.bianchi@email.it', '789012'),
        ('Paolo Verdi', 'paolo.verdi@server.net', None) # Telefono opzionale
    ]
    cursor.executemany("INSERT INTO contatti (nome, email, telefono) VALUES (?, ?, ?)", contatti_da_inserire)
    conn.commit() # Commit dopo l'inserimento
    print(f"{len(contatti_da_inserire)} contatti inseriti.")

    # 5. SELECT tutti i contatti
    print("\n--- Tutti i Contatti ---")
    cursor.execute("SELECT * FROM contatti")
    # 6. Fetchall e stampa
    tutti_contatti = cursor.fetchall()
    for contatto in tutti_contatti:
        print(contatto)

    # 7. SELECT nome ed email specifici
    nome_da_cercare = 'Laura Bianchi'
    print(f"\n--- Dettagli per {nome_da_cercare} ---")
    cursor.execute("SELECT nome, email FROM contatti WHERE nome = ?", (nome_da_cercare,))
    # 8. Fetchone e stampa
    contatto_specifico = cursor.fetchone()
    if contatto_specifico:
        print(contatto_specifico)
    else:
        print(f"Contatto '{nome_da_cercare}' non trovato.")

# --- BLOCCO EXCEPT CORRISPONDENTE AL TRY ---
except sqlite3.Error as e:
    print(f"Errore SQLite: {e}")

# --- BLOCCO FINALLY CORRISPONDENTE AL TRY ---
finally:
    # 9. Chiudi connessione
    if conn:
        conn.close()
        print("\nConnessione al database chiusa.")
# --- FINE BLOCCO TRY...EXCEPT...FINALLY ---
