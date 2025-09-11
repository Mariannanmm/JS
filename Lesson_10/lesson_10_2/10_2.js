//localStorage.setItem('qwertyui', 'qwertyui');
//let item = localStorage.getItem('item');
//console.log(item);

//localStorage.clear();

//localStorage.setItem('users', JSON.stringify({id:1, name: 'John'}));
//let userJSON = localStorage.getItem('user');
//console.log(userJSON);
//let user = JSON.parse(userJSON);
//console.log(user);
//user.age = 31;
//.log(user);
//let stringify = JSON.stringify(user);
//localStorage.setItem('user', stringify);

//let users = [
//    {name: 'John', age: 31, status: false},
//    {name: 'Bob', age: 32, status: true},
//    {name: 'Anna', age: 33, status: true},
//    {name: 'Den', age: 34, status: false},
//    {name: 'Hans', age: 32, status: true},
//    {name: 'Dorota', age: 31, status: false},
//    {name: 'Jessica', age: 31, status: false},
//    {name: 'Sain', age: 32, status: true},
//    {name: 'Sam', age: 33, status: true},
//    {name: 'Tana', age: 34, status: false},
//    {name: 'Towa', age: 35, status: true},
//]

//localStorage.setItem('users', JSON.stringify(users));
let usersJSON = localStorage.getItem('user');
console.log(usersJSON);
let users = JSON.parse(usersJSON);
console.log(users);
users.push({});
console.log(users);
localStorage.setItem('user', JSON.stringify(users));