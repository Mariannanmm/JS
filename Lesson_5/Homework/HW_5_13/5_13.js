const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const rateObj = currencyValues.find(item => item.currency === exchangeCurrency);
    return rateObj ? sumUAH / rateObj.value : null;
};
const rates = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];
console.log(exchange(10000, rates, 'USD'));