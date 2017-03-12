

module.exports = function returnStringGen(){ // random
  var strLength = 6;


  var strSource ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  var strReturn = '';
  for (var i = 0; i < strLength; i++) {
    var rand = Math.round(Math.random() * (strSource.length -  1 ));
    strReturn += strSource.charAt(rand);
  }
  return strReturn;
}

// exports.stringGen = returnStringGen;
// module.exports = returnStringGen()
