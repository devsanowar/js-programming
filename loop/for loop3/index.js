//I want to display the sum of two numbers 5 times in the output.

for(i = 1; i <= 5; i++){
    let num1 = parseInt(prompt('Enter first number : '));
    let num2 = parseInt(prompt('Enter second number : '));
    let sum = num1 + num2;
    document.writeln(`Result is = ${sum}`);
}
