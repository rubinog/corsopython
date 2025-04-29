# Esercizio 1: Numeri da 10 a 1
print("Numeri da 10 a 1:")
# Suggerimento: usa range() con tre argomenti (start, stop, step)
for i in range(10, 0, -1):
    print(i)

# Esercizio 2: Nomi di 4 caratteri
nomi = ["Anna", "Marco", "Luca", "Elisa"]
print("\nNomi di 4 caratteri:")
for nome in nomi:
    if len(nome) == 4:
        print(nome)

# Esercizio 3: Multipli di 3 minori di 20
print("\nMultipli di 3 < 20:")
numero = 3
while numero < 20:
    print(numero)
    numero += 3

# Esercizio 4 (Opzionale): 3 Teste consecutive
import random
print("\nLancio moneta fino a 3 teste consecutive:")
teste_consecutive = 0
lanci_totali = 0
while teste_consecutive < 3:
    lancio = random.choice(['Testa', 'Croce'])
    lanci_totali += 1
    print(f"Lancio {lanci_totali}: {lancio}")
    if lancio == 'Testa':
        teste_consecutive += 1
    else:
        teste_consecutive = 0 # Resetta il contatore
print(f"Ottenute 3 teste consecutive dopo {lanci_totali} lanci!")
