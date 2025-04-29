import csv
import io

# 1. Lista di dizionari studenti
studenti = [
    {'matricola': 'S101', 'nome': 'Anna Verdi', 'voto': 28},
    {'matricola': 'S102', 'nome': 'Bruno Rossi', 'voto': 25},
    {'matricola': 'S103', 'nome': 'Carla Neri', 'voto': 30}
]

# 2. Nomi colonne
nomi_colonne = ['matricola', 'nome', 'voto']

# Oggetto StringIO per simulare il file
file_csv_simulato = io.StringIO()

# 3. Scrittura con DictWriter
print("--- Scrittura CSV Simulato ---")
try:
    writer = csv.DictWriter(file_csv_simulato, fieldnames=nomi_colonne)
    writer.writeheader() # Scrive l'intestazione
    writer.writerows(studenti) # Scrive i dati
    print("Dati scritti con successo.")
except Exception as e:
    print(f"Errore durante la scrittura: {e}")

# 4. Stampa contenuto generato
print("\nContenuto CSV Generato:")
contenuto_generato = file_csv_simulato.getvalue()
print(contenuto_generato)

# 5. Riporta cursore all'inizio
file_csv_simulato.seek(0)

# 6. Lettura con DictReader e stampa
print("--- Lettura CSV Simulato ---")
try:
    reader = csv.DictReader(file_csv_simulato)
    for studente_dict in reader:
        print(f"Matricola: {studente_dict['matricola']}, Nome: {studente_dict['nome']}, Voto: {studente_dict['voto']}")
except Exception as e:
    print(f"Errore durante la lettura: {e}")
finally:
    file_csv_simulato.close()
    print("\nFile simulato chiuso.")
