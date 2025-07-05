// document.querySelectorAll(".submitButton")[0].addEventListener("click", function(){
//     let text = this.innerHTML;
//     document.querySelector("#heading_one").innerHTML = `${text} is clicked`;
// });

// document.querySelectorAll(".submitButton")[1].addEventListener("click", function(){
//     let text = this.innerHTML;
//     document.querySelector("#heading_one").innerHTML = `${text} is clicked`;
// });


// document.querySelectorAll(".submitButton")[2].addEventListener("click", function(){
//     let text = this.innerHTML;
//     document.querySelector("#heading_one").innerHTML = `${text} is clicked`;
// });


// step one
let myButton = document.querySelectorAll(".submitButton");
let len = myButton.length;

for(let i = 0; i < len; i++){
    myButton[i].addEventListener("click", function(){
        let text = this.innerHTML;
        document.querySelector("#heading_one").innerHTML = `${text} is Clicked.`;
    });
}

