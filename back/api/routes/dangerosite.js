const express = require('express');
const router = express.Router();
const models = require('../../models');

module.exports = () => {

 
    //récupération des couleurs
    router.get('/', (req, res) => {
        models.Dangerosite.findAll().then((dangerosite) => {
            res.status(200).send(dangerosite);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });
    

    //ajout d'une couleur
    router.post('/', (req, res) => {
        models.Dangerosite.create(req.body).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });;
    });


    //supression d'une couleur
    router.delete('/:id', async(req, res) => {
        models.Dangerosite.destroy({
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
    router.put('/:id', async(req, res) => {
        models.Dangerosite.update(req.body, {
            where : {
                id: req.params.id
            }
        });
        res.status(200).send(true);
    });
    

    return router;
};
