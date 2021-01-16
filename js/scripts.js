$(document).ready(function () {
  $("form#formselector").submit(function (event) {
    event.preventDefault();
    const queOne = parseInt($("input:radio[name=queOne]:checked").val());
    const queTwo = parseInt($("input:radio[name=queTwo]:checked").val());
    const queThree = parseInt($("input:radio[name=queThree]:checked").val());
    const queFour = parseInt($("input:radio[name=queFour]:checked").val());
    const queFive = parseInt($("input:radio[name=queFive]:checked").val());
    const total = queOne + queTwo + queThree + queFour + queFive;
    console.log(total);

    $("#javascript").hide();
    $("#python").hide();
    $("#ruby").hide();
    $(".results").hide();

    if(total >= 9) {
      $(".answer").fadeIn();
      $("#ruby").prepend();
      $("#ruby").fadeIn();
    }else if(total <= 8 && total > 6) {
      $(".answer").fadeIn();
      $("#javascript").fadeIn();
    }else if(total < 6) {
      $(".answer").fadeIn();
      $("#python").fadeIn();
    }

    // if (qeuOne == true || queThree == true) {
    //   $(".answer").fadeIn();
    //   $("#ruby").prepend();
    //   $("#ruby").fadeIn();
    // } else if (queTwo == true || queFour == true) {
    //   $(".answer").fadeIn();
    //   $("#javascript").fadeIn();
    // } else {
    //   $(".answer").fadeIn();
    //   $("#python").fadeIn();
    // }
  });
});

$("form#reset").submit(function(event) {
  location.reload();
});