
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    const currencyObj = currencyValues.find(item => item.currency === exchangeCurrency);
    if (!currencyObj) {
        console.error(`Валюта ${exchangeCurrency} не знайдена`);
        return null;
    }
    const result = sumUAH / currencyObj.value;
    return Math.round(result * 100) / 100;
}
const converted = exchange(10000, [
    { currency: 'USD', value: 25 },
    { currency: 'EUR', value: 42 }
], 'USD');

console.log(converted); // => 400