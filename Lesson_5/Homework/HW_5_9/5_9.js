const renderUsers = (users) => {
    users.forEach(user => {
        const block = document.createElement('div');
        block.style.border = '1px solid #ccc';
        block.style.padding = '10px';
        block.style.margin = '10px 0';

        block.innerHTML = `
      <p><strong>ID:</strong> ${user.id}</p>
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Age:</strong> ${user.age}</p>
    `;

        document.body.appendChild(block); // додаємо блок до документа
    });
};
const people = [
    { id: 1, name: 'Олена', age: 25 },
    { id: 2, name: 'Ігор', age: 30 },
    { id: 3, name: 'Марія', age: 22 }
];

renderUsers(people);