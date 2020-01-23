$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#inputNum").val());
    var output = factorial(input);
    $("#output").text(output);
  });
});

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1)
  }
}
// if (input >= 0) {
//   var factorial = 1;
//   for (var i=input; i>0; i--) {
//     factorial *= i }
// } else { 
//   alert("Please, enter a positive number");
//   location.reload();
// }