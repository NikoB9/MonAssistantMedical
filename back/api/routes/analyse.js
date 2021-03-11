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

    return router;
};
