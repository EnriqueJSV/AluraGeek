import { clientServices } from "../services/product_services.js";

// get the form
const form = document.querySelector('[data-formAdd]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const url = document.querySelector('[data-url]').value;
    const category = document.querySelector('[data-category]').value;
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;
    const id = "";

    clientServices.createProduct(url, name, price, id, category)
    .then( response => {
        window.location.href = "../screens/allProducts.html"
        console.log(response)
    })
    .catch(error => {console.log(error)})
})