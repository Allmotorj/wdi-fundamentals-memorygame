let cards = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [];

function checkForMatch() 
{
if (cardsInPlay[0] === cardsInPlay[1]) 
{
  console.log ("You found a match!");
} else {
	console.log ("Sorry, try again.");
}
}

function flipCard(cardId) {
 console.log("User Flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();
}


// 

flipCard()

// if (cardsInPlay.length === 2) {} 





