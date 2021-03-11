# MonAssistantMedical

 API permettant de créer une application d'assistance médicale.

 # Schéma de la base de données

![Alt text](ressources/MCD.PNG?raw=true "schéma bd")

# Requis

* node
* mysql

# Installation

* Téléchargement du dossier git
* cd chemin/projet/MonAssistantMedical/back/
* npm install
* npx sequelize db:migrate

# Lancement de l'API

* cd chemin/projet/MonAssistantMedical/back/
* node index.js

# Amélioration

* Chiffrement des mots de passes
* Sécurisation des requêtes par login/mot de passe au lieu de l'id