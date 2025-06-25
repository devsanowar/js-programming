// Array is an object. That storing data collection
// let name1, name2,name3,name4;
// name1 = "sanowar"; 
// name2 = "karim"; 
// name3 = "shahin"; 
// name4 = "juel"; 

// console.log(name2);

let person = new Array();
person[0] = "Sanowar";
person[1] = "Karim";
person[2] = "Shahin";
person[3] = "Juel";
person[4] = "Shanjida";

// console.log(person);
// console.log(person[2]);
console.log(person.length);

// Some array library function


// push() - Array মধ্যে নতুন ডাটা অ্যাড করা যায় এবং সে ডাটা লাস্টে অ্যাড হয়
person.push('Masud');
person.push('Biddut');
person.push('Mobin');
console.log(person);

// pop() - Array  মধ্যে থাকা লাস্ট ডাটা মুছে ফেলতে ব্যবহার করা হয়।

person.pop(person);
person.pop(person);
person.pop(person);
console.log(person);

// concat() এর মাধ্যমে দুটি array  কে একসাথে যুক্ত করা যায়

let country1 = ['Bangladesh', 'Nepal, Vhutan'];
let country2 = ['india', 'pakistan', 'srilanka'];

let country = country1.concat(country2);
console.log(country);

// push myanmar
country.push('Myanmar');
console.log(country);

// pop myanmar
country.pop();
console.log(country);
