const priceValueElement = document.getElementById('priceValue');

const PRICE_KEY = 'currentPrice';
const LAST_RELOAD_KEY = 'lastReloadTime';

function initializePrice() {
    if (!localStorage.getItem(PRICE_KEY)) {
        localStorage.setItem(PRICE_KEY, '100');
    }
}

function updatePrice() {
    let currentPrice = parseInt(localStorage.getItem(PRICE_KEY));
    const lastReloadTime = parseInt(localStorage.getItem(LAST_RELOAD_KEY));
    const currentTime = Date.now();

    if (!lastReloadTime || (currentTime - lastReloadTime) > 10000) {
        currentPrice += 10;
        localStorage.setItem(PRICE_KEY, currentPrice.toString());
        console.log('Ціна оновлена! Додано 10 грн.');
    } else {
        console.log('Ціна не оновлена. З моменту останнього перезавантаження пройшло менше 10 секунд.');
    }

    localStorage.setItem(LAST_RELOAD_KEY, currentTime.toString());

    priceValueElement.textContent = currentPrice;
}

document.addEventListener('DOMContentLoaded', () => {
    initializePrice();
    updatePrice();
});