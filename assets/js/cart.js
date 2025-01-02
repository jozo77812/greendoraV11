// Pole na ukladanie položiek v košíku
let cart = [];

// Funkcia na pridanie položky do košíka
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    renderCart();
}

// Funkcia na vykreslenie košíka
function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Cena za kus: ${item.price.toFixed(2)} EUR</p>
            <div class="quantity-controls">
                <button class="decrease-btn" onclick="updateQuantity('${item.name}', -1)">-</button>
                <span>${item.quantity}</span>
                <button class="increase-btn" onclick="updateQuantity('${item.name}', 1)">+</button>
            </div>
            <p>Medzisúčet: ${(item.price * item.quantity).toFixed(2)} EUR</p>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = `${total.toFixed(2)} EUR`;
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
