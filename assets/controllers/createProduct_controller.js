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


// get the higher id and return the string of it
// clientServices.productList().then( (data) => {
//     const getId = [];
//     data.forEach( ({id}) => {
//             getId.push(id)
//         })
//     const max = Math.max(...getId)
//     if(max < 9){
//         return "00000" + (max+1)
//     }else if(max < 99){
//         return "0000" + (max+1)
//     }else if(max < 999){
//         return "000" + (max+1)
//     }else if(max < 9999){
//         return "00" + (max+1)
//     }else if(max < 99999){
//         return "0" + (max+1)
//     }else if(max < 999999){
//         return (max+1)
//     }
// })
    