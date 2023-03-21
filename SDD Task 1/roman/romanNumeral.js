
const romanNumerals = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I" 
};


function convertToRoman(number) {
  var romanNumber = ""
  var outlyingNumber = number
  while (outlyingNumber > 0) {
    for (var key in romanNumerals) {
      if (key > outlyingNumber) {
        break
      }
      var foundKey = key

    }
    romanNumber = romanNumber + romanNumerals[foundKey]
    outlyingNumber = outlyingNumber - foundKey
  }
  return romanNumber
}

document.querySelector("#mybutton").addEventListener("click", romanOutput);

function romanOutput() {
  var message
  var number = +document.querySelector("#number").value;
  if (!Number.isInteger(number)) {
    message = "Number must be an integer."
  } else {
     message = convertToRoman(number)
  }

  document.querySelector("#message").innerHTML = message
}

