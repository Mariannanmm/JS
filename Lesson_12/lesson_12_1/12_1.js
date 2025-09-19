async function foo() {
    let users = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(value => value.json())
        .then(users => {})

    let posts = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(value => value.json())
        .then(posts => {})

    console.log(users);
    console.log(posts);
}

foo()