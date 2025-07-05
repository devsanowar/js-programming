let StyleId = document.querySelector("#paraId");
function addStyle(){
    // addStyleId.style.color ="red";
    // addStyleId.style.fontSize ="3rem";
    // addStyleId.style.fontWeight ="bold";
    // addStyleId.style.fontStyle ="italic";
    StyleId.classList.add("para-style");
}

function removeStyle(){
    StyleId.classList.remove("para-style");
}