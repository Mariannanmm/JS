const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
const cardValues = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cardDeck = [];

for (const suit of cardSuits) {
    const color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
    for (const value of cardValues) {
        cardDeck.push({
            cardSuit: suit,
            value: value,
            color: color,
        });
    }
}

console.log(cardDeck);

const initialSuitsObject = {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
};

const groupedCards = cardDeck.reduce((accumulator, card) => {
    accumulator[card.cardSuit].push(card);
    return accumulator;
}, initialSuitsObject);

console.log(groupedCards);