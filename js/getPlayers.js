let player1 = ''
let player2 = ''
let currentplayer = ''


// error message to players

const showError = (playerNum, message) => {
    const errorSpan = document.querySelector(`#player${playerNum}-display .error`)
    if(errorSpan) {
        errorSpan.textContent = message
        errorSpan.style.color = "red"
        errorSpan.style.fontSize = "2vw"
        errorSpan.style.fontFamily = 'Source Serif 4', 'sans-serif'
        errorSpan.style.fontWeight = "bold"
        errorSpan.style.marginLeft = "10px"    
    }
}

const clearErrors = () => {
    const errorSpans = document.querySelectorAll(".error")
    errorSpans.forEach(span => {
        span.textContent = ''
        span.style.color = ''
        span.style.fontSize = ''
        span.style.fontWeight = ''
        span.style.marginLeft = ''
    }) 
}

const submitName = () => {
    const input = document.getElementById("player-name-input")
    const name = input.value.trim()
    
    //Claer All errors at first
    clearErrors()


    if (!name) {
        const currentplayerNum = !player1 ? 1 : 2 
        showError(currentplayerNum, "Please enter a name" )
        return
    }

    if (!player1) {
        player1 = name
           document.getElementById('player1-name').textContent = name 
           document.getElementById('player1-display').classList.add('filled')

        input.value = ''
        input.placeholder = "Enter Player 2 name"

        document.getElementById('next-btn').textContent = "Add Player 2"


    } else if (!player2) {
        player2 = name

        document.getElementById('player2-name').textContent = name
        document.getElementById('player2-display').classList.add('filled')


        input.value = ''
        document.getElementById('player-setup').style.display = "none"

        document.getElementById('start-game-btn').style.display = "block"
    }

}


const startGame = () => {
    clearErrors()

    if ( !player1 || !player2) {
        if (!player1) {
            showError(1, "Please add player 1 first!")
        }
        if (!player2) {
            showError(2, "Please add player 2 first!")
        }
        return
    }


    localStorage.setItem('player1', player1)
    localStorage.setItem('player2', player2)


    window.location.href = "mainGamePage.html"

    document.getElementById('start-game-btn').style.display = "none"
    document.getElementById('game-status').style.display = "block"  
    
    
    // currentplayer = player1
    // document.getElementById("game-status").textContent = `${currentplayer}'s turn`
}

// const switchTurn = () => {
//     currentplayer = (currentplayer == player1) ? player2 : player1
//     document.getElementById("game-status").textContent = `${currentplayer}'s turn`
// }

// const resetGame = () => {
//     clearErrors() 
//     player1 = ''
//     player2 = ''
//     currentplayer = ''

//     //Clearing Player display
//     document.getElementById('player1-name').textContent = "Not added yet"
//     document.getElementById('player2-name').textContent = "Not added yet"
//     document.getElementById('player1-display').classList.remove('filled')
//     document.getElementById('player2-display').classList.remove('filled')

//     //clearing inputs
//     document.getElementById('player-name-input').value = ''
//     document.getElementById('player-name-input').Placeholder = "Enter Player 1 name"
//     document.getElementById('next-btn').textContent = "Add player"


//     document.getElementById('player-setup').style.display = 'block'
//     document.getElementById('start-game-btn').style.display = 'none'
//     document.getElementById('game-status').style.display = 'none'
//     document.getElementById('game-controls').style.display = 'none'

// }