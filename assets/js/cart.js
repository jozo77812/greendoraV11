// Príklady položiek v košíku (môžete nahradiť dynamickým pridaním)
let cart = [
    { id: 1, name: "Položka 1", price: 10.00, quantity: 1 },
    { id: 2, name: "Položka 2", price: 20.00, quantity: 2 },
    { id: 3, name: "Položka 3", price: 30.00, quantity: 1 },
];

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
            <p>Cena: ${item.price.toFixed(2)} EUR</p>
            <div class="quantity-controls">
                <button class="decrease-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="increase-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <p>Medzisúčet: ${(item.price * item.quantity).toFixed(2)} EUR</p>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = `${total.toFixed(2)} EUR`;
}

// Funkcia na aktualizáciu množstva položiek
function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            cart = cart.filter(i => i.id !== itemId);
        }
    }
    renderCart();
}

// Inicializácia
document.addEventListener('DOMContentLoaded', renderCart);
