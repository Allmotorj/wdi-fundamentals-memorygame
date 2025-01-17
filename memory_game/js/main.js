const cards = [
	{
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

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

function flipCard() {
	let cardId = this.getAttribute("data-id");
 console.log("User Flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);

console.log("User Flipped " + cards[cardId].cardImage);
console.log("User Flipped " + cards[cardId].suit);

this.setAttribute(src, cards[cardId].cardImage);
if (cardsInPlay.length === 2) 
{checkForMatch();
}
}
function createBoard() 
{
	let board = document.getElementById("game-board");

	for (let i = 0; i < cards.length; i++)
	{
		let cardElement = document.createElement('img');
		cardElement.addEventListener("click", flipCard);
		board.appendChild(cardElement);
	}
}


createBoard()

