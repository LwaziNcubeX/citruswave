function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []

    let existingItem = cart.find(item => item.name === name)

    if(existingItem) {
        existingItem.quantity +=1
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    alert("Added to cart")
}