import io

# 1. Lista dati utente (simulazione righe CSV)
dati_utente = [
    "ID,Nome,Email\n",
    "1,Mario,mario@mail.com\n",
    "2,Luisa,luisa@mail.it\n",
    "3,Carlo,carlo@server.org"
]

# 2. Simula scrittura su file
file_csv_simulato = io.StringIO()
try:
    file_csv_simulato.writelines(dati_utente)
    print("Dati scritti nel file simulato.")
except Exception as e:
    print(f"Errore durante la scrittura simulata: {e}")

# 3. Stampa contenuto scritto
print("\n--- Contenuto Scritto nel File Simulato ---")
contenuto_scritto = file_csv_simulato.getvalue()
print(contenuto_scritto)

# 4. Riporta cursore all'inizio
file_csv_simulato.seek(0)

# 5. Leggi e stampa riga per riga
print("\n--- Lettura Riga per Riga dal File Simulato ---")
try:
    for riga in file_csv_simulato:
        print(riga.strip()) # strip() rimuove spazi e newline
except Exception as e:
    print(f"Errore durante la lettura simulata: {e}")
finally:
    file_csv_simulato.close() # Chiudi sempre l'oggetto StringIO
    print("\nFile simulato chiuso.")
