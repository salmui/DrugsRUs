var express = require('express');
var path = require('path');
var router = express.Router();
var body = require('body-parser');
var db = require(path.join(__dirname, "..", "models"));
// var user = require('../models/user.js');

module.exports = function(app) {
  app.get('/', function(req, res) {
    console.log(res);
    db.User.all(function(data) {
      console.log(data);
      var hbsObject = {
        users: data
      };
      res.render('index', hbsObject);
    });
  });

// app.post('/', function(req, res) {
//   user.create([
//     'user_name'
//     ], [
//     req.body.user_name
//     ], [
//     'email'
//     ], [
//     req.body.email
//     ], [
//     'password'
//     ], [
//     req.body.password
//     ], function(){
//       res.redirect('/');
//     });
// });

// router.put('/:id', function(req, res) {
//   var condition = 'id = ' + req.params.id;

// });
};
// module.exports = router;