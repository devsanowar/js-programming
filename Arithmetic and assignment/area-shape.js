let base = parseFloat(prompt("Enter Base : "));
let height = parseFloat(prompt("Enter height : "));

// Calculate square
let square, rectangle, triangle;

square = base * height;
document.writeln("Square Area = " + base + " * " + height + " = " + square + "<br/>");

rectangle = base * height;
document.writeln("Rectangle Area = " + base + " * " + height + " = " + rectangle + "<br/>");

triangle = (base * height) / 2;
document.writeln("Triangle Area = " + triangle);


