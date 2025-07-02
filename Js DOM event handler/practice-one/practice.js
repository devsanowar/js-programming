let link = document.getElementsByTagName('a')[0];
link.href = "https://github.com/devsanowar";
link.target = "_blank";
link.style.textDecoration = "none";
link.style.color = "white";
link.style.fontSize = "20px";
link.style.border = "1px solid red";
link.style.padding ="5px 15px";
link.style.backgroundColor = "red";

link.addEventListener('mouseenter', function() {
    link.style.backgroundColor = "green";
    link.style.borderColor = "green";
});

link.addEventListener('mouseleave', function() {
    link.style.backgroundColor = "red";
    link.style.borderColor = "red";
});


// style for my-div section
let headingOne = document.getElementsByTagName('h1')[0];
let text = document.createTextNode("Our Services");
headingOne.appendChild(text);

let headingFour = document.getElementsByTagName("h4")[0];
let text2 = document.createTextNode("This is our most valuable services");
headingFour.appendChild(text2);



let myDiv = document.querySelector('.my-div');
myDiv.style.backgroundColor = "green";
myDiv.style.width = "400px";
myDiv.style.height = "400px";
myDiv.style.display = "block";
myDiv.style.textAlign = "center";
myDiv.style.padding = "20px"
myDiv.style.boxSizing = "border-box"
myDiv.style.margin = "auto";


let paragraph = document.createElement("p");
let textPara = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
paragraph.appendChild(textPara);

myDiv.appendChild(paragraph);


headingOne.style.color = "white";
headingOne.style.fontSize = "24px";
headingOne.style.textTransform = "Uppercase";
headingOne.style.fontFamily = "roboto";
headingOne.style.fontWeight = "700";


headingFour.style.color = "#f2f2f2";
headingFour.style.fontSize = "18px";

paragraph.style.color ="#fff";

