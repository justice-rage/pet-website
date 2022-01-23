$(document).ready(function() {
  $("button#grey").click(function() {
    $("body").removeClass();
    $("body").addClass("grey-background");
  });
  
  $("button#normal").click(function() {
    $("body").removeClass();
    $("body").addClass("normal-background");
  });
});