const morseCode = {
    " ": "/",
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    "\"": ".-..-.",
    "$": "...-..-",
    "!": "-.-.--",
    "@": ".--.-."
};

function convertToMorseCode(sentence) {
    var outputMorse = ""
    for (var i = 0; i < sentence.length; i++) {
        var letter = sentence[i];
        var morseLetter = morseCode[letter.toUpperCase()]
        if (!morseLetter) {
            throw new Error(" Letter " + letter + " is undefined");
          }
        outputMorse = outputMorse + morseLetter
    }
    return outputMorse
}
//console.log(convertToMorseCode("Hello World"))


document.querySelector("#mybutton").addEventListener("click", morseOutput);

function morseOutput() {
  var message
  var text = document.querySelector("#text").value;
  message = convertToMorseCode(text)

  document.querySelector("#message").innerHTML = message
}

