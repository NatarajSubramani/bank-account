var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
app.get('/', function (req, res) {
    res.send('Bank Account Basic!');
});
app.listen(port);