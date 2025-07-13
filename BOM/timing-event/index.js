// setTimeout(display, 2000);

// function display(){
//     console.log("Welcome to our setTimeOut function");
// }


// let btnName = document.querySelector('.saveButton');
// let message = document.querySelector('.message');

// btnName.addEventListener("click", saveInfo);
// function saveInfo(){
//     message.textContent = "Student registerd successfully";

//     setTimeout(() =>{
//         message.textContent = "";
//     }, 2000);
// }


let saveButton = document.querySelector('.saveButton');
let message = document.querySelector('.message');
saveButton.addEventListener("click", function(){
    let count = 1;
    message.textContent = count;

    setInterval(() => {
        count++;
        message.textContent = count;
    }, 1000);

});

