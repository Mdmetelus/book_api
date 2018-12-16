var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var bookRouter= express.Router();

bookRouter.route('/Books')
.get((req,res) => {
    var responseJson = {hello: "This is my API"};

    //sends back a json object.
    res.json(responseJson);
});
app.use('/api', router);


//sends back a string of text
app.get('/'), (req, res) => {
    res.send('Welcome To My API!');
};

app.listen(port, () => {
    console.log('Gulp is Running on PORT: ' + port );
})