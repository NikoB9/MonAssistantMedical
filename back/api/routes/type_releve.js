const express = require('express');
const router = express.Router();
const models = require('../../models');

module.exports = () => {

 
    //récupération des types de relevés
    router.get('/', (req, res) => {
        models.TypeReleve.findAll().then((typereleve) => {
            res.status(200).send(typereleve);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });
    

    //ajout d'un type de relevé
    router.post('/', (req, res) => {
        models.TypeReleve.create(req.body).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });;
    });


    //supression d'un type de relevé
    router.delete('/:id', async(req, res) => {
        models.TypeReleve.destroy({
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

    //modification du type de relevé
    router.put('/:id', async(req, res) => {
        models.TypeReleve.update(req.body, {
            where : {
                id: req.params.id
            }
        });
        res.status(200).send(true);
    });


    return router;
};
