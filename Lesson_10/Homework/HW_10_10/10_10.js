const itemsContainer = document.getElementById('itemsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const items = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Об'єкт #${index + 1}`
}));

const itemsPerPage = 10;
let currentPage = 0; // Початкова сторінка - 0

function renderItems() {
    itemsContainer.innerHTML = '';

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const itemsToShow = items.slice(startIndex, endIndex);

    itemsToShow.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.textContent = item.name;
        itemsContainer.appendChild(itemDiv);
    });

    updateButtonStates();
}

function updateButtonStates() {
    prevBtn.disabled = currentPage === 0;

    const totalPages = Math.ceil(items.length / itemsPerPage);
    nextBtn.disabled = currentPage >= totalPages - 1;
}

nextBtn.addEventListener('click', () => {
    currentPage++;
    renderItems();
});

prevBtn.addEventListener('click', () => {
    currentPage--;
    renderItems();
});

document.addEventListener('DOMContentLoaded', renderItems);