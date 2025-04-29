# 1. Funzione generatore fibonacci
def fibonacci(limite):
    """Genera numeri di Fibonacci fino a un limite."""
    a, b = 0, 1 # Primi due numeri della sequenza
    while a < limite:
        yield a
        a, b = b, a + b # Aggiorna i prossimi due numeri

# 2. Crea il generatore
gen_fib = fibonacci(50)
print(f"Tipo di gen_fib: {type(gen_fib)}")

# 3. Itera e stampa
print("\nNumeri di Fibonacci minori di 50:")
for num in gen_fib:
    print(num)

# 4. (Opzionale) Somma numeri dispari con espressione generatore
somma_dispari = sum(n for n in range(1, 1001) if n % 2 != 0)
print(f"\nSomma dei numeri dispari da 1 a 1000: {somma_dispari}")
