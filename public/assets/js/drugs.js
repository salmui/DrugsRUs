// /* global moment */
//
// When user clicks add-btn
// $("#drug-submit").on("click", function(event) {
//   event.preventDefault();
//   $("#druginfo").show();
//
//   // Make a newDrug object
//   var newDrug = {
//     drug: $("#drug").val().trim()
//   };
// //
//   console.log(newDrug);
//
//   // Send an AJAX POST-request with jQuery
//   $.post("/api/new", newDrug)
//     // On success, run the following code
//     .done(function() {
//
//       var row = $("<div>");
//       row.addClass("drug");
//
//       $("#drug-area").empty();
//       row.append("<p>" + newDrug.drug + "</p>");
//
//       $("#drug-area").prepend(row);
//
//       $("#drugChoice").show();
//       $("#drugPrescription").show();
//
//     });
//
//   // Empty each input box by replacing the value with an empty string
//   $("#drug").val("");
// });


//(Only need if we plan to load all searched drugs on each page load)
//When the page loads, grab all of our drug names
// $.get("/api/all", function(data) {
//
//   if (data.length !== 0) {
//
//     for (var i = 0; i < data.length; i++) {
//
//       var row = $("<div>");
//       row.addClass("drug");
//
//       $
//       row.append("<p>" + data[i].drug + "</p>");
//
//       $("#drug-area").prepend(row);
//
//     }
//
//   }
//
// });

// $("#drug-submit").click(function() {
//   $("#").append("<input type="")
// }
// $(document).ready(function() {
// $("#drug-submit").click(function() {
//   $("#drug").append($("#druginput1").val());
// });
// });

//input drug #1 into search bar and append API info to first column
$('#drug-submit').on("click", function(event){
  event.preventDefault();

  // var text = "";
  var input = $('#drug');
  var textLocation = $(input).val().indexOf(text);

  if(textLocation === -1){
    $(input).val( $(input).val());
  }else{
    $(input).val( $(input).val().substr(0, textLocation));
  }
    $("#druginfo").show();
    // $("#drugChoice").show();
    $("#druginput1").append($("#drug").val());
    // $("#druginput2").append($("#drug").val());
});

//input drug #1 into search bar and append API info to first column
$('#drug-submit').one("click", function(event){
  event.preventDefault();

  // var text = "";
  var input = $('#drug');
  var textLocation = $(input).val().indexOf(text);

  if(textLocation === -1){
    $(input).val( $(input).val());
  }else{
    $(input).val( $(input).val().substr(0, textLocation));
  }
    $("#druginfo").show();
    $("#drugChoice").show();
    // $("#druginput1").append($("#drug").val());
    $("#druginput2").append($("#drug").val());
    $("<p>SIGN IN THROUGH GOOGLE TO COMPARE YOUR DRUG TO YOUR PRESCRIPTION!</p>").appendTo("#Content");
});

//on-click of compare button, will show interactions between the 2 drugs
$('#drugChoice').on("click", function(event){
  event.preventDefault();

  // var text = "";
  var input = $('#drug');
  var textLocation = $(input).val().indexOf(text);

  if(textLocation === -1){
    $(input).val( $(input).val());
  }else{
    $(input).val( $(input).val().substr(0, textLocation));
  }
    $("#druginfo").show();
    // $("#drugChoice").show();
    $("#druginput1").append($("#drug").val());
    $("#druginput2").append($("#drug").val());
    // $("#druginteractions").append($(#interaction))
});
