# 1. Ruolo utente
ruolo_utente = "editor" # Prova a cambiare in "admin", "visitatore" o altro

# 2. Stato login
utente_loggato = True # Prova a cambiare in False

# 3. Controllo accessi
if utente_loggato and ruolo_utente == "admin":
    print("Accesso completo al pannello di amministrazione.")
elif utente_loggato and ruolo_utente == "editor":
    print("Accesso limitato alla modifica dei contenuti.")
elif utente_loggato: # Se è loggato ma non admin/editor
    print("Accesso base all'area utenti.")
else: # Se utente_loggato è False
    print("Accesso negato. Effettua il login.")

print("\n-- Fine controllo --")
