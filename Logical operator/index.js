/**
 *  >, <, >=, =<, &&, ||, !=, !==, ===
 */


let number1 = 20;
let number2 = 30;
let number3 = "20";


if (!(number1 > number2)) {
    document.writeln(`${number1} is smaller than the ${number2}`);
}

document.writeln('<br/>');

if(number1 < number2){
    document.writeln(`${number2} is greater than ${number1}` );
}

document.writeln('<br/>');

if(number1 != number2){
    document.writeln('This is true');
}

document.writeln('<br/>');

// Here, one is a string and the other is an integer, but both have the same numeric value.
// The == operator compares only the value and does not check the data type,
// so it returns true in this case.

if(number1 == number3){
    document.writeln(`This is true`); 
}

document.writeln('<br/>');

// The strict equality operator (===) checks both value and data type.
// Since number1 and number3 may have the same value but different types, this returns false.
if(number1 === number3){
    document.writeln(`This is false`); 
}

document.writeln('<br/>');

// The strict inequality operator (!==) checks both value and data type.
// It returns true if either the value or the type is different.

if(number1 !== number3){
    document.writeln(`This is true`); 
}