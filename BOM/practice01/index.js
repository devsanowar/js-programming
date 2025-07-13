let locationDev = document.querySelector("#location-div");

let p = locationDev.children[0];
p.textContent = location.href;

let p1 = locationDev.children[1];
p1.textContent = location.protocol;

let p2 = locationDev.children[2];
p2.textContent = location.hostname;

let p3 = locationDev.children[3];
p3.textContent = location.port;

let p4 = locationDev.children[4];
p4.textContent = location.pathname;

let visitWeb = document.querySelector(".visit-website");
visitWeb.addEventListener("click", function(){
    location.assign("https://studywithanis.com");
});