module.exports = function (express) {
  const router = express.Router();
var shortened_url = shortened_url;
var util = require('../lib/util')


router.post('/urls', (req, res) => {
  var short = require('../src/shortener');
  req.body.shortened = shortener();
  url.create(req.body,
     (err) => {
    res.status(500).json(err);
  }, (data)=>{
    res.status(200).json(data);
  })

});





  /*router.post("/urls",(req, res)=> {
  //  res.json({hi:true});
    const shortener = require('../src/shortener');
    res.json({
      original: req.body.shortened_url,
    shortened: shortener.stringGen
  });

});*/

  return router;
};
