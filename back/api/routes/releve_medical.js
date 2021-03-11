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
            console.log(error);
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
            console.log(error);
            res.sendStatus(500).send(error);
        });
    });

    router.get('/:id', (req, res) => {
        models.ReleveMedical.findByPk(req.params.id).then((response) => {
            res.status(200).send(response);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });

    router.get('/utilisateur/:id', (req, res) => {
        models.ReleveMedical.findByPk(req.params.id).then((releves) => {
            res.status(200).send(releves);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });
    //localhost//releve/page/1/utilisateur/1

    //localhost//utilisateur/1/releve/?page=1

    router.get('/?page=:page/utilisateur/:id', (req, res) => {
        NOMBRE_RELEVES_PAR_PAGE = 5
        start = (req.params.page - 1)*NOMBRE_RELEVES_PAR_PAGE
        end = (req.params.page)*NOMBRE_RELEVES_PAR_PAGE 
        // req.query
        console.log(req.params.page)

        models.ReleveMedical.findAll({
            offset: start,
            limit: end,
            where: { 
                UtilisateurId: req.params.id
            }
        }).then((releves) => {
            res.status(200).send(releves);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });

    return router;
};
