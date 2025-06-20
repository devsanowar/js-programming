let num1 = prompt('Enter the first number : ');
let num2 = prompt('Enter the second number'); // Prompt function Alwayes take string input 

// Convert string to int
num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

let sum, sub, mult, division, mod;

sum =  num1 + num2;
document.writeln("Sumation is = " + sum + "<br/>");

sub = num1 - num2;
document.writeln("Substraction is = " + sub + "<br/>")

mult = num1 * num2;
document.writeln("Multiplication is = " + mult + "<br/>");

division = num1 / num2;
document.writeln("Division is = " + division + "<br/>");

mod = num1 % num2;
document.writeln("Mod is = " + mod);