document.querySelector("#mybutton").addEventListener("click", oddOrEven);

function oddOrEven() {
    
    var number = document.querySelector("#number").value;

    if (number % 2 == 0){
         message = number + " is even"
    }
    else {
         message = number + " is odd"
    }

document.querySelector("#message").innerHTML = message
}
