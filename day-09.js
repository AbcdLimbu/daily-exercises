// addToCart(item) — adds item to cart array, saves to localStorage, re-renders cart
let itemList = JSON.parse(localStorage.getItem("cart")) || []

function addToCart(item){
    itemList.push(item)
    localStorage.setItem("cart", JSON.stringify(itemList))
    renderCart()
}
// clearCart() — clears localStorage, re-renders empty cart
function clearCart(){
    localStorage.clear()
    itemList = []
    renderCart() 
}
// renderCart() — reads from localStorage and displays cart items
let cartListEl = document.querySelector("#cart-list")

function renderCart(){
    cartListEl.innerHTML = "";
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.forEach(item => {
        let liEl = document.createElement("li");
        liEl.textContent = item

        cartListEl.appendChild(liEl)
    })
}
// On page load — render cart from localStorage (so items survive refresh!)
window.addEventListener("DOMContentLoaded", renderCart)
