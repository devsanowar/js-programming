let myVar = document.querySelector("#love-msg");



myVar.addEventListener("mouseover", function () { 
    myVar.classList.add("my-style");
});

myVar.addEventListener("mouseout", function () { 
    myVar.classList.remove("my-style");
 });
