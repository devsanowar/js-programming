/** library function for string 
 * 
 * length, prompt, charAt, toUpperCase, toLowerCase, concat,slice 
 * 
*/

let text = "Bangladesh";
let len = text.length;
// document.writeln(len); // Number of character

// Prompt use for user input
let name = prompt('Enter your name :');
let nameLen = name.length;
document.writeln(nameLen + "</br>");

// charAt() হল JavaScript-এর একটি ফাংশন, যা একটি স্ট্রিংয়ের নির্দিষ্ট অবস্থানে থাকা (index অনুযায়ী) অক্ষরটি (character) রিটার্ন করে।

document.writeln("Three number index of character : " + text + " = " + text.charAt(3)+ "<br/>");

// Text lower case to uppercase convertion
document.writeln(text.toUpperCase() + "<br/>");

// Uppercase to lowercase convertion
document.writeln(text.toLowerCase() + "<br/>");

// Concate ফাংশন এর মাধ্যমেও দুইটি অর মাল্টিপল ভেরিএবল কে কনকেট করা যায়

let firstName = "Md Sanowar"
let lastName = " Hossen"
let fullName = firstName.concat(lastName);
document.writeln(fullName + "<br/>");

//slice() হল JavaScript-এর একটি খুব গুরুত্বপূর্ণ string এবং array method, যা নির্দিষ্ট অংশ কাটে বা কপি করে রিটার্ন করে

let division = "Comilla";
let divSlice = division.slice(1, 5); //string.slice(startIndex, endIndex)
document.writeln(divSlice + "<br/>");

// Array Slice
const fruits = ['Mango', 'banana', 'Apple', 'Orange', 'lichi'];
let arraySlice = fruits.slice(1, 3);
document.writeln(arraySlice);
