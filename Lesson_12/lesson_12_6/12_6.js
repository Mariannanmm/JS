//fetch(`https://jsonplaceholder.typicode.com/users`)
//    .then(value => value.json())
//    .then(users => {
//        for (const user of users) {
//            fetch(`https://jsonplaceholder.typicode.com/posts?userId=` + user.id)
//            .then(value => value.json())
//            .then(postsOfIteratedUser =>{
//                user.posts = postsOfIteratedUser;
//            })
//            console.log(user)
//        }
//    })


let users = fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())

let posts = fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(value => value.json())

Promise.all([users,posts]).then(result => {
    //let usersArray = result[0];
    //let postsArray = result[1];
    //console.log(usersArray, postsArray);
    let [users, posts] = result;
    //console.log(users, posts);
    for (const user of users) {
        user.posts = [];
        for (const post of posts) {
            if (user.id === post.userId) {
                user.posts.push(post)
            }
        }
    }
    console.log(users);
})