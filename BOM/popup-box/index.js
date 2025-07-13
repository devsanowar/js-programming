// cofirm box, prompt, alert box

// alert box;
// alert('Are you sure?');


/**
* confirm box
*/

// function confirmBox(){
// let confirmBox = confirm("Are you sure delete.");
// if(confirmBox){
// console.log("true");
// }else{
// console.log("false");
// }
// }

// confirmBox();

/**
* prompt box
*/



function namePrompt(){
    let h1 = document.createElement('h1');
    let text;
    let name = prompt('Enter your name : ');
    if(name == null || name == " "){
        text = "No content found!";
    }else{
        text = "Welcome to our " + name;
    }

    let textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}
namePrompt();