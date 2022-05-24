'use strict'

let pin = 12345

function guessCode (pin){
    let guess = prompt('enter the 5 digit code')
    if (guess == pin ){
        alert('success')
    }
    else{
    alert('Failure')
    }
}

guessCode(pin)