//a list that holds all the cards
 const array_cards = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o', 'fa fa-cube'];

/*
*Display the cards in the page. We had the static html that
we erased and now we need to display them with js
*/

const grid = document.querySelector(".deck");

   for (let i= 0; i < array_cards.length; i++){
     const card= document.createElement("li");
     card.classList.add("card");
     //.innerHTML in this case is to get the icon in each card
     card.innerHTML= `<i class="${array_cards[i]}"></i>`;
     grid.appendChild(card);
}

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



 let moves= document.getElementByClassName('moves');
 let starRating= document.getElementByClassName('fa fa-star');
 let cardsOpen= 0;
 let cardValues=[];
 let cardId= [];
 let stars1= 12;
 let stars2= 20;
 let stars3= 22;










//timer
let second = 0, minute = 0;
let timer = document.querySelector(".timer");
let interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

//counter
function moveCounter(){
    moves++;
    counter.innerHTML = moves;
    if(moves == 1){
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }

//Star Rating
function rating(moves){
let rating=3;
if( moves > stars3 && moves < stars2){
  starRating.eq(3).removeClass('fa fa-star');
} else if (moves > stars2 && moves < stars1){
  starRating.eq(2).removeClass('fa fa star');
  rating=2;
} else if (moves > stars1){
  starRating.eq(1).removeClass('fa fa-star');
  rating=1;
}
 return ( "Your score is" + rating);

}

}





/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
