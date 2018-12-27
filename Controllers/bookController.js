var bookController = function() {
    (req,res) => {
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
    }
}

module.exports = bookController;