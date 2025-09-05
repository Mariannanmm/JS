class Cinderella{
    constructor(name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

class Prince{
    constructor(name, age, slipper){
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const cinderellas = [
    new Cinderella('Jasmine', 18, 34),
    new Cinderella('Rose', 19, 35),
    new Cinderella('Camille', 20, 36),
    new Cinderella('Joanna', 21, 37),
    new Cinderella('Laura', 22, 38),
    new Cinderella('Lilian', 23, 39),
    new Cinderella('Violet', 24, 40),
    new Cinderella('Maria', 25, 41),
    new Cinderella('Kathrine', 26, 42),
    new Cinderella('Josefine', 27, 43),

]

const prince = new Prince('John', 20, 36);

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.slipper) {
        prince.wife = cinderella;
    }

}
console.log(prince);