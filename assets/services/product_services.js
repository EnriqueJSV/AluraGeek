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

// DELETE 
const deleteProduct = (id) => {
    console.log(`elimina a ${id}`);
    return fetch(`http://localhost:3000/product/${id}`,{
        method: 'DELETE',
    })
}

export const clientServices = {
    productList,
    createProduct,
    deleteProduct
}