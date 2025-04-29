# 1. Crea la tupla info_persona
info_persona = ("Alice", 30, "Roma")
print(f"Tupla: {info_persona}")

# 2. Stampa il secondo elemento
print(f"Età: {info_persona[1]}")

# 3. Unpacking
nome, eta, citta = info_persona

# 4. Stampa le variabili spacchettate
print(f"\nDopo unpacking:")
print(f"Nome: {nome}")
print(f"Eta: {eta}")
print(f"Citta: {citta}")

# 5. Conta occorrenze
valori = (5, 10, 15, 10, 20)
conteggio_10 = valori.count(10)
print(f"\nIl numero 10 appare {conteggio_10} volte in {valori}")

# 6. Prova a modificare (causerà errore)
print("\nTentativo di modifica (causerà errore):")
try:
    # Le tuple non hanno append
    info_persona.append("Nuovo Valore")
except AttributeError as e:
    print(f"Errore previsto (AttributeError): {e}")
try:
    # Non si può assegnare a un indice
    info_persona[0] = "Bob"
except TypeError as e:
    print(f"Errore previsto (TypeError): {e}")
