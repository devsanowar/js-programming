// reguler function
// function add(a, b){
//     return a + b;
// }

//  let sum = add(5,7);
// console.log(sum);

// multiplication = (number1, number2) => number1 * number2;
// let mult = multiplication(10, 10);
// console.log(mult);

// default parameter (Reguler function)
// ---------------------------------------

// function personName(name = "Sanowar"){
//     return`Hello ${name}`;
// }

// console.log(personName());
// console.log(personName('Karim'));

// default parameter (ES6 function)
//  perName = (name = "Md Sanowar Hossen") =>  `Hello ${name}`;

//  console.log(perName());

// const person = {
//     name: "Md Sanowar Hossen",
//     age: 30,
//     phone: "01786998635",
//     email: "sanowargiit22@gmail.com",
//     edu: function(){
//         return "Ghatail gono pilot high school";
//     }
// }

// console.log(person.edu());

// const person = {
//     name: "Md Sanowar Hossen",
//     age: 30,
//     phone: "01786998635",
//     email: "sanowargiit22@gmail.com",
//     edu: function(){
//         return {
//             instituteName : "Ghatail cant public school and collage",
//         }
//     }
// }

// console.log(person.edu().instituteName);


const person = {
    name: "Md Sanowar Hossen",
    age: 30,
    phone: "01786998635",
    email: "sanowargiit22@gmail.com",
    edu: () => {
        return {
            instituteName : "Ghatail cant public school and collage",
        }
    }
}

console.log(person.edu().instituteName);