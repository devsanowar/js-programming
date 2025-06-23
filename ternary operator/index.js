// Negative and positive
let number = prompt('Enter Number :');
number = parseInt(number);
// if(number>0)
//     document.writeln(`This is the positive number = ${number}`);

// else if(number<0)
//     document.writeln(`This is the negative number ${number}`);
// else 
//     document.writeln(`Zero \n`);

let result = number>0 ? 'positive' : number<0 ? 'negative' : number==0 ? 'Zero' : 'This is string not a integer number';
document.writeln(`${result}`);