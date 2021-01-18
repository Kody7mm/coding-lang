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

    if(total >= 5) {
      $(".answer").fadeIn();
      $("#ruby").prepend();
      $("#ruby").fadeIn();
    }else if(total <= 4 && total > 3) {
      $(".answer").fadeIn();
      $("#javascript").fadeIn();
    }else if(total <= 2) {
      $(".answer").fadeIn();
      $("#python").fadeIn();
    }

  });
});

$("form#reset").submit(function(event) {
  location.reload();
});