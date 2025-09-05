const createParagraph = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    document.body.appendChild(p);
};
createParagraph('Привіт, це мій перший параграф!');