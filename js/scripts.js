$(document).ready(function() {
  $("button#petChoiceButton").click(function(event) {
    var petChoice = $("input:radio[name=pets]:checked").val();

    if (petChoice === "snakes") {
      window.open("snakes.html");
    }
    else if (petChoice === "fish") {
        window.open("fish.html");
    }
    else {
      window.open("birds.html");
    }
  event.preventDefault();
  });

});
