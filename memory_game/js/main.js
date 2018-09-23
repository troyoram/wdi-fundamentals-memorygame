// console.log("Up and running!");

// const cards = ['queen', 'queen', 'king', 'king']
const cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"

},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"

},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"

}
]

const cardsInPlay = []

const checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
	} else {
		alert("Sorry, try again.")
	}
}

const flipCard = function () {
	const cardId = this.getAttribute('data-id')
	cardsInPlay.push(cards[cardId].rank)
	// console.log('User flipped ' + cards[cardId].rank)
	// console.log(cards[cardId].cardImage)
	// console.log(cards[cardId].suit)
	this.setAttribute('src', cards[cardId].cardImage)
	if (cardsInPlay.length == 2) {
		checkForMatch()
	}
}

const createBoard = function () {
	const cardLayout = document.getElementById('game-board')
	for (let i = 0; i < cards.length; i++) {
		const cardElement = document.createElement('img')
		cardElement.setAttribute('src', 'images/back.png')
		cardElement.setAttribute('data-id', i)
		cardElement.addEventListener('click', flipCard)
		cardLayout.appendChild(cardElement)
	}
}

// flipCard(0)
// flipCard(2)
createBoard()
