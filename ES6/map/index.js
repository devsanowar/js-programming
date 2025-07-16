const numbers = [2,20,6,42,10, 9, 99, 30, 18];
// const squireNumbers = [];

// numbers.forEach((number, index, arr) => {
//     arr[index] = number * number;
//     squireNumbers.push(arr[index]);
// })

// console.log(squireNumbers);

// const squireNumbers = numbers.map((number) => {
//     return number * number;
// })

// console.log(squireNumbers);

const filterNumbers = numbers.filter((number) => {
    return number > 20;
})
console.log(filterNumbers);
