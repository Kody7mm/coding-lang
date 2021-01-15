$(document).ready(function () {
  $("form").submit(function ()
  event.preventDefault();
  const queOne = parseInt($("input:radio[name=question1]:checked").val());
  const queTwo = parseInt($("input:radio[name=question2]:checked").val());
  const queThree = parseInt($("input:radio[name=question3]:checked").val());
  const queFour = parseInt($("input:radio[name=question4]:checked").val());
  const queFive = parseInt($("input:radio[name=question5]:checked").val());
  const total = (questionOne + questionTwo + questionThree + questionFour + questionFive);
  let userName = $("input#name").val(); {

  });
    });




// function showValues() {
//   var fields = $(":input").serializeArray();
//   $("#results").empty();
//   jQuery.each(fields, function (i, field) {
//     $("#results").append(field.value + " ");
//   });
// }

// $(":checkbox, :radio").click(showValues);
// $("select").change(showValues);
// showValues();
event.preventDefault();
  });
});