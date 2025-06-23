let number1 = prompt('Enter a first number : ');
let number2 = prompt('Enter a second number');
let number3 = prompt('Enter a third number');


if( number1 > number2 && number1 > number3)
    document.writeln(`number1 is a big number`);
else if(number1 >! number2 && number2 > number3) // I am trying different condition
    document.writeln(`number2 is a big number` );
else 
    document.writeln(`number3 is a big number`);