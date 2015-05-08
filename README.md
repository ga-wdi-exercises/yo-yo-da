# Yo-Yo Da

#### Not to be confused with Yo-Yo Ma

## Your Jerb

Make a Yoda translator! Your Javascript can be object-oriented, or not!

When someone enters text and presses the "enter" key, send the text to the YodaSpeak API to figure out how Yoda would say it. Print the translated text in the Yoda-colored text area at the bottom of the page.

Every 5 seconds, the text in the Yoda-colored text area should be replaced with "...", as if an awkward silence was falling. 

Below is an example of how you might communicate with the API. You can copy it directly, or modify it!

```
$.ajax({
  url: "https://yoda.p.mashape.com/yoda?sentence=" + userInputHere, 
  headers: {
    "X-Mashape-Key": "OGPgEThqxtmshCpTDZyOUBndDjLLp1Lm0qcjsnpxxdQawmnaj7"
  },
  timeout: 6000
});
```

`timeout` tells your web browser to stop trying to complete an HTTP request if it hasn't gotten a response within `x` number of milliseconds. It's included in this example code because, sadly, this API tends to break pretty easily, and usually web browsers hang out for much longer before deciding an HTTP request ain't gonna happen. **So**, as a bonus, add in a response for when your AJAX requests *fail*.

## Test it out:

http://ga-dc.github.io/yo-yo-da/
