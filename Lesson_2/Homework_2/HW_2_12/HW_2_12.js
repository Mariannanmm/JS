let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray);

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('JavaScript Complex – Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Java Complex – Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Python Complex – Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('QA Complex – Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('FullStack – Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Frontend – Супер');
}
