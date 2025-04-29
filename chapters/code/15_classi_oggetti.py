# 1. Definisci la classe Libro
class Libro:
    # 2. Metodo __init__
    def __init__(self, titolo, autore, numero_pagine):
        self.titolo = titolo
        self.autore = autore
        self.numero_pagine = numero_pagine
        print(f"Libro '{self.titolo}' creato.")

    # 3. Metodo descrizione
    def descrizione(self):
        return f"'{self.titolo}' di {self.autore}, {self.numero_pagine} pagine."

    # 4. Metodo __str__
    def __str__(self):
        # Possiamo riutilizzare il metodo descrizione!
        return self.descrizione()

# 5. Crea due istanze
libro1 = Libro("Il Signore degli Anelli", "J.R.R. Tolkien", 1200)
libro2 = Libro("Guida Galattica per Autostoppisti", "Douglas Adams", 250)

print("\n-- Test Metodi --")
# 6. Chiama descrizione() su libro1
desc_libro1 = libro1.descrizione()
print(f"Descrizione Libro 1: {desc_libro1}")

# 7. Usa print() su libro2 (chiama __str__)
print(f"Print Libro 2: {libro2}")
