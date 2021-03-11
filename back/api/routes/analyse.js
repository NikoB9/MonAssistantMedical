const express = require('express');
const router = express.Router();
const models = require('../../models');
const { Op } = require('sequelize');

module.exports = () => {

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

    router.get('/utilisateur/:UtilisateurId', async(req, res) => {
        try {
            const utilisateur = await models.Utilisateur.findByPk(req.params.UtilisateurId);
            const profils = await utilisateur.getProfils();
            let profilsId = [];
            profils.forEach(profil => {
                profilsId.push(profil.id);
            });
            const releves = await models.ReleveMedical.findAll({ where: { UtilisateurId: req.params.UtilisateurId } });
            let analyses_total = [];
            releves.forEach(releve => {
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
                    // console.log(releves);
                    console.log(releve);
                    console.log(analyses);
                    analyses_total = analyses_total.concat(analyses);
                    console.log(analyses_total);
                }).catch((error) => {
                    console.log(error);
                    res.status(500).send(error);
                });
            });
            console.log(analyses_total);
            res.status(200).send(analyses_total);
        } catch(error) {
            console.log(error);
            res.status(500).send(error);
        }
    });

    return router;
};
