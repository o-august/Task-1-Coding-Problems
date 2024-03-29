//checks weather a number is divisable by 3, 5, both or neither
function checkNumber(number){
    var message = ""
    if (number % 15 == 0){
        message = "FizzBuzz"
    }
    else if (number % 5 == 0){
        message = "Buzz"
    }
    else if (number % 3 ==0){
        message = "Fizz"
    }
    else {
        message = number
    }
    return message
}
//takes two numbers the user choses, the smallest and largest
function takeNumbers(minNumber,maxNumber){
    var fizzBuzzText = ""
    for (i = minNumber; i < maxNumber; i++) {
        fizzBuzzText += checkNumber(i) + ", "
    }
    fizzBuzzText += checkNumber(maxNumber)
    return fizzBuzzText
}

document.querySelector("#mybutton").addEventListener("click", generateNumber);

function generateNumber(){
    var message
    var minNumber = +document.querySelector("#minNumber").value;
    var maxNumber = +document.querySelector("#maxNumber").value;
    if (!Number.isInteger(minNumber)) {
        message = "Min Number must be an integer."
    } else if (!Number.isInteger(maxNumber)) {
        message = "Max Number must be an integer."
    } else if (minNumber > maxNumber){
        message = "min number must be smaller then max number"
    }
    else{
        message= takeNumbers(minNumber,maxNumber)
    }
    document.querySelector("#message").innerHTML = message
}
