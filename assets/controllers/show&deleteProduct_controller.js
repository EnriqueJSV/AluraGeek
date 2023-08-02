import { clientServices } from "../services/product_services.js";

// Show products
const showProduct = (imgUrl, name, price, id) => {
    const card = document.createElement('div');
    card.classList.add('products__oneBox');
    const content = `
    <img src=${imgUrl} alt="imagen producto" class="products__img">
    <div class="products__btnBox">
        <button class="products__delete" id=${id} data-btnDelete></button>
        <a href="editProduct.html?id=${id}" class="products__edit" data-btnEdit></a>
    </div>
    <div class="products__textBox">
        <h4 class="products__name">${name}</h4>
        <h4 class="products__price">${price}</h4>
        <p class="products__id">ID: #${id}</p>
    </div>`
    card.innerHTML = content;

    // Delete
    const btnDelete = card.querySelector('[data-btnDelete]');

    btnDelete.addEventListener('click', () =>{
        const ids = btnDelete.id;
        console.log(`clic a ${ids}`);
        clientServices.deleteProduct(ids).then(response => {
            console.log(response);
        }).catch(error => console.log(error));
    })


    return card;
}

const products = document.querySelector('[data-allProducts]');

clientServices.productList().then( (data) => {
    console.log(data);
    data.forEach( ({imgUrl, name, price, id}) => {
        const addProduct = showProduct(imgUrl, name, price, id);
        products.appendChild(addProduct);
    });
}).catch(error => console.log(error));