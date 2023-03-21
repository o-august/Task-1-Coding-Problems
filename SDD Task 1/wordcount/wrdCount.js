document.querySelector("#mybutton").addEventListener("click", wordCounterhtml);

function wordCounter(sentence){
    var splitText = sentence.trim().split(" ")
    var elementNumber = splitText.length
    return elementNumber
}
    
var wordCount= wordCounter("hello world")

console.log("word count:"+wordCount)
function wordCounterhtml() {
    var message
    var sentence = document.querySelector("#text").value;
    message = "the amount of words in your sentence is " + wordCounter(sentence)
    document.querySelector("#message").innerHTML = message 
  }
  
  