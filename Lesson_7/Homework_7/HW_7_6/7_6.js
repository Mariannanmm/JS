function Car(model, produser, year, maxSpeed, engineVolume) {
    this.model = model;
    this.produser = produser;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function() {
        console.log( `їдемо зі швидкістю ${maxSpeed} на годину`)
    };
    this.info = function() {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    this.increaseMaxSpeed = function(newSpeed) {
        if (newSpeed > 0) {}
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function(newYear) {
        if (newYear > 1815) this.year = newYear;
    }
    this.addDriver = function(driverObject) {
        if (driverObject) this.driver = driverObject;
    }
}
const car = new Car('Skoda', 'VAG', 2024, 220, 1);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(40);
console.log(car);