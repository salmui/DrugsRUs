var db = require('../models');

module.exports = function(app) {
  app.get('/interactions', function(req, res) {
    db.Meds_Interactions.findAll({}).then(function(data) {
      var hbsObject = {
        meds: data
      };
      res.render('index', hbsObject);
    });
  });
};