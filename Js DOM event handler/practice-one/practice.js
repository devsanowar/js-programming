
// button create and then style with hover effects

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
    link.style.transition = "background-color 0.5s ease, transform 0.2s ease-in-out";
});

link.addEventListener('mouseleave', function() {
    link.style.backgroundColor = "red";
    link.style.borderColor = "red";
});



// style for parant div
let myDiv = document.querySelector('.my-div');
myDiv.style.backgroundColor = "green";
myDiv.style.width = "400px";
myDiv.style.height = "400px";
myDiv.style.display = "block";
myDiv.style.textAlign = "center";
myDiv.style.padding = "20px"
myDiv.style.boxSizing = "border-box"
myDiv.style.margin = "auto";

myDiv.addEventListener('mouseenter', function(){
    myDiv.style.backgroundColor = "red";
    myDiv.style.transition = "background-color 0.5s ease, transform 0.2s ease-in-out";
})

myDiv.addEventListener('mouseleave', function(){
    myDiv.style.backgroundColor = "green";
})




// add paragrap text
let paragraph = document.createElement("p");
let textPara = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
paragraph.appendChild(textPara);
myDiv.appendChild(paragraph);


// Element add on top
let subtitle = document.createElement("h3"); // first need to create element
let textSubtitle = document.createTextNode("hello everyone"); // then create text for element
subtitle.appendChild(textSubtitle); // then text append in subtitle

let topDiv = document.querySelector(".my-div h1"); // We have to select the element we want to place something on.
myDiv.insertBefore(subtitle, topDiv);







// style for my-div section
let headingOne = document.getElementsByTagName('h1')[0];
let text = document.createTextNode("Our Services");
headingOne.appendChild(text);

let headingFour = document.getElementsByTagName("h4")[0];
let text2 = document.createTextNode("This is our most valuable services");
headingFour.appendChild(text2);

// Delete element
// myDiv.removeChild(headingFour);



// style for top heading
subtitle.style.color = "#fff";
subtitle.style.fontSize = "30px";
subtitle.style.marginBottom = "10px";


// heading one style
headingOne.style.color = "white";
headingOne.style.fontSize = "30px";
headingOne.style.textTransform = "Uppercase";
headingOne.style.fontFamily = "roboto";
headingOne.style.fontWeight = "700";

// heading four style
headingFour.style.color = "#f2f2f2";
headingFour.style.fontSize = "18px";

// style for paragraph
paragraph.style.color ="#fff";









