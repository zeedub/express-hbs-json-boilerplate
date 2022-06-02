var express = require('express');
const fs = require("fs");
var router = express.Router();
var _ = require('underscore')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:pageId', function(req, res, next) {

  let obj = { title: req.params.pageId };

  // load the appropriate config if there is one
  fs.readFile(`./data/${req.params.pageId}.json`, (err, data) => {

    if (!err) {
      obj = _.extend(obj, JSON.parse(data));
    }


    let objReturn = _.extend(obj, req.query);

    res.render(`./pages/${req.params.pageId}`, objReturn);



  });



});

module.exports = router;
