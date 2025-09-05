const createList = (itemText) => {
    const ul = document.createElement('ul');

    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');
        li.textContent = itemText;
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
};
createList('Це елемент списку');