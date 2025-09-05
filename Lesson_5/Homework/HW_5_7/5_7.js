const createList = (itemText, itemCount) => {
    const ul = document.createElement("ul");
    for (let i = 0; i < itemCount; i++) {
        const li = document.createElement("li");
        li.textContent = itemText;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}
createList('Однаковий текст', 3);