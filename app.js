var express = require('express'),
    mongoose = require('mongoose');

var app = express();

var db = mongoose.connect('mongodb://localhost/booksAPI');

var Book = require('./models/bookModel');


var port = process.env.PORT || 3000;

var bookRouter= express.Router();

bookRouter.route('/Books')
    .get((req,res) => {
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

app.use('/api', bookRouter);


//sends back a string of text
app.get('/', (req, res) => {
    res.send('Welcome To My API!');
});

app.listen(port, () => {
    console.log('Gulp is Running This App on PORT: ' + PORT );
});