# 1. Stringa email iniziale
email = "utente.esempio@dominio.com "
print(f"Email originale: '{email}'")

# 2. Rimuovi spazi
email_pulita = email.strip()
print(f"Email pulita: '{email_pulita}'")

# 3. Verifica se finisce con .com
finisce_con_com = email_pulita.endswith(".com")
print(f"Finisce con .com? {finisce_con_com}")

# 4. Trova indice di '@'
indice_chiocciola = email_pulita.find('@')
print(f"Indice di '@': {indice_chiocciola}")

# 5. Estrai nome utente e dominio
if indice_chiocciola != -1: # Assicurati che '@' sia presente
    nome_utente = email_pulita[:indice_chiocciola]
    dominio = email_pulita[indice_chiocciola + 1:]
    # 6. Stampa nome utente e dominio
    print(f"Nome utente: {nome_utente}")
    print(f"Dominio: {dominio}")
else:
    print("Formato email non valido.")

# 7. Sostituisci dominio
nuova_email = email_pulita.replace("dominio.com", "nuovodominio.net")
print(f"Nuova email: {nuova_email}")
