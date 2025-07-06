let form = document.querySelector("form");
let name = form.querySelector("#name");
let email = form.querySelector("#email");
let password = form.querySelector("#password");
let country = form.querySelector("#country");

form.addEventListener("submit", formHandler);
function formHandler(e){
    e.preventDefault();
    const userInfo = {
        name : name.value,
        email : email.value,
        password : password.value,
        country : country.value,
    }
    console.log(userInfo);

    name.value ="";
    email.value ="";
    password.value ="";
    country.value ="";
}

