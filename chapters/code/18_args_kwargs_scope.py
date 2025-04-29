# 1. Definisci la funzione crea_profilo
def crea_profilo(nome, eta, *interessi, **contatti):
    print(f"--- Profilo Utente ---")
    print(f"Nome: {nome}")
    print(f"Età: {eta}")

    print("\nInteressi:")
    if interessi:
        for interesse in interessi:
            print(f"- {interesse}")
    else:
        print("(Nessuno specificato)")

    print("\nContatti:")
    if contatti:
        for tipo_contatto, valore_contatto in contatti.items():
            print(f"- {tipo_contatto.capitalize()}: {valore_contatto}")
    else:
        print("(Nessuno specificato)")
    print("----------------------\n")

# 2. Chiama crea_profilo
crea_profilo("Elena", 28, "Lettura", "Viaggi", "Fotografia",
             email="elena@example.com", linkedin="/in/elena", twitter="@elena_tweets")

crea_profilo("Davide", 40, email="davide@mail.org") # Senza interessi, con un solo contatto

# 3. Variabile globale
stato_app = "Inizializzazione"

# 4. Funzione per aggiornare stato globale
def aggiorna_stato(nuovo_stato):
    global stato_app
    print(f"Aggiornamento stato da '{stato_app}' a '{nuovo_stato}'...")
    stato_app = nuovo_stato

# 5. Stampa stato iniziale
print(f"Stato iniziale app: {stato_app}")

# 6. Chiama aggiorna_stato
aggiorna_stato("Pronto")

# 7. Stampa stato finale
print(f"Stato finale app: {stato_app}")
