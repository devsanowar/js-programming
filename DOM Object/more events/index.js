// load event

window.addEventListener("load", function(){
    console.log("load");
});


window.addEventListener("unload", function(){
    console.log("unload");
});

window.addEventListener("resize", function(e){
    const width = window.outerWidth;
    const height = window.outerWidth;
    console.log(`Width ${width}, Height ${height}`);
});


window.addEventListener("scroll", function(){
    console.log("body scroll");
});

const details = document.querySelector("details");
details.addEventListener("toggle", toggleHandler);
function toggleHandler(e){
    console.log(e.target.open);
}