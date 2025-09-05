function User(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'John', 'Doe', 'johny@gmail.com', '+380923456343'),
    new User(2, 'Billy', 'Gens', 'billy@gmail.com', '+380923564789'),
    new User(3, 'Anna', 'Vans', 'anna@gmail.com', '+380923488889'),
    new User(4, 'Joanna', 'Hemps', 'joanna@gmail.com', '+380945656789'),
    new User(5, 'Bob', 'Dang', 'bobby@gmail.com', '+380923456111'),
    new User(6, 'Lens', 'Wonka', 'lenny@gmail.com', '+380923452229'),
    new User(7, 'Hans', 'Schnaps', 'hanny@gmail.com', '+380923433389'),
    new User(8, 'Laura', 'Manner', 'lorry@gmail.com', '+380924446789'),
    new User(9, 'Andy', 'Habbot', 'andy@gmail.com', '+380923555789'),
    new User(10, 'Lilian', 'Ramp', 'lilly@gmail.com', '+380966656789')

]
console.log(users);
function filterFunction(user) {
    return user.id%2 === 0;

}
const filterUsers = users.filter(filterFunction);
console.log(filterUsers);
