/* Dependencies*/

const express = require('express');
const body_parser = require('body-parser');

/* Express*/
const util = require('../lib/util');

const app = express();

/* shortener*/


const shortener = require('./shortener.js');
// Config


// const output = shortener.stringGen(6);
// console.log(output);
const port = process.env.PORT || 3000;
util.debug('Env VAR', process.env.DEBUG)

// Have Express use the Routes Dir
// app.use('/api', require('../routes/api.js')(express));

// Have Express use Body-Parser

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use('/api', require('./routes/url.js')(express));

// Have Express Listen  on port
const server = app.listen(port, () => {
  util.debug('Server Active on', port, 'success');
});

// Export the server
module.exports = server;
