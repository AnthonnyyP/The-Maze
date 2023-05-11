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

//This function renders a message when a player tries to move onto a space indicated to be a "1" || "wall". 
const renderMessage = (sqIdx) => {
  if (squareEls[sqIdx] === 0) {
    return
  } else {
    alert("Can't phase through walls, sorry.")
  }
}

//This function will be called to calculate whether or not the space clicked is a valid move. Space clicked needs to be adjacent. 

//let movingCondition = () => {}
  //Math.floor(id/6) = row num id % 6 = column num


//This function targets the event occuring in any of the squares being clicked. If the value of at the index is === 0, then it is a valid move. 
const clickFunction = (evt) => {
  const sqIdx = parseInt(evt.target.id)
  if (mapLevel.map[sqIdx] === 0) {
// The player model is given a class of "character" which is looped via forEach where the class is removed and then readded on the new square that was clicked.
    let previousLocation = document.querySelectorAll('.character')
      previousLocation.forEach((loc) => {
      loc.classList.remove('character')
      evt.target.classList.add('character')
      console.log(evt.target.id)
    })
    // If the value at the index is !== 0, then we'll call the renderMessage function to show an alert. 
  } else {
    renderMessage(sqIdx)
  }
}

// Event listener for each of the squares of the board.
squareEls.forEach((square) => {
  square.addEventListener('click', (evt) => clickFunction(evt))
})

// Function & event listener to reset the board.
const resetBtnEl = document.querySelector('#restart')
resetBtnEl.addEventListener('click', () => {})