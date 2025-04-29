# 1. Nome prodotto
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
print(f"Ordine: {numero_pezzi} x {nome_prodotto} - Costo Totale: {costo_totale} euro.")
