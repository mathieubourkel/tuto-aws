var express = require('express');
var router = express.Router();

router.get('/test', function(req, res, next) {
    res.status(200).json({message:"RETURN FROM THE BACK IN AWS"})
  });
  
  
  module.exports = router;