module.exports = function (express) {
  const router = express.Router();
var shortened_url = shortened_url;








  router.post("/urls",(req, res)=> {
  //  res.json({hi:true});
    const shortener = require('../src/shortener');
    res.json({
      orig_url: req.body.shortened_url,
    shortened_url: shortener.stringGen(6)
  });
});
  return router;
};
