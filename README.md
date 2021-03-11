# MonAssistantMedical

 API permettant de créer une application d'assistance médicale.

# Schéma de la base de données

![Alt text](ressources/MCD.PNG?raw=true "schéma bd")

# Pré-requis

* Docker

# Installation

* Téléchargement du dossier git
```bash
$ cd chemin/projet/MonAssistantMedical/
$ docker-compose build
```

# Lancement de l'API

```bash
$ docker-compose up -d db
$ docker-compose up -d back
//attendre 10/15 secondes avant de migrer la base de données avec la commande suivante
$ docker-compose run --rm back npx sequelize db:migrate
```

# Pistes d'amélioration

* Chiffrement des mots de passes
* Sécurisation des requêtes par login/mot de passe au lieu de l'id

# Guide d'utilisation

La [documentation d'utilisation](https://app.swaggerhub.com/apis-docs/NikoB9/MonAssitantMedical/1.0.2 "documentation") est disponible ici : [https://app.swaggerhub.com/apis-docs/NikoB9/MonAssitantMedical/1.0.2](https://app.swaggerhub.com/apis-docs/NikoB9/MonAssitantMedical/1.0.2).
