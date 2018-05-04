var countMax = function(numberCount){
  var result = [];
  for(var i=1; i <= numberCount; i++){
    var index = result.indexOf(i);

    if (i % 15 === 0){
      result.splice(index, 0);
      result.push('pingpong');

    }else if (i % 5 === 0){
      result.splice(index, 0);
      result.push('pong');

    }else if (i % 3 === 0){
      result.splice(index, 0);
      result.push('ping');

    }else {
      result.push(i);
    }
}
      return result;
};



$(document).ready(function() {
  $("#numberInput").submit(function(event){
    $("#output").empty();
    var numberCount = parseInt($("input#numberCount").val());
    var output = countMax(numberCount);

    output.forEach(function(item){
      $("#output").append('<li>' + item +'</li>');
    });
    event.preventDefault();
  });
