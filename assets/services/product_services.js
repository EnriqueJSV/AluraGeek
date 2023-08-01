// GET
const productList = () => fetch('http://localhost:3000/product').then(response => response.json()).catch(error => console.log(error));

// POST
const createProduct = (imgUrl, name, price, id) => {
    return fetch('http://localhost:3000/product',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imgUrl, name, price, id})
    }).then(response => {
        if(response.ok){
            return response.body
        }
    })
}

export const clientServices = {
    productList,
    createProduct
}