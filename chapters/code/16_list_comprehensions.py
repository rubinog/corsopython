# 1. Lista originale
nomi = ["Anna", "Marco", "Elisa", "Luca"]
print(f"Lista originale: {nomi}")

# 2. List comprehension per le lunghezze
lunghezze = [len(nome) for nome in nomi]
print(f"Lunghezze: {lunghezze}")

# 3. List comprehension per nomi che iniziano con A o E
nomi_filtrati = [nome for nome in nomi if nome.startswith("A") or nome.startswith("E")]
print(f"Nomi filtrati: {nomi_filtrati}")
