// let sum = 0;
// let ininital = 2;
// for (let initial = 0; initial <= 100; initial = initial + 2) {
//     sum += initial;
// }

// document.writeln(`Sum is ${sum}`);

let i = 2; // initial value
let sum = 0;
while (i <= 100) {
    sum += i;
    i+=2; // increment or decrement
}

document.writeln(`Sum is ${sum}`);