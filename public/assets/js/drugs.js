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
    $("#drug").val('');
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
    // $("#druginteractions").append($(#interaction))
});
