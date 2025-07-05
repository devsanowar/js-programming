let myBtn = document.querySelectorAll(".myButton");
let len = myBtn.length;
let i = 0;
for (i = 0; i < len; i++) {
    myBtn[i].addEventListener("click", function(){
        let text = this.innerHTML;
        audioPlay(text)
    });
}


function audioPlay(text){
    switch (text) {
            case "a":
                var audio = new Audio("sounds/audio-01.mp3");
                audio.play();
                break;

            case "b":
                var audio = new Audio("sounds/audio-02.mp3");
                audio.play();
                break;
            
            case "c":
                var audio = new Audio("sounds/audio-03.mp3");
                audio.play();
                break;
        
            default:
                break;
        }
}