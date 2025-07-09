let box = document.querySelector("#box");
let para = document.querySelector("#text");

text.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("Content", e.target.id);
});

box.addEventListener("dragover", function (e) { 
    e.preventDefault();
 });

 box.addEventListener("drop", function (e) { 
    let id = e.dataTransfer.getData("Content");
    box.appendChild(document.getElementById(id));
    e.preventDefault();
  });
