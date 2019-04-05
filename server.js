var express = require('express');
var app = express();
var movies = require('./movies.json');

app.get('/some-route', (req,res) => {
    res.send('');
})
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/public/index.html');
})
app.get('/style.css', function(req,res) {
    res.sendFile(__dirname + '/public/style.css');
})
app.get('/script.js', function(req,res) {
    res.sendFile(__dirname + '/public/script.js');
})

app.get('/favorite-movies', (req,res) => {
    var randomNumber = Math.floor(Math.random()*4);
    var randomMovie = movies[randomNumber];
    res.send(randomMovie);
})

console.log("starting server on 3000")
app.listen(3000);