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
    // add code to check if user is in db
    console.log(req.body.name);
    console.log(req.body.email);
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

  app.put('/user/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    db.User.update({
      name: req.body.name,
      email: req.body.email
    });
  });

  app.get('/user', function(req, res) {
    res.render('user');
  })
};
