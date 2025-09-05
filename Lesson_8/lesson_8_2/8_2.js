//let name = 'John';
//let age = 30;
//let user = {
//    name,
//    age,
//    foo() {
//        console.log(this);
//    }
//}
//console.log(user);
//user.foo()

//let user = {
//    name: 'John',
//    age: 42,
//    foo(){console.log('foo')}
//}
//let {age, name} = user;
//console.log(name);
//console.log(age);

//function asd(name){
//    console.log(name)

//}
//let object = {a:'qwerty', name:'peggy'};
//asd(object);
//let name = 'Lesson';
//let age = 26;
//let user = {
//    name,
//    age,
//    foo(){console.log(this)},
//    wife: {
//        name:'Anna'
//    }
//};
//let{status} = user;
//console.log(status);
//console.log(user);
//user.foo();

//let {name:userName, age:userAge,wife:{name:wifeName}} = user;
//console.log(userName, userAge);
//console.log(wifeName);

//let numbers = [11, 22, 33];
//let[a,b,c] = numbers;
//console.log(a,b,c);

let users = [
    {name: 'John', age: 31, status: false},
    {name: 'Bob', age: 32, status: true},
    {name: 'Anna', age: 33, status: true},
    {name: 'Den', age: 34, status: false},
    {name: 'Hans', age: 32, status: true},
    {name: 'Dorota', age: 31, status: false},
    {name: 'Jessica', age: 31, status: false},
    {name: 'Sain', age: 32, status: true},
    {name: 'Sam', age: 33, status: true},
    {name: 'Tana', age: 34, status: false},
    {name: 'Towa', age: 35, status: true},
];
let [user1, user2] = users;
console.log(user1);
console.log(user2);