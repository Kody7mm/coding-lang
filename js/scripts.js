$(document).ready(function () {
  $("form#selector").submit(function () {
    event.preventDefault();
    const que1 = parseInt($("input:radio[name=queOne]:checked").val());
    const que2 = parseInt($("input:radio[name=queTwo]:checked").val());
    const que3 = parseInt($("input:radio[name=queThree]:checked").val());
    const que4 = parseInt($("input:radio[name=queFour]:checked").val());
    const que5 = parseInt($("input:radio[name=queFive]:checked").val());

    $("#javascript").hide()
    $("#python").hide()
    $("#ruby").hide()
    $(".result").hide()

    if (qeu1 == true || que3 == true) {
      $(".answer").fadeIn();
      $("#ruby").prepend();
      $("#ruby").fadeIn();
    } else if (que2 == true || que4 == true) {
      $(".answer").fadeIn();
      $("#javascript").fadeIn();
    } else { 
      $(".answer").fadeIn();
      $("#python").fadeIn()
    }
});
});