//a list that holds all the cards
 const array_cards = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o', 'fa fa-cube'];

/*
*Display the cards in the page. We had the static html that
we erased and now we need to display them with js
*/

 const grid = document.querySelector(".deck");
 let cardsOpen = [];
 let matchedCards = [];


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



// Set the event listener function. When we click
function cardEvent(card){

  card.addEventListener("click", function(){
  const card1 = this;
  const card2 = cardsOpen[0];

  if(cardsOpen.length === 1){
    card.classList.add("open", "show");
    cardsOpen.push(this);

    // [0] is the first element of the array and [1] is the second. We are comparing the icons or the innerHTML to see if they are the same
      twoCards(card1, card2);

  } else {
    card.classList.add("open", "show", "disable");
    cardsOpen.push(this);
  }

  });
}

// matched cards function
function twoCards(card1, card2){
    if(card1.innerHTML === card2.innerHTML){
    card1.classList.add("match");
    card2.classList.add("match");
    matchedCards.push(card1, card2);
    cardsOpen = [];
    finished();
  } else {
  setTimeout(function(){
    card1.classList.remove("open", "show", "disable");
    card2.classList.remove("open", "show", "disable");
  }, 400);
  cardsOpen = [];

}

movesCounter();
}

//the game is finished
function finished(){
  if (matchedCards.length === array_cards.length){
     alert ("game over");
  }
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
    if( moves > 14 && moves < 16){
      starContainer.removeChild(starContainer.childNodes[0]);
    } else if (moves > 16 && moves <20){
      starContainer.removeChild(starContainer.childNodes[1]);
    } else if (moves > 20){
      starContainer.removeChild(starContainer.childNodes[2]);
    }
}



  // Set timer when we first click
  // cambiar la alerta al final
  // animations and responsive
  // REadme




//restarts the Game
const rsButton = document.querySelector(".restart");
  rsButton.addEventListener("click", function() {
  grid.innerHTML = "";
  startGame();
  matchedCards=[];
  moves = 0;
  counter.innerHTML = moves;
  starContainer.innerHTML= `<li><i class ="fa fa-star"></i></li><li><i class ="fa fa-star"></i></li><li><i class ="fa fa-star"></i></li>`;

});



// start the Game
startGame();
