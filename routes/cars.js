var express = require('express');
var router = express.Router();

// Models
var cars = require('../car');

router.get('/', function(req, res){
  res.locals.cars = cars;
  res.render('cars/index');
});

router.get('/:index', function(req, res){
  if(req.params.index >= cars.length){
    res.send("FOUT");
  } else {
    res.locals.index = req.params.index;
    res.locals.car = cars[req.params.index];

    if(req.query.accelerate){
      res.locals.car.accelerate(req.query.accelerate * 1);
    }

    res.render('cars/show');
  }
});

module.exports = router;