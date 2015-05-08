$("#userInput").on("keypress", fetchYoda);
//this function is throwing an Uncaught Syntax error. I can't figure out where the problem is. :(
function fetchYoda (userInputHere) { $.ajax({
  url: "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere,
  headers: {
    "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
  },
  timeout: 6000
}).done(response) {
  console.log(response);
}.fail() {
  console.log("Tired, I am.");
  }
}



console.log(fetchYoda());
