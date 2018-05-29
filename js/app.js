/*
*a list that holds all the cards. This is a dinamic list. In HTML is static
That´s why we create a list in an array in javaScript
*/
 const array_cards = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o', 'fa fa-cube'];



 const grid = document.querySelector(".deck");
 //we need the empty arrays to store our cards
 let cardsOpen = [];
 let matchedCards = [];
 // we need this variable to trigger the timer after the first click
 let  gameStarted = false;

 // Shuffle function from http://stackoverflow.com/a/2450976
 function shuffle(array) {
     var currentIndex = array.length, temporaryValue, randomIndex;

     while (currentIndex !== 0) {
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex -= 1;
         temporaryValue = array[currentIndex];
         array[currentIndex] = array[randomIndex];
         array[randomIndex] = temporaryValue;
     }

     return array;
 }

 /*
 *Display the cards in the page. We had the static html that
 *we erased and now we need to display them with js.
 */

// starts the game after schuffling
function startGame(){
  let schuffledCards = shuffle(array_cards);
  for (let i = 0; i < schuffledCards.length; i++){
   const card = document.createElement("li");
   card.classList.add("card");
   // .innerHTML in this case is to get the icon in each card
   card.innerHTML = `<i class="${schuffledCards[i]}"></i>`;
   grid.appendChild(card);

   cardEvent(card);
 }
}


// with .innerHTML we get the HTML value of an element or we can add one from Js

// Set the event listener function. When we click
function cardEvent(card){

  card.addEventListener("click", function(){
    if (!gameStarted){
       startTimer();
       gameStarted = true;
    }

  const card1 = this;
  const card2 = cardsOpen[0];

  if(cardsOpen.length === 1){
    card.classList.add("open", "show");
    cardsOpen.push(this);

    twoCards(card1, card2);

  } else {
    card.classList.add("open", "show", "disable");
    cardsOpen.push(this);
  }
  });
}


// matched cards function. Here we compare two cards
function twoCards(card1, card2){
    if(card1.innerHTML === card2.innerHTML){
    card1.classList.add("match");
    card2.classList.add("match");
    matchedCards.push(card1, card2);
    cardsOpen = [];
    finish();
// setTimeout so the cards won´t hide too fast
  } else {
  setTimeout(function(){
    //disable ist set in the css to avoid that we can click twice in the same card
    card1.classList.remove("open", "show", "disable");
    card2.classList.remove("open", "show", "disable");
  }, 700);
  cardsOpen = [];
}
movesCounter();
}

function finish() {
    if(matchedCards.length === array_cards.length) {
      congrats();
    }
}


// Modal function congrats
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".closeButton");
const playAgainBtn = document.querySelector(".playAgain");


function congrats(){
setTimeout (function(){
modal.classList.add("showModal");

stopTimer();

//final moves
const finalMoves = document.querySelector("#totalMoves");
finalMoves.innerHTML = moves;

// Add Rate of the stars
let starRating = starContainer.innerHTML;
const finalStars = document.querySelector("#totalRate");
finalStars.innerHTML = starRating;

// Add time to the Modal
const totalMinutes = document.querySelector("#totalMinutes");
const totalSeconds = document.querySelector("#totalSeconds");
totalMinutes.innerHTML = minute;
totalSeconds.innerHTML = second;

},800);
closeCongrats();
playAgain();
}


// play Again for congrats
function playAgain(){
  playAgainBtn.addEventListener("click", function(){
  modal.classList.remove("showModal");
     restart();
  });
}

// close congrats
function closeCongrats(){
  closeBtn.addEventListener("click", function(){
      modal.classList.remove("showModal");
    });
}



//modal for Game over
const modalGameOver = document.querySelector(".modalOver");
const closeBtnOver = document.querySelector(".modalOver_close");
const playAgainBtnOver = document.querySelector(".modalOver_again");

function gameOver(){
  setTimeout (function(){
  modalGameOver.classList.add("show_gameOver");
  stopTimer();
  },800);
  closeGameOver();
  playAgainOver();
  }

  // play Again after Game Over
  function playAgainOver(){
    playAgainBtnOver.addEventListener("click", function(){
    modalGameOver.classList.remove("show_gameOver");
       restart();
    });
  }

  // close Game Over
  function closeGameOver(){
    closeBtnOver.addEventListener("click", function(){
    modalGameOver.classList.remove("show_gameOver");
     restart();
      });
  }




// counts the Moves
const counter = document.querySelector(".moves");
let moves = 0;
counter.innerHTML = 0;
function movesCounter(){
    moves++;
    counter.innerHTML = moves;
      ratingStars();
 }



  // Star Rating
const starContainer = document.querySelector(".stars");
function ratingStars(){
    if( moves === 12){
      starContainer.removeChild(starContainer.children[0]);
    } else if (moves === 16){
      starContainer.removeChild(starContainer.children[0]);
    } else if (moves === 18){
      starContainer.removeChild(starContainer.children[0]);
      gameOver();
    }
}

// timer
const timerContainer = document.querySelector(".timer");
let interval;
let second = 0;
let minute = 0;
timerContainer.innerHTML = "Timer: " + minute + " mins " + ": " + second + " secs";
function startTimer(){
    interval = setInterval(function(){
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        timerContainer.innerHTML = "Timer: " + minute + " mins " + ": " + second + " secs";
    },1000);
}

//stop timer
function stopTimer() {
    clearInterval(interval);
}




// How to play button





//restart button in score panel
  const rsButton = document.querySelector(".restart");
  rsButton.addEventListener("click", function(e) {
    restart();
    });


//restarts the Game
  function restart(){
  grid.innerHTML = "";
  startGame();
  matchedCards=[];
  moves = 0;
  counter.innerHTML = moves;
  starContainer.innerHTML= `<li><i class ="fa fa-star"></i></li><li><i class ="fa fa-star"></i></li><li><i class ="fa fa-star"></i></li>`;
  stopTimer();
  gameStarted = false;
  second = 0;
  minute = 0;
  timerContainer.innerHTML = "Timer: " + minute + " mins " + ": " + second + " secs";
}




// start the Game
startGame();


/*
*Notes for my future me. What did I learnt?
* Be careful with the name that you asing
* Be careful with the typos
* Before testing save, close and test.
* After every new piece of code that has a new task always commit!
*/
