$(document).ready(function() {
  $("form#name").submit(function(event){
    event.preventDefault();
    const queOne = $("input#queOne").val();
    const queTwo = $("input#queTwo").val();
    const queThree = $("input#queThree").val();
    const queFour = $("input#queFour").val();
    const queFive = $("input#queFive").val();
  
    $(".queOne").text(queOne);
    $(".queTwo").text(queTwo);
    $(".queThree").text(queThree);
    $(".queFour").text(queFour);
    $(".queFive").text(queFive);

    $("#queAnswer").show();
    });
  });