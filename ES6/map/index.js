const numbers = [2,4,6,8,10];
// const squireNumbers = [];

// numbers.forEach((number, index, arr) => {
//     arr[index] = number * number;
//     squireNumbers.push(arr[index]);
// })

// console.log(squireNumbers);

const squireNumbers = numbers.map((number) => {
    return number * number;
})

console.log(squireNumbers);

