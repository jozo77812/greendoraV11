// Pole na ukladanie položiek v košíku
let cart = [];

// Pridanie položky do košíka
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    console.log(cart); // Skontrolujte, či sa položka pridáva do poľa
    renderCart();
}

// Funkcia na zobrazenie košíka (ak je košík zobrazený na aktuálnej stránke)
function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    if (!cartItemsContainer) return; // Ak nie je kontajner na košík, ukonči funkciu

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price} EUR</p>
            <p>Množstvo: ${item.quantity}</p>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = `${total.toFixed(2)} EUR`;
}

}

// Funkcia na aktualizáciu množstva položky
function updateQuantity(name, change) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            cart = cart.filter(i => i.name !== name);
        }
    }
    renderCart();
}

// Pridať udalosť pre načítanie stránky
document.addEventListener('DOMContentLoaded', renderCart);
function addToCart(name, price) {
    console.log(`Pridávam do košíka: ${name} - ${price} EUR`);
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    console.log("Aktuálny obsah košíka:", cart);
    renderCart();
}
