const numbers = [10, 20, 30, 40, 50, 60];
const sqrNumbers = [];

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// protiti array element er sathe 5 summation

// console.log(numbers);
// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]+5);
// }

// protiti array element er sathe square kore then ar ekti array te rakhbo

// for(let i = 0; i < numbers.length; i++){
//     let square = numbers[i] * numbers[i];
//     sqrNumbers.push(square);
// }
// console.log(sqrNumbers);

console.log("User forEach");
// numbers.forEach((number) => {
//     console.log(number);
// })

numbers.forEach((number) =>{
    let sum =number + 5;
    console.log(sum);
})

numbers.forEach((number, index, arr) => {
    arr[index] = number + 5;
})
console.log(numbers);

// numbers.forEach((number) => {
//     let squre = number * number;
//     sqrNumbers.push(squre);
// })
// console.log(sqrNumbers);