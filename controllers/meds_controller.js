var db = require('../models');

module.exports = function(app) {
  app.get('/meds', function(req, res) {
    db.Meds.findAll({}).then(function(data) {
      var hbsObject = {
        meds: data
      };
      res.render('index', hbsObject);
    });
  });

  app.post('/meds', function(req, res) {
    db.Meds.create([
      'medicine'
      ], [
      req.body.medicine_name
      ], function() {
        res.redirect('/');
    });
  });

  app.put('/meds/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    db.Meds.update({
        medicine_name: req.body.medicine_name
      }, condition, function(){
        res.redirect('/meds');
    });
  });

  app.delete('/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    db.Meds.destroy(condition, function() {
      res.redirect('/meds');
    });
  });

};