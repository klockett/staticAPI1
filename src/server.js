/* Dependencies*/

const express =  require('express');
const body_parser = require('body-parser');

/* Express*/

 const app = express();

/* shortener*/

const shortener = require('./shortener.js');
//Config

const output = shortener.stringGen(6);
console.log(output);
const port = process.env.PORT || 3000;



//Have Express use the Routes Dir
//app.use('/api', require('../routes/api.js')(express));

// Have Express use Body-Parser

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));

app.use('/api', require('../routes/api.js')(express));

// Have Express Listen  on port
const server = app.listen(port, ()=>{
  console.log('Server Active on', port);

});

//Export the server
module.exports = server;
