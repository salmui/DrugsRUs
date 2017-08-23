var express = require('express');
var router = express.Router();
var med = require('../models/meds.js');

router.get('/userMeds', function(req, res) {
  med.all(function(data) {
    var hbsObject = {
      meds: data
    };
    res.render('index', hbsObject);
  });
});

router.post('/userMeds', function(req, res) {
  med.create([
    'medicine'
    ], [
    req.body.medicine_name
    ], function() {
      res.redirect('/');
  });
});

router.put('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  med.update({
    medicine_name: req.body.medicine_name
  }, condition, function(){
    res.redirect('/userMeds');
  });
});

router.delete('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  med.delete(condition, function() {
    res.redirect('/userMeds');
  })
})