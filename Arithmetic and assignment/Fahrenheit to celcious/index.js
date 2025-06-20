let fahrenheit = parseFloat(prompt('Enter Fahrenheit : '));
let cels;
cels = (fahrenheit-32)*5/9;
document.writeln("Celcious : " + cels.toFixed(2));