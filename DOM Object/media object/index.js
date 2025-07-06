let myVideo = document.querySelector("video");
myVideo.addEventListener("canplay", function(){
    console.log("canplay");
})

myVideo.addEventListener("play", function(){
    console.log("play");
})

myVideo.addEventListener("playing", function(){
    console.log("playing");
})

myVideo.addEventListener("pause", function(){
    console.log("pause");
})

myVideo.addEventListener("volumechange", function(){
    console.log("volumechange");
})

myVideo.addEventListener("ended", function(){
    console.log("Thanks for watching");
})