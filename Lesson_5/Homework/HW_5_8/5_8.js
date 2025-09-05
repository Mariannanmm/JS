const buildListFromArray = (items) => {
    const ul = document.createElement('ul');

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = String(item);
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
};
buildListFromArray([42, 'Привіт', true, false, 'JavaScript']);