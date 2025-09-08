let base = {
    id:1,
    name: "John",
}
let copy = Object.create(base);
console.log(base);
console.log(copy);
console.log(copy.id);
console.log(copy.name);
console.log(copy.hasOwnProperty('id'));
copy.id = 34;
console.log(copy.hasOwnProperty('id'));
