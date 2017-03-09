var url = require('../src/models/url');
var shortener = require('../src/shortener');
module.exports = (express)=> {
  const router = express.Router();


router.get("/urls",(req, res)=> {
 url.findAll((err)=> {
   res.status(500).json(err);
 }, (data)=> {
   res.status(200).json(data);
 })
});



/*  router.post("/urls",(req, res)=> {
  //  res.json({hi:true});
    const shortener = require('../src/shortener');
    res.json({
      original: req.body.shortened_url,
    shortened: shortener.stringGen(6)
  });
});
*/


/*router.post("/urls",(req, res)=> {
 url.create(req.body, ((err)=> {
   res.status(500).json(err);
 }, (data)=> {
   res.status(200).json(data);
 });
});*/


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

router.post('/urls', (req, res) => {
  req.body.original 
  url.create(req.body,
     (err) => {
    res.status(500).json(err);
  }, (data)=>{
    res.status(200).json(data);
  })

});

return router;
};
