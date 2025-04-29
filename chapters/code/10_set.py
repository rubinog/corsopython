# 1. Lista con duplicati
numeri_con_duplicati = [1, 5, 2, 8, 5, 3, 1, 9, 2]

# 2. Crea set per rimuovere duplicati
numeri_unici = set(numeri_con_duplicati)

# 3. Stampa il set
print(f"Set di numeri unici: {numeri_unici}")

# 4. Aggiungi 10
numeri_unici.add(10)
print(f"Dopo aver aggiunto 10: {numeri_unici}")

# 5. Verifica presenza di 5
print(f"Il numero 5 è nel set? {5 in numeri_unici}")

# 6. Crea un secondo set
altri_numeri = {5, 10, 15, 20}
print(f"Secondo set: {altri_numeri}")

# 7. Calcola e stampa intersezione
intersezione = numeri_unici & altri_numeri
print(f"Intersezione: {intersezione}")

# 8. Calcola e stampa unione
unione = numeri_unici | altri_numeri
print(f"Unione: {unione}")
