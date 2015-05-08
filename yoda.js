
var defaultInput = $("#userInput");

// input.on("click", replaceText(input))



$(function(){
  $("#userInput").on("click", replaceText(input));

  function replaceText(input){
    input.preventDefault();
    input.remove();
    // input.empty();
    input.append($('<input type="text" id="yodatalk"' + this.innerHTML + '</input>'));
    var userInput  =  input.val();
    return
  }


})
