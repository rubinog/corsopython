# 1. Crea la lista spesa
spesa = ["pane", "latte", "uova"]
print(f"Iniziale: {spesa}")

# 2. Aggiungi "frutta"
spesa.append("frutta")

# 3. Inserisci "verdura" all'inizio
spesa.insert(0, "verdura")

# 4. Stampa la lista aggiornata
print(f"Aggiornata: {spesa}")

# 5. Rimuovi "latte"
try:
    spesa.remove("latte")
    print(f"Dopo remove('latte'): {spesa}")
except ValueError:
    print("'latte' non trovato nella lista.")

# 6. Stampa la lunghezza finale
print(f"Lunghezza finale: {len(spesa)}")

# 7. Stampa gli elementi con un ciclo for
print("\nLista spesa finale:")
for item in spesa:
    print(f"- {item}")
