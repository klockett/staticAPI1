var url = require('../src/models/url');
module.exports = (express)=> {
  const router = express.Router();


router.get("/urls",(req, res)=> {
 url.findAll((err)=> {
   res.status(500).json(err);
 }, (data)=> {
   res.status(200).json(data);
 })
});



   router.post("/urls",(req, res)=> {
  //  res.json({hi:true});
    const shortener = require('../src/shortener');
    res.json({
      orig_url: req.body.shortened_url,
    shortened_url: shortener.stringGen(6)
  });
});


/*router.post("/urls",(req, res)=> {
 url.create(req.body, ((err)=> {
   res.status(500).json(err);
 }, (data)=> {
   res.status(200).json(data);
 });
});*/





return router;
};
