/**
 * Arithmetic operator : +, -, *, /, %, ** (exponent operator - 2 ** 3 = 8), ++, -- 
 * Assignment Operator : =, +=, -=, *=, /=, %=,
 */

let x = 10;
let y = 10;
// let sum = x + y; 
let sum = x += y; // x = x + y;

document.writeln(sum + "<br/>");

let a = 5;
console.log(a++);  // 5 (আগে দেখায়, পরে বাড়ায়)
console.log(a);    // 6

let b = 5;
console.log(++b);  // 6 (আগে বাড়ায়, তারপর দেখায়)
console.log(b);    // 6
