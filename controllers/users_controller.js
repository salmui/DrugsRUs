var express = require('express');
var router = express.Router();
var user = require('../models/user.js');

router.get('/', function(req, res) {
  user.all(function(data) {
    var hbsObject = {
      users: data
    };
    res.render('index', hbsObject);
  });
});

router.post('/', function(req, res) {
  user.create([
    'user_name'
    ], [
    req.body.user_name
    ], [
    'email'
    ], [
    req.body.email
    ], [
    'password'
    ], [
    req.body.password
    ], function(){
      res.redirect('/');
    });
});

router.put('/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

});

module.exports = router;