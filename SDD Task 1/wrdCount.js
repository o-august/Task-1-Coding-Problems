function wordCounter(sentence){
    var splitText = sentence.split(" ")
    var elementNumber = splitText.length
    return elementNumber
}

var wordCount= wordCounter("hello world")

console.log("word count:"+wordCount)