var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var app = express();

var db = mongoose.connect('mongodb://localhost/booksAPI');

var Book = require('./models/bookModel');


var port = process.env.PORT || 3000;

app.use('/api', bookRouter);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyparser.json());

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




//sends back a string of text
app.get('/', (req, res) => {
    res.send('Welcome To My API!');
});

app.listen(port, () => {
    console.log('Gulp is Running This App on PORT: ' + PORT );
});