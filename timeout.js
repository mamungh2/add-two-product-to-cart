const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj
}

const addProductToCart = (name1, name2, price1, price2) => {
    // let arr = [name1, name2];
    // let arr2 = [price1, price2];
    // for (let i = 0; i < 2; i++) {
    //     if (arr[i] !== 'null') {
    //         if (cart.hasOwnProperty(arr[i])) {
    //             cart[arr[i]] = parseFloat(cart[arr[i]]) + arr2[i];
    //         }
    //         else {
    //             cart[arr[i]] = arr2[i];
    //         }
    //     }
    // }

    const cart = getCart();
    if (!name2 || !price2) {
        if (cart[name1]) {
            cart[name1] = parseFloat(cart[name1]) + price1;
        }
        else {
            cart[name1] = price1;
        }
    }
    else if (!name1 || !price1) {
        if (cart[name2]) {
            cart[name2] = parseFloat(cart[name2]) + price2;
        }
        else {
            cart[name2] = price2;
        }
    }
    else {
        if (cart[name1]) {
            cart[name1] = parseFloat(cart[name1]) + price1;
        }
        else if (cart[name2]) {
            cart[name2] = parseFloat(cart[name2]) + price2;
        }
        else {
            cart[name1] = price1;
            cart[name2] = price2;
        }
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addProduct = () => {
    const productName1 = document.getElementById('product-name1');
    const name1 = productName1.value;
    const productName2 = document.getElementById('product-name2');
    const name2 = productName2.value;
    const productPrice1 = document.getElementById('product-price1');
    const price1 = parseFloat(productPrice1.value);
    const productPrice2 = document.getElementById('product-price2');
    const price2 = parseFloat(productPrice2.value);
    productName1.value = '';
    productName2.value = '';
    productPrice1.value = '';
    productPrice2.value = '';
    addProductToCart(name1, name2, price1, price2);
}

