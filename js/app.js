

 //select the Id and create the variables. Create a list/array

 let array_cards = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-anchor', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-diamond', 'fa fa-bomb', 'fa fa-leaf', 'fa fa-bomb', 'fa fa-bolt', 'fa fa-bicycle', 'fa fa-paper-plane-o', 'fa fa-cube'];
 let memory_values= [];
 let memory_card_id= [];
 //to know how many cards are flipped
 let card_flipped= 0;
 let card = document.getElementsByClassName('card');
 let deck= document.getElementById('deck');
 let stars= document.getElementById('score-panel');
 let moves= document.getElementById('moves');
 let timer= document.getElementById('timer');
 let restart= document.getElementById('restart');


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array_cards) {
    var currentIndex = array_cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array_cards[currentIndex];
        array_cards[currentIndex] = array_cards[randomIndex];
        array_cards[randomIndex] = temporaryValue;
    }

    return array_cards;
}


//generate a new board










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
