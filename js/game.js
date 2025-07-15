    const player1 = localStorage.getItem('player1') || 'Player 1';
    const player2 = localStorage.getItem('player2') || 'Player 2';
    let currentPlayer = player1;
    let board 
    let turn
    let winner
    let tie


    document.getElementById('game-status').textContent = `${currentPlayer}'s turn`

    const switchTurn = () => {
    currentplayer = (currentplayer == player1) ? player2 : player1
    document.getElementById("game-status").textContent = `${currentplayer}'s turn`
}
    document.getElementById("score-1").textContent = `${player1} score`
    document.getElementById("score-2").textContent = `${player2} score`



const resetGame = () => {
    clearErrors() 
    player1 = ''
    player2 = ''
    currentplayer = ''

    //Clearing Player display
    document.getElementById('player1-name').textContent = "Not added yet"
    document.getElementById('player2-name').textContent = "Not added yet"
    document.getElementById('player1-display').classList.remove('filled')
    document.getElementById('player2-display').classList.remove('filled')

    //clearing inputs
    document.getElementById('player-name-input').value = ''
    document.getElementById('player-name-input').Placeholder = "Enter Player 1 name"
    document.getElementById('next-btn').textContent = "Add player"


    document.getElementById('player-setup').style.display = 'block'
    document.getElementById('start-game-btn').style.display = 'none'
    document.getElementById('game-status').style.display = 'none'
    document.getElementById('game-controls').style.display = 'none'

}

// Buttons and game stauts ends here

// Board Section
const sqrEls = document.querySelectorAll('.sqr')
console.log(sqrEls)

const messageEl = document.querySelector('#turnMessage')
console.log(messageEl)



//Initializing state of the game
const init = () => {
    board = ['', '', '', '', '', '',
             '', '', '', '', '', '',
             '', '', '', '', '', '',
             '', '', '', '', '', '',
             '', '', '', '', '', '',
             '', '', '', '', '', '',
             '', '', '', '', '', '']

    turn = player1
    winner = false
    tie = false

    render()
}

init()


function render() {
    updateBoard()
    updateMessage()
}

function updateBoard() {
    board.forEach((cell, index) => {
        const sqrEl = sqrEls[index]

        sqrEl.textContent = cell
    });
}

function updateMessage() {
    if (turn === player1 && winner  == false && tie === true) {
        const gameStatus = document.getElementById('game-status')
        messageEl.textContent = `${player1} got a point!`
        gameStatus.style.backgroundColor = '#29bc87';

    }else if (turn === player2 && winner === false && tie === true) {
        messageEl.textContent = `${player2} got a ponit!`
        gameStatus.style.backgroundColor = '#29bc87';
    }else if (turn === player1 && winner === true) {
        messageEl.textContent = `Congratulations ${player1}! You Win!`
    }else if (turn === player2 && winner === true) {
        messageEl.textContent = `Congratulations ${player2}! You Win!`
    }
}

const winningCombos = [
    [0,1,2,3], //row1
    [1,2,3,4], //row1.1
    [2,3,4,5], //row1.2
    [6,7,8,9], //row2
    [7,8,9,10], //row2.1
    [8,9,10,11], //row2.2
    [12,13,14,15], //row3
    [13,14,15,16], //row3.1
    [14,15,16,17], //row4.2
    [18,19,20,21], //row4
    [19,20,21,22], //row4.1
    [20,21,22,23], //row4.2
    [24,25,26,27], //row5
    [25,26,27,28], //row5.1
    [26,27,28,29], //row5.2
    [30,31,32,33], //row6
    [31,32,33,34], //row6.1
    [32,33,34,35], //row6.2
    [36,37,38,39], //row7
    [37,38,39,40], //row7.1
    [38,39,40,41], //row7.2

    //Columns 
    [0,6,12,18], //column1
    [6,12,18,24], //column1.1
    [12,18,24,30], //column1.2    
    [18,24,30,36], //column1.3
    [1,7,13,19], //column2
    [7,13,19,25], //column2.1
    [13,19,25,31], //column2.2    
    [19,25,31,37], //column2.3       
    [2,8,14,20], //column3
    [8,14,20,26], //column3.1
    [14,20,26,32], //column3.2    
    [20,26,32,38], //column3.3       
    [3,9,15,21], //column4
    [9,15,21,27], //column4.1
    [15,21,27,33], //column4.2    
    [21,27,33,39], //column4.3       
    [4,10,16,22], //column5
    [10,16,22,28], //column5.1
    [16,22,28,34], //column5.2    
    [22,28,34,40], //column5.3       
    [5,11,17,23], //column6
    [11,17,23,29], //column6.1
    [17,23,29,35], //column6.2    
    [23,29,35,41], //column6.3
    
    
]