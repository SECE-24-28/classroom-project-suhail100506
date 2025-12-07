// Sample product data
const products = [
    { id: 1, name: "Apple Airpodes", price: 1200, img: "apple.webp" },
    { id: 2, name: "Smart Watch", price: 800, img: "watch.webp" },
    { id: 3, name: "Shoes", price: 2000, img: "shoe.webp" },
    { id: 4, name: "Backpack", price: 450, img: "bag.webp" }
];

// Render products on Home Page
const productList = document.getElementById("product-list");

if (productList) {
    products.forEach(p => {
        const card = `
            <div class="bg-white shadow rounded-lg p-4">
                <img src="${p.img}" class="w-full h-40 object-contain rounded">
                <h3 class="font-semibold text-lg mt-2">${p.name}</h3>
                <p class="text-gray-600">₹${p.price}</p>
                <button onclick="addToCart(${p.id})" 
                    class="mt-2 bg-blue-600 text-white w-full py-2 rounded">
                    Add to Cart
                </button>
            </div>
        `;
        productList.innerHTML += card;
    });
}

// ADD TO CART FUNCTION
function addToCart(id) {
    const item = products.find(p => p.id === id);

    // Get existing cart or empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(item); // add new item

    localStorage.setItem("cart", JSON.stringify(cart)); // save

    alert(item.name + " added to cart!");
}


// DISPLAY CART PAGE ITEMS
const cartBox = document.getElementById("cart-items");

if (cartBox) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartBox.innerHTML = "<p class='text-gray-600'>Your cart is empty...</p>";
    } else {
        cart.forEach(item => {
            const row = `
                <div class="flex gap-4 items-center bg-white p-4 rounded shadow mb-3">
                    <img src="${item.img}" class="w-20 h-20 rounded object-contain">
                    <div>
                        <h3 class="text-lg font-semibold">${item.name}</h3>
                        <p class="text-gray-600">₹${item.price}</p>
                    </div>
                </div>
            `;
            cartBox.innerHTML += row;
        });
    }
}
