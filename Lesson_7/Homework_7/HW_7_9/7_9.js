Array.prototype.myForEach = function(callback) {

    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const numbers = [10, 20, 30];
numbers.myForEach(num => {
    console.log(num * 2);
});