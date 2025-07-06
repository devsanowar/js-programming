
console.clear();

let nameInput = document.querySelector("input");
nameInput.addEventListener("change", changeHandler)
function changeHandler(e){
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);
    // console.log(e.target.className);
    // console.log(e.target.id);
    console.log(e.target.value);
}