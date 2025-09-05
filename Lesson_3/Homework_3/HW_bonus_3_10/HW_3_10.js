let basicBox = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(basicBox);
//let i = 0;
//while (i < basicBox.length) {
//    console.log(basicBox[i]);
//    i++;
//}
//for (let i = 0; i < basicBox.length; i++) {
//    console.log(basicBox[i]);
//}
//let i = 0;
//while (i < basicBox.length) {
//    if (i % 2 !== 0) {
//        console.log(basicBox[i]);
//    }
//    i++;
//}
//for (let i = 0; i < basicBox.length; i++) {
//    if (i % 2 !== 0) {
//        console.log(basicBox[i]);
//    }
//}
//let i = 0;
//while (i < basicBox.length) {
//    if (basicBox[i] % 2 === 0) {
//        console.log(basicBox[i]);
//    }
//    i++;
//}
//for (let i = 0; i < basicBox.length; i++) {
//    if (basicBox[i] % 2 === 0) {
//        console.log(basicBox[i]);
//    }
//}
//for (let i = 0; i < basicBox.length; i++) {
//    if (basicBox[i] % 3 === 0) {
//        basicBox[i] = "okten";
//    }
//}
//console.log(basicBox);

//basicBox.reverse();
//console.log(basicBox);

//let i = basicBox.length - 1;
//while (i >= 0) {
//    console.log(basicBox[i]);
//    i--;
//}

//for (let i = basicBox.length - 1; i >= 0; i--) {
//    console.log(basicBox[i]);
//}

//let i = basicBox.length - 1;
//while (i >= 0) {
//    if (i % 2 !== 0) {
//        console.log(basicBox[i]);
//    }
//    i--;
//}

//for (let i = basicBox.length - 1; i >= 0; i--) {
//    if (i % 2 !== 0) {
//        console.log(basicBox[i]);
//    }
//}

//let i = basicBox.length - 1;
//while (i >= 0) {
//    if (basicBox[i] % 2 === 0) {
//        console.log(basicBox[i]);
//    }
//    i--;
//}

//for (let i = basicBox.length - 1; i >= 0; i--) {
//    if (basicBox[i] % 2 === 0) {
//        console.log(basicBox[i]);
//    }
//}

for (let i = basicBox.length - 1; i >= 0; i--) {
    if (basicBox[i] % 3 === 0) {
        basicBox[i] = "okten";
    }
}
console.log(basicBox);
