import { clientServices } from "../services/product_services.js";

// add html code in index.html
const newProduct = (name, imgUrl, price) => {
    const card = document.createElement('div');
    card.classList.add('product__oneBox');
    const content = `
    <img src=${imgUrl} alt="imagen producto" class="product__img">
    <h4 class="product__name">${name}</h4>
    <h4 class="product__price">${price}</h4>
    <a href="#" class="product__watchProduct">Ver producto</a>
    `;
    card.innerHTML = content;

    return card;
}

// get the product's div
const getDiv = (category) => {
    let products = "";
    if(category == "Star Wars"){
        return products = document.querySelector('[data-productsStarWars]');
    }else if(category == "Consolas"){
        return products = document.querySelector('[data-productsConsolas]');
    }else if(category == "Diversos"){
        return products = document.querySelector('[data-productsDiversos]');
    }   
}

// add each product in the code
clientServices.productList().then( (data) => {
    console.log(data);
    data.forEach( ({name, imgUrl, price, category}) => {
        const products = getDiv(category);
        const addProduct = newProduct(name, imgUrl, price);
        products.appendChild(addProduct);
    });
})
.catch(error => console.log(error));