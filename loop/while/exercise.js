// ১ থেকে ১০০ পর্যন্ত সংখ্যার মধ্যে যে সকল সংখ্যা ৩ এবং ৫ দিয়ে ভাগ করলে ভাগ শেষ ০ হবে তাদের যোগফল


// let i = 1;
// let sum = 0;
// while (i <= 100) {
//     if(i%3 == 0 && i%5 == 0){
//         document.writeln(` ${i} + `);
//         sum +=i;
//     }
//     i++;
// }

// document.writeln(` = ${sum}`);


let i = 1;
let sum = 0;
let first = true;

while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
        if (!first) {
            document.writeln(" + ");
        }
        document.writeln(`${i}`);
        sum += i;
        first = false;
    }
    i++;
}

document.writeln(` = ${sum}`);

