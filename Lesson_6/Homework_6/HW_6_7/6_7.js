function sortNums(arrayOfNums, direction) {
    if(direction === 'ascending') {return arrayOfNums.sort((a, b) => a - b)}
    if(direction === 'descending') {return arrayOfNums.sort((a, b) => b - a)}
}