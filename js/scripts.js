$(document).ready(function () {
  $("form").submit(function (event) {
    function showValues() {
      var fields = $(":input").serializeArray();
      $("#results").empty();
      jQuery.each(fields, function (i, field) {
        $("#results").append(field.value + " ");
      });
    }

    $(":checkbox, :radio").click(showValues);
    $("select").change(showValues);
    showValues();
    $("#queAnswer").show();
    event.preventDefault();
  });
});