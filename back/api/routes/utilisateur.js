const express = require('express');
const router = express.Router();
const models = require('../../models');

module.exports = () => {

    //Création d'un utilisateur
    //valide : renvoie utilisateur
    //invalide : renvoie erreur
    router.post('/', (req, res) => {
        models.Utilisateur.create(req.body).then((response) => {
            res.status(200).send(response.dataValues);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });;
    });

    //Récupération des informations d'un utilisateur + ses profils
    router.get('/:id', (req, res) => {
        models.Utilisateur.findOne({

            where: { id: req.params.id },
            include: [
                {
                    model: models.Profil,
                }
            ]

        }).then((user) => {
            res.status(200).send(user);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });

    //Authentification d'un utilisateur
    router.get('/authentification', (req, res) => {
        models.Utilisateur.count({

            where: {
                login: req.body.login,
                mot_de_passe: req.body.mdp
            }

        }).then((user) => {
            console.log(user);

            res.status(200).send(user);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500)
        });
    });

    router.delete('/:id', (req , res) => {
        models.Authors.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            res.sendStatus(500);
        });
    });

    router.put('/', (req, res) => {


        //update
        models.Authors.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            res.sendStatus(500);
        });
    });

    //perso : auteurs d'un livre 
    router.get('/book/:id', (req, res) => {
        models.Authors.findAll({ 
        	include: [{ model: models.Books, where: {id: req.params.id}, required: true }] 

    	}).then((authors) => {
            res.send(authors);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500)
        });
    });

    return router;
};
