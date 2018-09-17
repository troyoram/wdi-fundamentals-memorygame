// console.log("Up and running!");

const cards = ['queen', 'queen', 'king', 'king']

const cardsInPlay = []

const checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

const flipCard = function (cardId) {
	cardsInPlay.push(cards[cardId])
	console.log('User flipped ' + cards[cardId])
	if (cardsInPlay.length == 2) {
		checkForMatch()
	}
}

flipCard(0)
flipCard(2)
