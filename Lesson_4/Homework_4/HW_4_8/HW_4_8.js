function foobar(arrayOfPrimitives) {
    document.write(`<ul>`)
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);

    }
    document.write(`</ul>`);
}

foobar([111,'twotwotwo',333,'forforfor',555,666,true,888]);