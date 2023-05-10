let mapLevel = {
  // This is an array used to create the map of the game where each index of the array is also synonymous to the div's ID. 
  map: [
    0, 0, 0, 1, 0, 0,

    0, 1, 0, 1, 1, 1,

    0, 1, 0, 0, 0, 0,

    1, 1, 0, 1, 1, 0,

    0, 0, 0, 0, 1, 0,

    0, 1, 1, 0, 1, 0
  ],
// We have a key value pair for the player and the player's starting position: Div #12 -- the first zero on line 8. 
  player: {
    position: 12
  },
//We have another KVP for the goal and it's location: Div #35 -- the last zero of line 14. 
  goal: {
    position: 35
  }
}

// Accessing the necessary values for both the player and the goal and storing them in respective variables.
let player = mapLevel.player.position
const goal = mapLevel.goal.position

//Grabs the gameboard and stores within gameBoard.
const gameBoard = document.querySelector('#board')

//Grabs all divs and stores within squareEls.
const squareEls = gameBoard.querySelectorAll('div')

const renderMessage = (sqIdx) => {
  if (squareEls[sqIdx] === 0) {
    return
  } else {
    alert("Can't phase through walls, sorry.")
  }
}

let movingCondition = () => {
  
}

const clickFunction = (evt) => {
  const sqIdx = parseInt(evt.target.id)
  if (mapLevel.map[sqIdx] === 0) {
    let previousLocation = document.querySelectorAll('.character')
    previousLocation.forEach((loc) => {
      loc.classList.remove('character')
      evt.target.classList.add('character')
      console.log(evt.target.id)
    })
  } else {
    renderMessage(sqIdx)
  }
}
// let previous location = document.queryselectorall(".imgclass"), forEach previous location and then remove class.
// grab sqidx then add class, evt.target.addclass
// Event listener for each of the squares of the board.
squareEls.forEach((square) => {
  square.addEventListener('click', (evt) => clickFunction(evt))
})

const resetBtnEl = document.querySelector('#restart')
resetBtnEl.addEventListener('click', () => {})

// Use id to check idx at map array to see if 0 or 1 at that idx.
//If 0 = valid, player moves, if

// Game Character
