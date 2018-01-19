var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/TranscendController',function(req,res){

  res.render('monitor');
});

module.exports = router;
