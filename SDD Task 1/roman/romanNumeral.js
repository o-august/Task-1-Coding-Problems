
/*
A dictionary with Roman Numerals. Maps normal nubers to roman numbers.
*/
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

/*
Internal function that is used by romanOutput() function called from html.
The function takes a number in the parameter and returns the value converted to roman.
*/
function convertToRoman(number) {
  var romanNumber = ""
  var outlyingNumber = number  // The number will be decressed in the loop
  while (outlyingNumber > 0) {   
    for (var key in romanNumerals) { // Read all values in the roman number dictionary. The nombar numbers are sorted from the smallest to largest
      if (key > outlyingNumber) {  //if the next number in the key is larger then the outlying number, then break (stop the loop)
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

/*
A function called from html. It reads an input from html textbox, converts the input to number
and calls the internal convertToRoman(number). It prints the output to htnl textbox
*/
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

