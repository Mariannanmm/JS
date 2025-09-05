let mixed = [1, 'hello', true, 2, false, 'world', 3, true, '!', 4];

for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] === 'boolean') {
        console.log(mixed[i]);
    }
}

for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] === 'number') {
        console.log(mixed[i]);
    }
}

for (let i = 0; i < mixed.length; i++) {
    if (typeof mixed[i] === 'string') {
        console.log(mixed[i]);
    }
}
