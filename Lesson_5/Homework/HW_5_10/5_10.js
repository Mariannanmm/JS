const findMinNumber = (arr) => {
    if (arr.length === 0) {
        return "Масив порожній";
    }

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};

// Приклад
let numbers1 = [10, 5, 2, 8, 1];
console.log(findMinNumber(numbers1));

let numbers2 = [50, 100, 75];
console.log(findMinNumber(numbers2));