let cart = [];

function addToCart(productId) {
    let product = {};
    switch(productId) {
        case 1:
            product.name = "Cepillo";
            product.price = 5;
            break;
        case 2:
            product.name = "Jabón";
            product.price = 7;
            break;
        case 3:
            product.name = "Toalla";
            product.price = 10;
            break;
        case 4:
            product.name = "Desodorante";
            product.price = 14;
            break;
        case 5:
            product.name = "Chaqueta";
            product.price = 30;
            break;
        case 6:
            product.name = "Medias";
            product.price = 9;
            break;
        case 7:
            product.name = "Camiseta";
            product.price = 25;
            break;
        case 8:
            product.name = "Sudadera";
            product.price = 23;
            break;
        case 9:
            product.name = "Porcion Pizza";
            product.price = 6;
            break;
        case 10:
            product.name = "Hamburguesa";
            product.price = 8;
            break;
        case 11:
            product.name = "Bebida";
            product.price = 3;
            break;
        case 12:
            product.name = "Postre";
            product.price = 12;
            break;
        default:
            return;
    }

    // Check if the product is already in the cart
    let existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    updateCart();
}

function removeItem(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `${item.name} - $${item.price} x ${item.quantity}
            <button onclick="removeItem(${index})">Eliminar</button>`;
        cartDiv.appendChild(cartItemDiv);
    });
}

function checkout() {
    let message = "Pedido:\n";
    cart.forEach(item => {
        message += `${item.name} - $${item.price} x ${item.quantity}\n`;
    });
    message += `\nTotal: $${calculateTotal()}\n\nGracias por su compra!`;

    const whatsappNumber = "3054589136"; // Cambiar por tu número de WhatsApp
    const messageEncoded = encodeURIComponent(message);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${messageEncoded}`;
    
    window.open(whatsappLink, '_blank');
}

function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}
