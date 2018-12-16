var express = require('express');

var routes = function(Book) {
    var bookRouter= express.Router();

bookRouter.route('/Books')
    .get((req,res) => {
        var query = {};
            if(req.query.genre)
            {
                query.genre = req.query.genre;
            }
        Book.find(function(err, books){
            if (err){
                console.log(err);
                res.status(500).send(err);
            } else {
                res.json(books);
            }
        })
        // var responseJson = {hello: "This is my API"};
        //sends back a json object.
        // res.json(responseJson);
    });

bookRouter.route('/Books/:bookId')
    .post(function(req,res){
        var book = new Book(req.body);

        console.log(book);
        book.save();
        res.status(201).send(book);
        bodyParser
    })
    .get((req,res) => {
        
        Book.findById(req.params.bookId, function(err, book){
            if (err){
                res.status(500).send(err);
            } else {
                res.json(book);
            }
        });
    });

    return bookRouter;
};

module.exports = routes