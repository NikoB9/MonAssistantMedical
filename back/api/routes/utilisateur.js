const express = require('express');
const router = express.Router();
const models = require('../../models');

module.exports = () => {

    //Création d'un utilisateur
    router.post('/', (req, res) => {
        models.Utilisateur.create(req.body).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500)
        });;
    });

    router.get('/:id', (req, res) => {
        models.Authors.findByPk(req.params.id).then((author) => {
            res.send(author);
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
