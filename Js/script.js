

$(document).ready(function() {
  $("#numberInput").submit(function(event){
    $("#output").empty();
    var numberCount = parseInt($("input#numberCount").val());
    var output = countMax(numberCount);

      });
});
