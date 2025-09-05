const printArrayElements = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

// Приклад:
let myArray = [1, "Hello", true, { key: "value" }];
printArrayElements(myArray);