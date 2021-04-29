let square = document.getElementById("square")

let paragraph = document.getElementById("paragraph")

let restartButton = document.getElementById("restartButton")

square.addEventListener("click", clickSquare) 
restartButton.addEventListener("click", restartGame)
 
let gameStarted = false
let points = 0
let intervalId

function clickSquare() {

  if (gameStarted == false) {
    paragraph.innerHTML = "Click on the square only when it's blue."
    intervalId = setInterval(changeSquareColor, 500)
    gameStarted = true
    return
  }
  
  if (gameStarted == true) {
    let userClick = square.style.backgroundColor
  
    if (userClick == "blue") {
      points++
      paragraph.innerHTML = `Points: ${points}`
      return
    }

    if (userClick != "blue") {
      clearInterval(intervalId)
      paragraph.innerHTML = `You misclicked. Your score is: ${points}`
      square.removeEventListener("click", clickSquare) 
      restartButton.style.display = "block"
      return
    }
  }
}

function changeSquareColor() {

  let randomNumber = Math.floor(Math.random() * 3)

  if (randomNumber == 0) {
    square.style.backgroundColor = `red`
    return
  }

  if (randomNumber == 1) {
    square.style.backgroundColor = `green`
    return
  }

  if (randomNumber == 2) {
    square.style.backgroundColor = `blue`
    return
  }
}

function restartGame() {

  restartButton.style.display = "none"
  gameStarted = false
  points = 0
  square.style.backgroundColor = ""
  square.addEventListener("click", clickSquare) 
  paragraph.innerHTML = "Click on the box to start."
}

