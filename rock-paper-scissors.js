function game (){
    let player1Input = prompt("player 1: Rock, Paper, Scissors")
    let player2Input = prompt("player 2: Rock, Paper, Scissors")
        if(player1Input == 'rock'){
            if(player2Input == 'scissors'){
                alert('player 1 wins!');
            }
            if(player2Input == 'rock'){
                alert('tie!');
            }
            if(player2Input == 'paper'){
                alert('player 2 wins!');
            }
        }
        if(player1Input == 'paper'){
            if(player2Input == 'scissors'){
                alert('player 2 wins!');

            }
            if(player2Input == 'rock'){
                alert('player 1 wins!');

            }
            if(player2Input == 'paper'){
                alert('tie!');
            }
        }
        if(player1Input == 'scissors'){
            if(player2Input == 'scissors'){
                alert('tie!');
            }
            if(player2Input == 'rock'){
                alert('player 2 wins!');

            }
            if(player2Input == 'paper'){
                alert('player 1 wins');

            }
        }
}

game()