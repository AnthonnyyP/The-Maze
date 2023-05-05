/*----- constants -----*/


/*----- app's state (variables) -----*/

let board;
let winner; 
let player; 

/*----- cached element references -----*/

const squareEls = ''

const messageEls = ''

const resetBtnEl = ''



/*----- event listeners -----*/


/*----- functions -----*/

const init = () => {
  board = {
    [0,0,0,0,0,0]
    [0,0,0,0,0,0]
    [0,0,0,0,0,0]
    [0,0,0,0,0,0]
    [0,0,0,0,0,0]
    [0,0,0,0,0,0]
  }
  winner = null; 
  player = {
    p: {
      x: 0,
      y: 0,
    }
  }
  end = {
    e: {
      x: 0,
      y: 0,
    }
  }
}