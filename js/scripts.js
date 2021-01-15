$(document).ready(function() {
  $("form#selector").submit(function() {
    event.preventDefault();
    const queOne = parseInt($("input:radio[name=radio1]:checked").val());
    const queTwo = parseInt($("input:radio[name=radio2]:checked").val());
    const queThree = parseInt($("input:radio[name=radio3]:checked").val());
    const queFour = parseInt($("input:radio[name=radio4]:checked").val());
    const queFive = parseInt($("input:radio[name=radio5]:checked").val());

    $("#javascript").hide();
    $("#python").hide();
    $("#ruby").hide();
    $(".result").hide();

    if (qeu1 == true || que3 == true) {
      $(".answer").fadeIn();
      $("#ruby").prepend();
      $("#ruby").fadeIn();
    } else if (que2 == true || que4 == true) {
      $(".answer").fadeIn();
      $("#javascript").fadeIn();
    } else {
      $(".answer").fadeIn();
      $("#python").fadeIn();
    }
  });
});