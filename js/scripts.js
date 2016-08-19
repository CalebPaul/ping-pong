//Business Logic
var textList = [];
var ping3 = "ping";
var pong5 = "pong";
var pingPong15 = "ping-pong"

function numList(number) {
  for (var i = 1; i <= number; i++) {
    textList.push(i);
    if (i % 5 === 0) {
      textList.splice(i, 1, pong5)
    } else if (i % 3 === 0) {
      textList.splice(i, 1, ping3);
    }
    console.log(textList);
  }
  return(textList);
}

//User Logic
$(document).ready(function() {
  $("#pong_form").submit(function(event){
    event.preventDefault();
    var startNum = parseInt($("#num_input").val());
    var output = numList(startNum)

    function arrayToList(){
      var nums = "";
      for (var i = 0; i < textList.length; i++) {
        nums += "<li>" + textList[i] + "</li>";
        console.log(nums)
      }
      $("#pong_output").append(nums);
    }
    arrayToList(textList);
  });
});
