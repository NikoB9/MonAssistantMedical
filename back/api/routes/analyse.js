const express = require('express');
const router = express.Router();
const models = require('../../models');
const { Op } = require('sequelize');

module.exports = () => {

    //récupération des analyses
    router.get('/', (req, res) => {
        models.Analyse.findAll().then((analyse) => {
            res.status(200).send(analyse);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });
    

    //ajout d'une analyse
    router.post('/', (req, res) => {
        models.Analyse.create(req.body).then((analyse) => {
            res.status(200).send(analyse);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });;
    });


    //supression d'une analyse
    router.delete('/:id', async(req, res) => {
        models.Analyse.destroy({
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

    //modification d'une analyse
    router.put('/:id', async(req, res) => {
        models.Analyse.update(req.body, {
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

    // récupération des analyses d'un relevé
    router.get('/releve/:releveId', async(req, res) => {
        try {
            const releve = await models.ReleveMedical.findByPk(req.params.releveId);
            const utilisateur = await releve.getUtilisateur();
            const profils = await utilisateur.getProfils();
            let profilsId = [];
            profils.forEach(profil => {
                profilsId.push(profil.id);
            });
            models.Analyse.findAll({
                where: {
                    ProfilId: profilsId,               // qui respecte les profils
                    TypeReleveId: releve.TypeReleveId, // le type de releve
                    mini: { [Op.lte]: releve.valeur }, // la valeur de releve doit être compris entre le seuil min
                    maxi: { [Op.gte]: releve.valeur }  // et le seuil max
                },
                include: [
                    {
                        model: models.Dangerosite, 
                        include: [
                            {
                                model: models.Couleur,
                            }
                        ]
                    }
                ]
            }).then((analyses) => {
                res.status(200).send(analyses);
            }).catch((error) => {
                console.log(error);
                res.status(500).send(error);
            });
        } catch(error) {
            console.log(error);
            res.status(500).send(error);
        }
    });

    return router;
};
