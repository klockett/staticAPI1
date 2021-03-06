const url = require('../../src/models/url');
// const shortener = require('../../src/shortener');
const util = require('../../lib/util');

module.exports = (express) => {
  const router = express.Router();

  // This GETs All
  router.get('/urls', (req, res) => {
    url.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });


// get
  router.get('/urls', (req, res) => {
    url.findAll((err) => {
      util.debug('Someone accessed url info', err, 'error');

      res.status(500).json(err);
    }, (data) => {
      util.debug('Someone accessed url info', data, 'success');

      res.status(200).json(data);
    });
  });

 // delete
  router.delete('/urls', (req, res) => {
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
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


/* router.post("/urls",(req, res)=> {
 url.create(req.body, ((err)=> {
   res.status(500).json(err);
 }, (data)=> {
   res.status(200).json(data);
 });
});*/

// This updates
  router.get('/urls', (req, res) => {
   req.body.id = req.params.id;
   url.update(req.body, (err) => {
     res.status(500).json(err);
   }, (data) => {
     res.status(200).json(data);
   });
  });
// post
  router.post('/urls', (req, res) => {
    const shortener = require('../../src/shortener');
    req.body.shortened = shortener();
    url.create(req.body,
    (err) => {
      res.status(500).json(err);
    }, (data) => {
      util.debug('Someone input a url', data, 'success');

      res.status(200).json(data);
    });
  });

  router.post('/urls', (req, res) => {
    req.body.original
    url.create(req.body,
     (err) => {
       res.status(500).json(err);
     }, (data) => {
       res.status(200).json(data);
     });
  });
  return router;
};
