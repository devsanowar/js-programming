let myBtn = document.querySelectorAll(".myButton");

myBtn.forEach(button => {
    button.addEventListener("click", function () {
        let text = this.innerText.trim().toLowerCase();
        audioPlay(text);
        customAnimation(this);
    });
});

function audioPlay(text) {
    switch (text) {
        case "a":
            new Audio("sounds/audio-01.mp3").play();
            break;
        case "b":
            new Audio("sounds/audio-02.mp3").play();
            break;
        case "c":
            new Audio("sounds/audio-03.mp3").play();
            break;
        default:
            console.log("No sound found for", text);
    }
}

function customAnimation(button) {
    button.classList.add("animated-btn");

    // Remove after delay if needed, or keep permanently if desired
    setTimeout(() => {
        button.classList.remove("animated-btn");
    }, 800);
}
