    const player1 = localStorage.getItem('player1') || 'Player 1';
    const player2 = localStorage.getItem('player2') || 'Player 2';
    let currentPlayer = player1;


    document.getElementById('game-status').textContent = `${currentPlayer}'s turn`

    const switchTurn = () => {
    currentplayer = (currentplayer == player1) ? player2 : player1
    document.getElementById("game-status").textContent = `${currentplayer}'s turn`
}



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