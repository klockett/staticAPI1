function returnStringGen(){
  //random
  var strLength = 6;

/*Generate shortened URL FUNCTION*/

  var strSource ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  var strReturn = '';
  for (var i=0; i<strLength; i++){
    var rand = Math.round(Math.random() * (strSource.length- 1));
    strReturn += strSource.charAt(rand);

}
//stringGen


return strReturn;

}
console.log(returnStringGen);

// Exports Shortened URL

exports.stringGen = returnStringGen;
