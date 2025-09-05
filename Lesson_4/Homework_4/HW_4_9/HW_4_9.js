function foobar(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
foobar([
    {id:1, name:'John', age:23},
    {id:2, name:'Smith', age:63},
    {id:3, name:'Jane', age:33},
    {id:4, name:'Kole', age:43},
    {id:5, name:'Erwint', age:53},
]);