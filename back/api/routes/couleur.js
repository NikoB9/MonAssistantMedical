const express = require('express');
const router = express.Router();
const models = require('../../models');

module.exports = () => {

 
    //récupération des couleurs
    router.get('/', (req, res) => {
        models.Couleur.findAll().then((couleur) => {
            res.status(200).send(couleur);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });
    

    //ajout d'une couleur
    router.post('/', (req, res) => {
        models.Couleur.create(req.body).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });;
    });


    //supression d'une couleur
    router.delete('/:id', async(req, res) => {
        models.Couleur.destroy({
            where : {
                id : req.params.id
            }
        }).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });

    //modification de la couleurs
    router.put('/', (req, res) => {
        models.Couleur.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then((response) => {
            console.log(response);
            res.status(200).send(true);
        }).catch((error) => {
            res.status(500).send(error);
        });
    });
    

    return router;
};
