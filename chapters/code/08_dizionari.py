# 1. Crea il dizionario prodotto
prodotto = {
    "codice": "XYZ123",
    "nome": "Smartphone",
    "prezzo": 499.99,
    "disponibile": True
}
print(f"Dizionario iniziale: {prodotto}")

# 2. Stampa il nome
print(f"\nNome prodotto: {prodotto['nome']}")

# 3. Aggiungi la marca
prodotto["marca"] = "TechCorp"
print(f"Dopo aggiunta marca: {prodotto}")

# 4. Modifica il prezzo
prodotto["prezzo"] = 479.99
print(f"Dopo modifica prezzo: {prodotto}")

# 5. Cerca il colore con get()
colore_prodotto = prodotto.get("colore", "N/D")
print(f"\nColore (get con default): {colore_prodotto}")

# 6. Stampa tutte le coppie
print("\nDettagli prodotto:")
for chiave, valore in prodotto.items():
    print(f"- {chiave.capitalize()}: {valore}")
