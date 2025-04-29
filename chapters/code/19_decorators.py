import time

# 1. Definisci il decorator solo_positivi
def solo_positivi(func):
    # 2. Definisci la wrapper che accetta *args e **kwargs
    def wrapper(*args, **kwargs):
        # 3. Controlla se tutti gli argomenti posizionali sono >= 0
        argomenti_validi = True
        for arg in args:
            # Assicurati che sia un numero prima di confrontare
            if isinstance(arg, (int, float)) and arg < 0:
                argomenti_validi = False
                break # Basta un negativo per invalidare
            # Potresti aggiungere un controllo per tipi non numerici se necessario

        # 4. Se validi, chiama la funzione originale
        if argomenti_validi:
            print(f"[Decorator] Argomenti validi, chiamo {func.__name__}")
            return func(*args, **kwargs)
        # 5. Altrimenti, stampa errore e restituisci None
        else:
            print(f"[Decorator] Errore: tutti gli argomenti numerici posizionali devono essere >= 0!")
            return None
    return wrapper

# 6. Funzione da decorare
@solo_positivi
def moltiplica_numeri(*numeri):
    """Moltiplica tutti i numeri passati come argomenti."""
    if not numeri: # Se non ci sono numeri, il prodotto è 1 (elemento neutro)
        return 1
    prodotto = 1
    for num in numeri:
        # Assumiamo che il decorator abbia già filtrato, ma un controllo extra non fa male
        if isinstance(num, (int, float)):
             prodotto *= num
    return prodotto

# 7. Testa la funzione decorata
print("--- Test con numeri positivi ---")
risultato1 = moltiplica_numeri(2, 3, 4)
print(f"Risultato 1: {risultato1}")

print("\n--- Test con un numero negativo ---")
risultato2 = moltiplica_numeri(2, -3, 4)
print(f"Risultato 2: {risultato2}")

print("\n--- Test senza argomenti ---")
risultato3 = moltiplica_numeri()
print(f"Risultato 3: {risultato3}")
