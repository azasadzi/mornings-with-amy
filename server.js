var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('images'));
console.log("starting server on 3000")
app.listen(3000);