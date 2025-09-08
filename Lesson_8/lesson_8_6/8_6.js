let user = {
    firstName: 'Taras',
    lastName: 'Shevchenko',
}
//console.log(user);
//user.firstName = 'Ivan';
//console.log(user);
//for (const userKey of user) {
//    console.log(userKey);
//}

Object.defineProperty(
    user,
    'id',
    {
        value: 234,
        writable: false,
        enumerable: false,
        configurable: false,
    }
)
console.log(user);
user.id = 100;
console.log(user);
for (const userKey in user) {
    console.log(userKey);
}
//Object.defineProperty(
//    user,
//    'id',
//    {
//        value: 'Taras',
//        writable: false,
//        enumerable: false,
//        configurable: false,
//}
//);
//console.log(user);