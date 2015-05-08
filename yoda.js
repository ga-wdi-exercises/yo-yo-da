$(document).ready(function () {


//     var keycode = (event.keyCode ? event.keyCode : event.which);
//     if(keycode == '13'){
//         alert('You pressed a "enter" key in somewhere');   


    $(document).keypress(function(event) {

        $.ajax({   
            type: "GET",
            data: {sentence: $("#userInput").val("...")}, 
            datatype: "json",
            success: function() {
                $(#YodaOutput) = userInput;
            },
            error: function(err) {
                alert(err);
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"); 
            },
            timeout: 6000
        });
    });
});


