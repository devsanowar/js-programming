let firstName = prompt("Enter your first name : ");
let lastName = prompt("Enter your last name : ");

let fullName = firstName + " " + lastName;
document.writeln(fullName + "<br/>");

// total length of fullName

document.writeln(fullName.length + "<br>");

// Convert Fullname into uppercase

document.writeln(fullName.toUpperCase() + "<br/>");

// Print the 2nd position from fullname
document.writeln(fullName.charAt(2));