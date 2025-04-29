def dividi_elementi(lista, divisore):
    """Divide gli elementi numerici di una lista per un divisore, gestendo errori."""
    risultati = []
    for elemento in lista:
        try:
            # Tenta la divisione
            risultato_divisione = elemento / divisore
            risultati.append(risultato_divisione)
        except ZeroDivisionError:
            print(f"Errore: Impossibile dividere {elemento} per zero. Salto.")
            # Puoi decidere di interrompere tutto il ciclo qui con 'break' se preferisci
        except TypeError:
            print(f"Errore: L'elemento '{elemento}' non è un numero valido. Salto.")
        except Exception as e:
            # Cattura altri errori imprevisti per quell'elemento
            print(f"Errore imprevisto con l'elemento {elemento}: {e}. Salto.")
    return risultati

# Test 1: Divisore valido, lista mista
lista_input = [10, 20, 'trenta', 40, 0, 50.5]
divisore_valido = 5
print(f"Divisione di {lista_input} per {divisore_valido}:")
output1 = dividi_elementi(lista_input, divisore_valido)
print(f"Risultati validi: {output1}")

print("\n" + "-"*20 + "\n")

# Test 2: Divisore zero
divisore_zero = 0
print(f"Divisione di {lista_input} per {divisore_zero}:")
output2 = dividi_elementi(lista_input, divisore_zero)
print(f"Risultati validi: {output2}")
