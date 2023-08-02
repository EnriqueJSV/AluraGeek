import { userServices } from "../services/user_services.js";

const form = document.querySelector('[data-login]');

const verifyUser = (email, password, u_email, u_password) => {
    if(u_email == email && u_password == password){
        window.location.href = "../screens/allProducts.html";
    }else{
        alert('el correo o contrasena ingresados estan incorrectos');
    }
}

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const u_email = document.querySelector('[data-userEmail]').value;
    const u_password = document.querySelector('[data-password]').value;
    // console.log(email,password)

    userServices.usersList().then( (data) => {
        console.log(data);
        data.forEach( ({email, password}) =>{
            const verify = verifyUser(email, password, u_email, u_password);
        })
    }).catch(error => console.log(error));
})