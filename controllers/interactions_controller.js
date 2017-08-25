var db = require('../models');

module.exports = function(app) {
  app.get('/interactions', function(req, res) {

    db.Interactions.findAll({
      where : {
        // id: 1024,
        med1_name: 'clonazepam (Klonopin)',
        med2_name: 'cannibis' //req.body.med2_name
      }
    }).then(function(results) {

      // results are available to us inside the .then
      res.json(results);
      // console.log("db.Interactions:" + results[0]);
    });
  });

  // app.get('/druginfo', function(req, res) {
    
  //   var type = 'brand_name:' //change this to either brand_name or generic_name depending on the searchto be performed.
  //   var med = 'Motrin'; //this is the term (brand or generic) to be searched
  //   var queryURL = "https://api.fda.gov/drug/label.json?api_key=KyKEcTqedZfpcgwkn5LpZryaZBCkRWJaU9215u08&search=" + type + med;

  //   // console.log(queryURL);
  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).done(function(response) {
  //     // console.log(response);
  //     console.log("Brand: " + response.results[0].openfda.brand_name[0]);
  //     console.log("Generic: " + response.results[0].openfda.generic_name[0]);
  //     console.log("Description: " + response.results[0].description[0]);
  //     // console.log("Interactions: " + response.results[0].drug_interactions[0]);
  //     console.log("Indication: " + response.results[0].indications_and_usage[0]);
  //   });
  

    
  //         // results are available to us inside the .then
  //         res.json(response[0]);
  //         // console.log("db.Interactions:" + results[0]);
  //       });

    // db.Interactions.findAll({}).then(function(data) {
    //   var hbsObject = {
    //     interactions: data
    //   };
    //   res.render('index', hbsObject);
    // });
  // });

  // app.post('/meds', function(req, res) {
  //   db.Meds.create([
  //     'medicine'
  //     ], [
  //     req.body.medicine_name
  //     ], function() {
  //       res.redirect('/');
  //   });
  // });

  // app.put('/meds/:id', function(req, res) {
  //   var condition = 'id = ' + req.params.id;
  //   db.Meds.update({
  //       medicine_name: req.body.medicine_name
  //     }, condition, function(){
  //       res.redirect('/meds');
  //   });
  // });

  // app.delete('/:id', function(req, res) {
  //   var condition = 'id = ' + req.params.id;
  //   db.Meds.destroy(condition, function() {
  //     res.redirect('/meds');
  //   });
  // });

};