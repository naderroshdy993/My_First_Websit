const products = [
{ id: 1, name: "Product A", price: 20 },
{ id: 2, name: "Product B", price: 35 },
{ id: 3, name: "Product C", price: 50 },
{ id: 4, name: "Product D", price: 15 }
];


const cart = [];


const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const total = document.getElementById("total");


function renderProducts() {
products.forEach(product => {
const div = document.createElement("div");
div.className = "product";
div.innerHTML = `
<h3>${product.name}</h3>
<p>Price: $${product.price}</p>
<button onclick="addToCart(${product.id})">Add to Cart</button>
`;
productList.appendChild(div);
});
}


function addToCart(id) {
const product = products.find(p => p.id === id);
cart.push(product);
renderCart();
}


function renderCart() {
cartItems.innerHTML = "";
let totalPrice = 0;
cart.forEach(item => {
const li = document.createElement("li");
li.textContent = `${item.name} - $${item.price}`;
cartItems.appendChild(li);
totalPrice += item.price;
});
total.textContent = totalPrice;
}


renderProducts();
