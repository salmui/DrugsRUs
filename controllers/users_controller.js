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
    console.log(req.body.name);
    console.log(req.body.email);
    console.log('hello');
    db.User.create({
      name: req.body.name,
      email: req.body.email
      },
      // [
      // 'password'
      // ],
      // [
      // req.body.password
      // ],
      function(){
        res.redirect('/');
      });
  });

  app.put('/user/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    db.User.update({
      name: req.body.name
    });
  });

};
