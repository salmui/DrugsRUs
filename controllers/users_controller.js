var db = require("../models");

module.exports = function(app) {
  app.get('/', function(req, res) {
    db.User.findAll({}).then(function(results){
      var hbsObject = {
      user: results
    };
      res.render('index', hbsObject);
    });
  });

  app.post('/', function(req, res) {
    db.User.findOrCreate({
      where: {
      email: req.body.email
      },
      defaults: {
        name: req.body.name,
        email: req.body.email
      }
    }).then(
      function(){
        res.redirect('/user');
      });
  });

  app.put('/user', function(req, res) {
    // var condition = 'id = ' + req.params.id;
    db.User.update({
      name: req.body.name,
      email: req.body.email
    });
  });

  app.get('/user', function(req, res) {
    db.Medicine.findAll({}).then(function(results){
      console.log(results);
      var hbsObject = {
      Medicine: results
    };
      res.render('user', hbsObject);
    });
  });
};
