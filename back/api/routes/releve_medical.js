const express = require('express');
const router = express.Router();
const models = require('../../models');

module.exports = () => {

    // récupération des relevés médicaux
    router.get('/', (req, res) => {
        models.ReleveMedical.findAll().then((releves) => {
            res.status(200).send(releves);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500).send(error);
        });
    });

    // creéation d'un relevé médical
    router.post('/', (req, res) => {
        models.ReleveMedical.create(req.body).then((response) => {
            res.status(200).send(response.dataValues);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500).send(error);
        });;
    });

    // modification d'un relevé médical
    router.put('/:id', async(req, res) => {
        models.ReleveMedical.update(req.body, {
            where : {
                id: req.params.id
            }
        }).then((response) => {
            console.log(response);
            res.status(200).send(true);
        }).catch((error) => {
            res.status(500).send(error);
        });
    });

    // suppression d'un relevé médical
    router.delete('/:id', (req , res) => {
        models.ReleveMedical.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500).send(error);
        });
    });

    // récupération d'un relevé par son identifiant
    router.get('/:id', (req, res) => {
        models.ReleveMedical.findByPk(req.params.id).then((response) => {
            res.status(200).send(response);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });

    return router;
};
