// Знаходимо елементи за їх ID
const ageInput = document.getElementById('ageInput');
const checkButton = document.getElementById('checkButton');
const messageParagraph = document.getElementById('message');

checkButton.addEventListener('click', function() {
    const age = parseInt(ageInput.value);

    if (isNaN(age) || age < 0) {
        messageParagraph.textContent = 'Будь ласка, введіть коректний вік.';
        messageParagraph.style.color = 'red';
        return;
    }

    if (age < 18) {
        messageParagraph.textContent = 'Ваш вік менше 18 років.';
        messageParagraph.style.color = 'red';
    } else {
        messageParagraph.textContent = 'Ваш вік 18 або більше років.';
        messageParagraph.style.color = 'green';
    }
});