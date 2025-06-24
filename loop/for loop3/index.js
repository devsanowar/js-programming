//I want to display the sum of two numbers 5 times in the output.

// for(i = 1; i <= 5; i++){
//     let num1 = parseInt(prompt('Enter first number : '));
//     let num2 = parseInt(prompt('Enter second number : '));
//     let sum = num1 + num2;
//     document.writeln(`Result is = ${sum}`);
// }



// i want to display the sum of even numbers in the output

let sum = 0;
let ininital = 2;
for (let initial = 0; initial <= 100; initial = initial + 2) {
    sum += initial;
}

document.writeln(`Sum is ${sum}`);