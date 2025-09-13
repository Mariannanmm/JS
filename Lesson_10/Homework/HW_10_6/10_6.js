const input = document.getElementById('xxx');
const resultDiv = document.getElementById('result');
input.oninput = function () {
    const kilos = this.value;
    resultDiv.innerHTML = kilos*2.2;
};
