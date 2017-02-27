var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config = {
  user : 'sathishnp375',
  database : 'sathishnp375',
  host :'db.imad.hasura-app.io',
  port :'5432',
  password : process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input,salt) {
    //how do we create hash ?
    var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return hashed;
}
app.get('/hash/:input/',function(req,res) {
    var hashedString = hash(req.params.input,'this-is-some-random-string');
    res.send(hashedString);
});


app.get('/studentmedia', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'studentmedia.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
