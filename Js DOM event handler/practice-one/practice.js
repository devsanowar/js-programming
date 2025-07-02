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

