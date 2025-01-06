// Inicializácia Firebase Firestore
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Pridanie položky do Firestore
function addToCart(productName, productPrice) {
    db.collection("cart").add({
        name: productName,
        price: productPrice,
        quantity: 1
    }).then((docRef) => {
        console.log("Položka pridaná do košíka: ", docRef.id);
        alert("Položka pridaná do košíka!");
    }).catch((error) => {
        console.error("Chyba pri pridávaní do košíka: ", error);
    });
}

// Pridajte funkciu na tlačidlá "Pridať do košíka"
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const productName = button.dataset.name;
        const productPrice = button.dataset.price;
        addToCart(productName, productPrice);
    });
});
