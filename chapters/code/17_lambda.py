# Funzione lambda per il quadrato
quadrato = lambda x: x * x
risultato_quadrato = quadrato(9)
print(f"Il quadrato di 9 è: {risultato_quadrato}")

# Filtrare una lista con lambda
numeri = [2, 8, 1, 6, 10, 3]
maggiori_di_5 = list(filter(lambda n: n > 5, numeri))
print(f"Numeri maggiori di 5: {maggiori_di_5}")

# Mappa a valore assoluto
valori_assoluti_iter = map(lambda n: abs(n), numeri)
# Converti mappa in lista e stampa
lista_assoluti = list(valori_assoluti_iter)
print(f"Valori assoluti: {lista_assoluti}")
