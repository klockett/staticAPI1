const Sequelize = require('sequelize');
//const util = require('../../lib/util');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,
	{
	host: process.env.DB_HOST,
	dialect: process.env.DB_SCHEMA,
	port: process.env.DB_PORT,
	pool: {
		max:5,
		min:0,
		idle:10000,
},
	logging:false,
  });

const url = sequelize.define('url', {
  original:{type:Sequelize.STRING,},
	shortened:{type:Sequelize.STRING,}
});

sequelize.sync();
console.log('sync test was successful', 'success');
exports.sequelize = sequelize;
exports.url = url;
