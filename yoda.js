$(document).ready(function () {

    $("#btnTrigger").on('click', function {
      () $.ajax({
      url: "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere,
      headers: {
        "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
      },
      timeout: 6000
    });
