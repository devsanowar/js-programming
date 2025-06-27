let names = ['sanowar', 'rahim', 'karin', 'rubel', 'shafin', 'mobin'];
// names.push('saikat'); // Push method er maddhome array element add kora jay
// console.log(names);

// names.pop(); // Pop push er opposite. last element remove kora hoy pop er maddhome
// console.log(names);

// names.shift(); // Pop er opposite method holo shift - first element remove kore fele
// console.log(names);

// names.unshift("Shanjida"); // shurute elemenet add kore
// console.log(names);

// let country1 = ['Bangladesh', 'Pakista', 'India', 'Srilanka'];
// let country2 = ['Nepal', 'Maldiv', 'Vhutan'];

// let country = country1.concat(country2); // দুটি অ্যারে একসাথে যোগ করে
// console.log(country);

// console.log(names);
// let arrayLength = names.length;
// console.log(arrayLength);
// let sliced = names.slice(1, 4);   //নির্দিষ্ট অংশ কেটে নেয় (মূল অ্যারে অপরিবর্তিত থাকে)
// console.log(sliced);


// splice(start, deleteCount, newItems...)  - Array থেকে ডাটা ডিলিট করে বা নতুন ডাটা অ্যাড করে

let numbers = [1,2,3,4,5,6];
// numbers.splice(1, 3); // জাস্ট ডাটা ডিলিট 
numbers.splice(1, 3, 20, 15); // ডাটা ডিলিট করেছে এবং নতুন ডাটা অ্যাড করেছে
console.log(numbers);