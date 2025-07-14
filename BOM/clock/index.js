let saveButton = document.querySelector(".saveButton");
let message = document.querySelector(".message");

saveButton.addEventListener("click", realClock);
function realClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = formaTing(date.getMinutes());
    let seconds = formaTing(date.getSeconds());

    let time = hours + ":" + minutes + ":" + seconds;
    message.textContent = time;

    setInterval(realClock, 1000);
}

function formaTing(value){
    if(value < 10){
        value = "0" + value;
    }

    return value;
}