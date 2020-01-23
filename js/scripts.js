$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#inputNum").val());
    if (input >= 0) {
      var factorial = 1;
      for (var i=input; i>0; i--) {
        factorial *= i }
    } else { 
      alert("Please, enter a positive number");
      location.reload();
    }
  $("#output").text(factorial);
  });
});
