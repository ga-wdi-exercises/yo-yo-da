var Yoda = function(){
    this.url = 'https://yoda.p.mashape.com/yoda?sentence=';
    this.headers = {
        'X-Mashape-Key': 'OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7'
    }
}

Yoda.prototype.yodafy = function(sentance, callback){
    var requstURL = this.url +  sentance;
    console.log("calling", requstURL);
    $.ajax({
        url: requstURL,
        headers: this.headers,
        timeout: 6000,
        context: this

    }).done(function(data){
        console.log("Success")
        console.log(data);
        callback(data);
    }).fail(function(data){
        callback("This Make No Sense");
        console.log("fail");
        console.log(data);
    });
}
var YodaView = function(apiModel){
    this.input = document.getElementById('userInput');
    this.output = document.getElementById('yodaOutput');
    this.api = apiModel;
    this.initialize();
}

YodaView.prototype.initialize = function(){
    this.input.addEventListener('keyup', this.handleEvent.bind(this))
}
YodaView.prototype.handleEvent = function(event){
        if(event.keyCode ==13){
            event.preventDefault();
            this.api.yodafy(this.input.value, this.setOutPut.bind(this));
        }
}
YodaView.prototype.setOutPut = function(phraseThatPays){
    this.output.value = phraseThatPays;
}
$(document).ready(function(){
    setInterval(conversationSilence, 5000);
    var yoda = new Yoda();
    var view = new YodaView(yoda);

    function conversationSilence(){
        view.setOutPut( '...');
    }

});