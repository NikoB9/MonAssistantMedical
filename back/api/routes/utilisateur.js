const express = require('express');
const router = express.Router();
const models = require('../../models');
const { Op } = require('sequelize');

module.exports = () => {

    //Création d'un utilisateur
    //valide : renvoie utilisateur
    //invalide : renvoie erreur
    router.post('/', (req, res) => {
        models.Utilisateur.create(req.body).then((response) => {
            res.status(200).send(response.dataValues);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });;
    });

    //Authentification d'un utilisateur
    router.get('/authentification', (req, res) => {
        models.Utilisateur.findOne({

            where: {
                login: req.body.login,
                mot_de_passe: req.body.mdp
            },
            include: [
                {
                    model: models.Profil,
                }
            ]

        }).then((user) => {
            console.log(user);
            res.status(200).send(user);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });

    //Récupération des informations d'un utilisateur + ses profils
    router.get('/:id', (req, res) => {
        models.Utilisateur.findOne({

            where: { id: req.params.id },
            include: [
                {
                    model: models.Profil,
                }
            ]

        }).then((user) => {
            res.status(200).send(user);
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });

    //modification d'un utilisateur
    router.put('/:id', async (req, res) => {
        models.Utilisateur.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then((response) => {
            console.log(response);
            res.status(200).send(true);
        }).catch((error) => {
            res.status(500).send(error);
        });
    });

    //suppression d'un utilisateur
    router.delete('/:id', (req, res) => {
        models.Utilisateur.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            res.status(500).send(error);
        });
    });

    //ajout d'un profil à l'utilisateur
    router.post('/:iduser/profil/:idprofil', (req, res) => {
        models.Utilisateur.findByPk(req.params.iduser).then(user => {
            user.addProfil(req.params.idprofil);
            user.save();
        }).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            res.status(500).send(error);
        });
    });

    //suppression d'un profil à l'utilisateur
    router.delete('/:iduser/profil/:idprofil', (req, res) => {
        models.Utilisateur.findByPk(req.params.iduser).then(user => {
            user.removeProfil(req.params.idprofil);
            user.save();
        }).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            res.status(500).send(error);
        });
    });

    // récupération des relevés d'un utilisateur, possibilité de filtré par type de relevé et de paginer
    router.get('/:id/releve', async (req, res) => {
        try {
            const utilisateur = await models.Utilisateur.findByPk(req.params.id);
            const profils = await utilisateur.getProfils();
            let profilsId = [];
            profils.forEach(profil => {
                profilsId.push(profil.id);
            });
            if (req.query.page) {
                NOMBRE_RELEVES_PAR_PAGE = 5
                start = (req.query.page - 1) * NOMBRE_RELEVES_PAR_PAGE;
                end = (req.query.page) * NOMBRE_RELEVES_PAR_PAGE;
                if (req.query.type) {
                    const type = await models.TypeReleve.findOne(
                        {
                            where: {
                                label: req.query.type
                            }
                        }
                    );
                    const releves = await models.ReleveMedical.findAll(
                        {
                            offset: start,
                            limit: end,
                            where: {
                                UtilisateurId: req.params.id,
                                TypeReleveId: type.id
                            },
                        }
                    );
                    res.status(200).send(await correlateReleveAnalyse(profilsId, releves));
                } else {
                    const releves = await models.ReleveMedical.findAll(
                        {
                            offset: start,
                            limit: end,
                            where: {
                                UtilisateurId: req.params.id
                            }
                        }
                    );
                    res.status(200).send(await correlateReleveAnalyse(profilsId, releves));
                }
            } else if (req.query.type) {
                const type = await
                models.TypeReleve.findOne({
                    where: {
                        label: req.query.type
                    }
                });
                const releves = await models.ReleveMedical.findAll({
                    where: {
                        UtilisateurId: req.params.id,
                        TypeReleveId: type.id
                    },
                });
                res.status(200).send(await correlateReleveAnalyse(profilsId, releves));
            } else {
                const releves = await models.ReleveMedical.findAll({
                    where: {
                        UtilisateurId: req.params.id
                    }
                });
                res.status(200).send(await correlateReleveAnalyse(profilsId, releves));
            }
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    });

    async function correlateReleveAnalyse(profilsId, releves) {
        const relevesAnalyse = [];
        for(i in releves) {
            console.log(i);
            const releve = releves[i];
            await models.Analyse.findOne({
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
                relevesAnalyse.push([releve, analyses]);
            });
        }
        return relevesAnalyse;
    }

    return router;
};
