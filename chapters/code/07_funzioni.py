# 1 & 2. Definisci la funzione is_pari
def is_pari(numero):
    # 3. Aggiungi la docstring
    """Verifica se un numero intero è pari.

    Args:
        numero: Un numero intero.

    Returns:
        True se il numero è pari, False altrimenti.
    """
    return numero % 2 == 0

# 4. Chiama con numero pari
num_pari = 10
risultato_pari = is_pari(num_pari)
print(f"Il numero {num_pari} è pari? {risultato_pari}")

# 5. Chiama con numero dispari
num_dispari = 7
risultato_dispari = is_pari(num_dispari)
print(f"Il numero {num_dispari} è pari? {risultato_dispari}")

# 6. (Opzionale) Funzione stampa_parita
def stampa_parita(num):
    """Stampa se un numero è pari o dispari."""
    if is_pari(num):
        print(f"Il numero {num} è pari.")
    else:
        print(f"Il numero {num} è dispari.")

print("\nUsando stampa_parita:")
stampa_parita(num_pari)
stampa_parita(num_dispari)
stampa_parita(123)
