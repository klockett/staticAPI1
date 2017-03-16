const chalk = require('chalk');

function _bump(currentSemVersion, typeofIncrement){

  // Major [0]
  // Minor [1]
  // Patch [2]
  var aryVersions = currentSemVersion.split('.');

  for (let versionIndex in aryVersions) {
    aryVersions[versionIndex] = parseInt(aryVersions[versionIndex]);
  }

  if (typesofIncrement === 'patch') {
    aryVersions[2] += 1; // patch
  } else if (typesofIncrement === 'minor') {
    aryVersions[2] = 0; // patch
    aryVersions[1] += 1; // minor
  } else if (typesofIncrement === 'major') {
    aryVersions[2] = 0; // patch
    aryVersions[1] = 0; // minor
    aryVersions[0] += 1; // minor
  }

  return aryVersions.join('.');
}

exports.debug = (title, obj, status) => {
  var seperator = '\n==================================\n';
  const output = seperator + title + seperator;

  var error = chalk.bold.red;
  console.log(error('Error!'));
  if (!status) {
    status = '';
  }
  if (process.env.DEBUG) {
    console.log(error(output), obj, status);
  }
};
