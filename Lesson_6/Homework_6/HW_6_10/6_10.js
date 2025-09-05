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

const aceOfSpades = cardDeck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log('Піковий туз:', aceOfSpades);

const allSixes = cardDeck.filter(card => card.value === '6');
console.log('Усі шістки:', allSixes);

const allRedCards = cardDeck.filter(card => card.color === 'red');
console.log('Усі червоні карти:', allRedCards);

const allDiamonds = cardDeck.filter(card => card.cardSuit === 'diamond');
console.log('Усі бубнові карти:', allDiamonds);

const allClubsFromNineAndUp = cardDeck.filter(card => {
    if (card.cardSuit === 'clubs') {
        const valuableCards = ['9', '10', 'jack', 'queen', 'king', 'ace'];
        return valuableCards.includes(card.value);
    }
    return false;
});

console.log('Усі трефи від 9 та більше:', allClubsFromNineAndUp);