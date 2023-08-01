// GET
const productList = () => fetch('http://localhost:3000/product').then(response => response.json()).catch(error => console.log(error));

export const clientServices = {
    productList,
}