let player1 = ''
let player2 = ''
let currentplayer = ''


const submitName = (input => {
    input = document.getElementById("player-name-input")
    const name = input.value.trim()


    if (!name) return 

    if (!player1) {
        player1 = name
        input.value = ''
        input.placeholder = "Enter Player 2 name"
    } else if (!player2) {
        player2 = name
        input.value = ''
        startGame()
    }

    if (player1 && player2) {
        return 
    }
})