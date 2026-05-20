let orders = [
    { item: "Momo", price: 120, quantity: 2 },
    { item: "Thukpa", price: 150, quantity: 1 },
    { item: "Lassi", price: 80, quantity: 3 },
    { item: "Gulab Jamun", price: 60, quantity: 4 }
]

// Calculate total revenue (price × quantity for each, then sum all)
let totalAmount = orders.reduce((acc, item) => acc + item.price*item.quantity, 0)
console.log(totalAmount)

// Find total items ordered (sum of all quantities)
let totalQuantity = orders.reduce((acc, item) => acc + item.quantity, 0)
console.log(totalQuantity)

// Find the most expensive item (single item with highest price)
let highestPrice = orders.reduce((high, item) => item.price > high.price ? item : high, orders[0])
console.log(highestPrice)
