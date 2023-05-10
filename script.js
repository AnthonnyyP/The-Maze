let mapLevel = {
  map: [
    0, 0, 0, 1, 0, 0,

    0, 1, 0, 1, 1, 1,

    0, 1, 0, 0, 0, 0,

    1, 1, 0, 1, 1, 0,

    0, 0, 0, 0, 1, 0,

    0, 1, 1, 0, 1, 0
  ],

  player: {
    position: 12
  },
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

const clickFunction = (evt) => {
  const sqIdx = parseInt(evt.target.id)
  console.log(squareEls)
  if (mapLevel.map[sqIdx] === 0) {
    let previousLocation = document.querySelectorAll('.pL')
    previousLocation.forEach((loc) => {
      loc.classList.remove('pL')
      evt.target.classList.add('pL')
      console.log
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
