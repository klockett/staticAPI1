const chalk = require('chalk');

exports.debug = (url, obj, status) => {
  const seperator = '\n********************************\n';
  const output = seperator + url + seperator;

  const error = chalk.bold.red;
  console.log(error('Error'));

  const success = chalk.blue;
  console.log(success('Success'));

  if (!status) {
    status = "";
  }
  if (process.env.DEBUG) {
      console.log(output, obj, status);
  }
};
