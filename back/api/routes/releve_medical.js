const express = require('express');
const router = express.Router();
const models = require('../../models');

module.exports = () => {

    router.get('/', (req, res) => {
        models.ReleveMedical.findAll().then((releves) => {
            res.status(200).send(releves);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500).send(error);
        });
    });

    router.post('/', (req, res) => {
        models.ReleveMedical.create(req.body).then((response) => {
            res.status(200).send(response.dataValues);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500).send(error);
        });;
    });

    router.put('/', (req, res) => {
        //update
        models.ReleveMedical.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            res.sendStatus(500).send(error);
        });
    });

    router.delete('/:id', (req , res) => {
        models.ReleveMedical.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            res.sendStatus(500).send(error);
        });
    });

    router.get('/:id', (req, res) => {
        models.ReleveMedical.findOne({
            where: { 
                id: req.params.id 
            }
        }).then((response) => {
            res.status(200).send(response);
        }).catch((error) => {
            res.status(500).send(error);
        });
    });

    return router;
};
