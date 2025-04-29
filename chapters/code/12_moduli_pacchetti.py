# 1. Importa random
import random

# 2. Genera intero casuale
numero_casuale = random.randint(50, 100)
print(f"Numero casuale tra 50 e 100: {numero_casuale}")

# 3. Importa datetime da datetime
from datetime import datetime

# 4. Ottieni anno corrente
anno_corrente = datetime.now().year
print(f"Anno corrente: {anno_corrente}")

# 5. Importa math con alias m
import math as m

# 6. Calcola coseno di pi greco
coseno_pi = m.cos(m.pi)
print(f"Coseno di pi greco: {coseno_pi}") # Dovrebbe essere -1.0
