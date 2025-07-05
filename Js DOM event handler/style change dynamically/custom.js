function addStyle(){
    let addStyleId = document.querySelector("#paraId");
    // addStyleId.style.color ="red";
    // addStyleId.style.fontSize ="3rem";
    // addStyleId.style.fontWeight ="bold";
    // addStyleId.style.fontStyle ="italic";
    addStyleId.classList.add("para-style");
}

function removeStyle(){
    let removeStyle = document.querySelector("#paraId");
    removeStyle.classList.remove("para-style");
}