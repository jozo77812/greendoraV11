let cart = [];

function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    console.clear();
    console.log("Aktuálny košík:", cart);

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        console.log(`${item.name} - ${item.quantity} x ${item.price.toFixed(2)}€`);
    });

    console.log(`Celková suma: ${total.toFixed(2)}€`);
}
