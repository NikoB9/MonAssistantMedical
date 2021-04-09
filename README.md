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

# Sécurité

Cette application ne permet pas de sécuriser les données de l'utilisateur que ce soit pour le back comme pour le front. En effet il y a une fausse sécurisation avec l'authentification qui, en réalité, ne sert qu'à récupérer l'id. Dans toutes les requêtes du back on peut accéder aux informations de l'utilisateur par son simple id. Par conséquent la vérification est très faible, en changeant l'id on peut interférer avec les données d'un autre utilisateur sans avoir son mot de passe. Pour le front l'id est stocké dans le "sessionStorage". Dû à la flexibilité de l'API il suffit de changer l'id de la session dans le navigateur pour se faire passer pour un autre utilisateur.

# Pistes d'amélioration

* Chiffrement des mots de passes
* Sécurisation des requêtes par authentification, login/mot de passe, au lieu du simple id
* Interface d'administration pour ajouter des profils, gérer les types et ajouter de entrées d'analyse

# Guide d'utilisation de l'API

La [documentation d'utilisation](https://app.swaggerhub.com/apis-docs/NikoB9/MonAssitantMedical/1.0.4 "documentation") est disponible ici : [https://app.swaggerhub.com/apis-docs/NikoB9/MonAssitantMedical/1.0.4](https://app.swaggerhub.com/apis-docs/NikoB9/MonAssitantMedical/1.0.4).
