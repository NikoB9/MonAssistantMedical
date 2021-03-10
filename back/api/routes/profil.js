const express = require('express');
const router = express.Router();
const models = require('../../models');

module.exports = () => {

    //récupération des profils
    router.get('/', (req, res) => {
        models.Profil.findAll().then((profil) => {
            res.status(200).send(profil);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });
    

    //ajout d'un profil
    router.post('/', (req, res) => {
        models.Profil.create(req.body).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });;
    });


    //supression d'un profil
    router.delete('/:id', async(req, res) => {
        models.Profil.destroy({
            where : {
                id : req.params.id
            }
        });
        res.status(200).send(true);
    });

    //modification du profil
    router.put('/:id', async(req, res) => {
        delete req.body.title
        models.Profil.update(req.body, {
            where : {
                id: req.params.id
            }
        });
        res.status(200).send(true);
    });

    return router;
};
