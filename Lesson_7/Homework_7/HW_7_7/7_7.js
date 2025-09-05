class Car{
    constructor(model, produser, year, maxSpeed, engineVolume) {
        this.model = model;
        this.produser = produser;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        console.log( `їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0) {}
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear(newYear) {
        if (newYear > 1815) this.year = newYear;
    }
    addDriver(driverObject) {
        if (driverObject) this.driver = driverObject;
    }
}
const car = new Car('Skoda', 'VAG', 2024, 220, 1);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(40);
console.log(car);