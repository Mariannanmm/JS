document.addEventListener('DOMContentLoaded', () => {
    const pairInput = document.getElementById('pairInput');
    const addButton = document.getElementById('addButton');
    const pairList = document.getElementById('pairList');
    const sortByNameButton = document.getElementById('sortByNameButton');
    const sortByValueButton = document.getElementById('sortByValueButton');
    const deleteButton = document.getElementById('deleteButton');

    const validationRegex = /^\s*([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)\s*$/;

    let pairs = [];

    const renderList = () => {
        pairList.innerHTML = '';
        pairs.forEach(pair => {
            const option = document.createElement('option');
            option.value = pair.name;
            option.textContent = `${pair.name}=${pair.value}`;
            pairList.appendChild(option);
        });
    };

    addButton.addEventListener('click', () => {
        const input = pairInput.value.trim();
        const match = input.match(validationRegex);

        if (match) {
            const name = match[1];
            const value = match[2];
            pairs.push({ name, value });
            renderList();
            pairInput.value = ''; // Clear input field
        } else {
            alert('Invalid format. Please use "Name=Value" with only alphanumeric characters.');
        }
    });

    sortByNameButton.addEventListener('click', () => {
        pairs.sort((a, b) => a.name.localeCompare(b.name));
        renderList();
    });

    sortByValueButton.addEventListener('click', () => {
        pairs.sort((a, b) => a.value.localeCompare(b.value));
        renderList();
    });

    deleteButton.addEventListener('click', () => {
        const selectedOptions = Array.from(pairList.selectedOptions);
        const selectedValues = new Set(selectedOptions.map(option => option.textContent));
        pairs = pairs.filter(pair => !selectedValues.has(`${pair.name}=${pair.value}`));

        renderList();
    });
});