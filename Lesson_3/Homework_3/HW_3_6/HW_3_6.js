let products = [
    {
        title: "milk",
        price: 22,
        image: "https://images.unsplash.com/photo-1634141510639-d691d86f47be?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "juice",
        price: 27,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "tomato",
        price: 47,
        image: "https://plus.unsplash.com/premium_photo-1669906333449-5fc2c47cd8ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9tYXRvfGVufDB8fDB8fHww",
    },
    {
        title: "tea",
        price: 15,
        image: "https://plus.unsplash.com/premium_photo-1661594835845-7035de5abb30?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

for (const product of products) {
    const TITLE = product.title;
    const PRICE = product.price;
    const IMAGE = product.image;

    document.write(`
        <div class="product-card">
            <h3 class=”product-title”>${TITLE}. Price – ${PRICE}</h3>
            <img src=${IMAGE} alt=”” class=”product-image”>

</div>`)
}

