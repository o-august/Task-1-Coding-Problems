document.querySelector("#mybutton").addEventListener("click", checkNumber);

var randomNumber=Math.floor(Math.random() * 10); //makes sure the number is an integer

var guessCount=0

/*checks if the number is correct, smaller or larger then secret number,
each time this is done it adds to the guess count*/

function checkNumber(){
    guessCount++
    var message
    var number = +document.querySelector("#number").value;
    if (number<randomNumber){
        message = "the secret number is higher"
    }
    else if (number>randomNumber){
        message = "the secret number is lower"
    }
    else{
       message = "your number is correct! You took " + guessCount + " guesses"
    }

    document.querySelector("#message").innerHTML = message
}