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

bookrouter = require('./Routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
app.use('/api/books',authorRouter);


//sends back a string of text
app.get('/', (req, res) => {
    res.send('Welcome To My API!');
});

app.listen(port, () => {
    console.log('Gulp is Running This App on PORT: ' + PORT );
});