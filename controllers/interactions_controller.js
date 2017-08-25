var db = require('../models');

module.exports = function(app) {
  app.get('/interactions', function(req, res) {

    db.Interactions.findAll({
      where : {
        med1_name: 'clonazepam (Klonopin)', //req.body.med1_name
        med2_name: 'cannibis' //req.body.med2_name
      }
    }).then(function(results) {
      res.json(results);
    });
  });
};