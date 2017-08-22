/* global moment */

// When user clicks add-btn
$("#drug-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newDrug object
  var newDrug = {
    drug: $("#drug").val().trim()
  };

  console.log(newDrug);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newDrug)
    // On success, run the following code
    .done(function() {

      var row = $("<div>");
      row.addClass("drug");

      $("#drug-area").empty();
      row.append("<p>" + newDrug.drug + "</p>");

      $("#drug-area").prepend(row);

      $("#drugChoice").show();
      $("#drugPrescription").show();

    });

  // Empty each input box by replacing the value with an empty string
  $("#drug").val("");
});


//(Only need if we plan to load all searched drugs on each page load)
//When the page loads, grab all of our drug names
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("drug");

      $
      row.append("<p>" + data[i].drug + "</p>");

      $("#drug-area").prepend(row);

    }

  }

});
