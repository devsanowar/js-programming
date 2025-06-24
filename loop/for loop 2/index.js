// ১ থেকে ৫ এর যোগ ফল নির্নয়
// 1 + 2+ 3 + 4 + 5 = 15

let m = parseInt(prompt('Enter sterting number : '));
let n = parseInt(prompt('Enter last number : '));

let sum = 0;
for (let i = m; i <= n; i++) {
    sum += i; // sum = sum + i
}

document.writeln(`Sum is = ${sum}`);