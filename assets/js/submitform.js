$("#gform").on("submit",function( event ) {
  $("#gform *").fadeOut(500);
  $("#gform").prepend("<h3>Oh No ! You submitted your data to an attacker</h3><br><br>This was a part of the training, lets learn security together");
});
event.preventDefault();