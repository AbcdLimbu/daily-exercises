// This is the UNSAFE way - rewrite it safely!
let products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Momo", price: 120, category: "Food" },
    { name: "<script>alert('hacked!')</script>", price: 999, category: "Hacker" }
]

// Unsafe way:
// document.body.innerHTML = products.map(product => `
//     <div>
//         <h3>${product.name}</h3>
//         <p>${product.price}</p>
//         <p>${product.category}</p>
//     </div>
// `).join('')

let containerEl = document.querySelector("#container")

products.forEach(product => {

    let childEl = document.createElement("div")
    let h3El = document.createElement("h3")
    h3El.textContent = `${product.name}`
    let p1El = document.createElement("p")
    p1El.textContent = `${product.price}`
    let p2El = document.createElement("p")
    p2El.textContent = `${product.category}`

    childEl.appendChild(h3El)
    childEl.appendChild(p1El)
    childEl.appendChild(p2El)
    
    containerEl.appendChild(childEl)
    
})
