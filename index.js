let computerguess;
let userguess = [];
let userupdate = document.getElementById("guess");
let usernumberupdate = document.getElementById("inputBox");
let audio = new Audio("./audio.wav");

const init = () => {
  computerguess = Math.floor(Math.random() * 100);
  //   console.log(computerguess);
  document.getElementById("gameArea").style.display = "none";
  document.getElementById("newGameButton").style.display = "none";
};

// reload the page
const newGamebegin = () => {
  window.location.reload();
  audio.play();
};

const startgame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

const startNewGame = () => {
  usernumberupdate.setAttribute("disabled", true);
  document.getElementById("newGameButton").style.display = "inline ";
};

const compareguess = () => {
  audio.play();
  const usernumber = Number(document.getElementById("inputBox").value);
  userguess = [...userguess, usernumber];
  document.getElementById("guesses").innerHTML = userguess;

  // check value low or high
  if (userguess.length < maxGuess) {
    if (usernumber > computerguess) {
      userupdate.innerHTML = "Your Guess is High😲";
      usernumberupdate.value = " ";
    } else if (usernumber < computerguess) {
      userupdate.innerHTML = "Your Guess is Low☹️";
      usernumberupdate.value = " ";
    } else {
      userupdate.innerHTML = "Your Guess is Correct🥳";
      usernumberupdate.value = " ";
      startNewGame();
    }
  } else {
    if (usernumber > computerguess) {
      userupdate.innerHTML = `You Loose! correct number was ${computerguess}`;
      usernumberupdate.value = " ";
      startNewGame();
    } else if (usernumber < computerguess) {
      userupdate.innerHTML = `You Loose! correct number was ${computerguess}`;
      usernumberupdate.value = " ";
      startNewGame();
    } else {
      userupdate.innerHTML = "Your Guess is Correct🥳";
      usernumberupdate.value = " ";
      startNewGame();
    }
  }

  document.getElementById("attempts").innerHTML = userguess.length;
};

const easymode = () => {
  audio.play();
  maxGuess = 10;
  startgame();
};

const hardmode = () => {
  audio.play();
  maxGuess = 5;
  startgame();
};
