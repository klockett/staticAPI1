// const chalk = require('chalk');
 const npmUtilToolutil = require('npm_util_tool');

// const npmUtilTool = require('npm_util_tool');

 exports.debug = (title, obj, status) => {
   const seperator = '\n==================================\n';
   const output = seperator + title + seperator;

//  var error = chalk.bold.red;
//  console.log(error('Error!'));
  if (!status) {
    status = "";
  }
  if (process.env.DEBUG) {
    console.log(output, obj, status);
  }
 };
