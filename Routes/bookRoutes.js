var express = require('express');

var routes = function(Book) {
    var bookRouter= express.Router();

var bookController = require('../Controllers/bookController')

bookRouter.route('/Books')
var bookController = require('../ontrollers/bookController')
    .get(bookController.post);
bookRouter.use('/:bookId', (req, res, next) => {
    Book.findById(req.params.bookId, function(err, book){
        if (err){
            res.status(500).send(err);
        } else if (book)
        {
            req.book = book;
            next();
        }
        else
        {
            res.status(404).send('no book found');
        }
           
    });
})

bookRouter.route('/Books/:bookId')
    .post(function(req,res){
        var book = new Book(req.body);

        console.log(book);
        book.save();
        res.status(201).send(book);
        bodyParser
    })
    .get((req,res) => {
        res.json(req.book);
        // Book.findById(req.params.bookId, function(err, book){
        //     if (err){
        //         res.status(500).send(err);
        //     } else {
        //         res.json(book);
        //     }
        // });
    })
    .put((req, res ) =>{
                req.book.title = req.body.title;
                req.book.author = req.body.author;
                req.book.genre = req.body.genre;
                req.book.read = req.body.read;
                req.book.save(err => {
                    if (err){
                        res.status(500).send(err);
                    } else {
                        res.json(req.book);
                    }
                });
                res.json(req.book);
    })
    .patch((req, res) => {
        // if(req.body.title)
        // {
        //     req.book.title = req.body.title;
        // }
        if(req.body._id)
            delete req.body._id;
        for (var p in req.body)
        {
            req.book[p] = req.book[p];
        }

        req.book.save(err => {
            if (err){
                res.status(500).send(err);
            } else {
                res.json(req.book);
            }
        });
    })
    .delete(function(req, res) {
        req.bok.remove( (err) => {
            if(err) {
                res.status(500).send(err);
            } else {
                res.status(204).send('Removed');
            }
        });
    })
    return bookRouter;
};

module.exports = routes