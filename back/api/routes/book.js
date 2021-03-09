const express = require('express');
const router = express.Router();
const models = require('../../models');

module.exports = () => {

    //q2 - récupération de tous les livres
    router.get('/', (req, res) => {
        models.Books.findAll().then((books) => {
            res.send(books);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500)
        });
    });

    //q7 - Livres par dizaine
    router.get('/page/:page', (req, res) => {

        start = (req.params.page - 1)*10
        end = (req.params.page)*10 

        console.log(req.params.page)

        models.Books.findAll({ 

            offset: start,
            limit: end

        }).then((books) => {
            res.send(books);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500)
        });
    });

    //q7 - nombre de pages pour lister par dizaine
    router.get('/nbPages', (req, res) => {

        models.Books.count().then((count) => {
            count = { 'nbPages' : Math.ceil(count/10) }
            res.send(count);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500)
        });
    });

    //q1 - ajout d'un livre
    router.post('/', (req, res) => {
        models.Books.create(req.body).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500)
        });;
    });

    //q3 - récupération des infos d'un livres
    router.get('/:id', (req, res) => {
        models.Books.findByPk(req.params.id).then((book) => {
            res.send(book);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500)
        });
    });

    //q4 - supprimer un livre
    router.delete('/:id', (req , res) => {
        models.Books.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            console.log(error)
            res.sendStatus(500);
        });
    });

    //Q5 - éditer un livre
    router.put('/', (req, res) => {

        //titre non modifiable
        delete req.body.title;

        //update
        models.Books.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            res.sendStatus(500);
        });
    });

    //Q6 - ajout d'un auteur
    router.put('/:id/author', (req, res) => {
        models.Books.findByPk(req.params.id).then(book => {
            book.addAuthors(req.body.id);
            book.save();
        }).then(() => {
            res.status(200).send(true);
        }).catch((error) => {
            res.sendStatus(500);
        });
    });


    return router;
};
