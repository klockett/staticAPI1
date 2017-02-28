/* Dependencies*/

var express =  require('express');
var body_parser = require('body-parser');

/* Express*/

var app = express();

/* shortener*/

var shortener = require('./shortener.js');
//Config

var output = shortener.stringGen(6);
console.log(output);
const port = process.env.PORT || 3000;



//Have Express use the Routes Dir
app.use('/api', require('../routes/api.js')(express));

// Have Express use Body-Parser

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));



// Have Express Listen  on port
var server = app.listen(port, ()=>{
  console.log('Server Active on', port);

});

//Export the server
module.exports = server;
