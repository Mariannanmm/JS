let productsDiv = document.getElementsByClassName('products')[0];

let products = [
    {
        title:'milk',
        price:23,
        image:'https://tse3.mm.bing.net/th/id/OIP.VGhnOqt0TASXeu_KP61DEAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
        title:'juice',
        price:27,
        image:'https://th.bing.com/th/id/OIP.or8UteHVIG1UYeTtWI28hQHaHJ?w=185&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'
    },
    {
        title: 'tomato',
        price:47,
        image:'https://th.bing.com/th/id/OIP.MRHYY1RfWWqYb8qWhqzuqwHaE8?w=257&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'
    },
    {
        title:'tea',
        price:15,
        image:'https://th.bing.com/th/id/OIP.2IZkDioxbizUu-xwVq-z1QHaFG?w=263&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'
    }
];

for (const product of products) {
    let productsBlock = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = `${product.title} ${product.price}UAH`;
    let img = document.createElement('img');
    img.src = product.image;

    let buttonElement = document.createElement('button');
    buttonElement.innerText = 'add to card';
    buttonElement.onclick = function () {
        let card = JSON.parse(localStorage.getItem('card')) || [];
        card.push(product);
        localStorage.setItem('card', JSON.stringify(card));
    }



    productsBlock.append(h2, img, buttonElement);
    productsDiv.appendChild(productsBlock);
}