
var express=require('express');
var router = express.Router();

router.get('/get', function(req, res){
    res.send('Hello World!')
  });

router.post('/post', function(req, res) {
    res.send('Hello World!')
  });

  module.exports= router;