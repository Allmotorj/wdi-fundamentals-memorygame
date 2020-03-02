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
}
{
	checkForMatch()
}


// cardsInPlay.push(cards[cardId]);

flipCard()

// if (cardsInPlay.length === 2) {} 





