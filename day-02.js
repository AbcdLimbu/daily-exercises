let products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Momo", price: 120, category: "Food" },
    { name: "Phone", price: 30000, category: "Electronics" },
    { name: "Thukpa", price: 150, category: "Food" },
    { name: "Headphones", price: 2000, category: "Electronics" },
    { name: "Lassi", price: 80, category: "Food" }
]

let filterCategory= products.filter(item => item.category=="Electronics")
console.log(filterCategory)

let filterPrice = products.filter(item => item.price < 500)
console.log(filterPrice)

let filterFood = products.filter(item => item.category == "Food" && item.price > 100)
console.log(filterFood)


// Bonus filter() + map()

let newProducts = products
    .filter(item => item.category == "Electronics")
    .map(item => ({ name: item.name, price: item.price }))

console.log(newProducts)
