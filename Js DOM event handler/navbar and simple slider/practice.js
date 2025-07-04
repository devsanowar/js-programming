// we can add attribute with attribute value - setAttribute(attr, value)

// let imageAttribute = document.querySelector("img"); 
// imageAttribute.setAttribute("src", "images/banner01.jpg")
// imageAttribute.setAttribute("width", "100%")

let bodyElement = document.getElementsByTagName("body")[0];

bodyElement.style.padding = "0"
bodyElement.style.margin = "0"


let navBar = document.querySelector('#nav-bar');
let navUl = document.querySelector('#nav-bar ul');
let navUlLi = document.querySelectorAll('#nav-bar ul li'); // select all li.
let navUlLia = document.querySelectorAll('#nav-bar ul li a'); // select all li.

navBar.style.width = "100%";
navBar.style.backgroundColor = "red";
navBar.style.height = "50px";
navUl.style.margin = "0";
navUl.style.display = "inline-block";
navUlLi.forEach(function(item) {
    item.style.listStyleType = "none";
    item.style.float ="left";
    item.style.display = 'block';
    item.style.lineHeight = "25px";
    item.style.padding = "10px 20px";
});

navUlLia.forEach(function(itemA){
    itemA.style.color = "white";
    itemA.style.textDecoration = "none";
    itemA.style.fontSize = "20px";    
    itemA.style.fontWeight = "bold";
    itemA.style.textTransform = "uppercase";
    itemA.style.transition = "all 0.4s ease";

    itemA.addEventListener('mouseover', function(){
        itemA.style.color = "black";
    })

    itemA.addEventListener('mouseout', function(){
        itemA.style.color = "white";
    })
});


let photos = ["images/banner01.jpg", "images/banner02.jpg", "images/banner03.jpg"];
let imgTag = document.querySelector("img");
    imgTag.setAttribute("width", "100%");

let count = 0;

function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}

function prev(){
    count--;
    if(count < 0){
        count = photos.length-1;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}