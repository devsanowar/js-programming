// How to create an object
// How to print value of an object
// Adding a constructor
// Adding function inside a construction


function Student(name, age, email, lang){
    this.name = name;
    this.age = age;
    this.email = email;
    this.lang = lang;
    this.display = function () { 
        console.log(this.name);
        console.log(this.age);
        console.log(this.email);
        console.log(this.lang);
     }
}

let student1 = new Student('Md Sanwoar Hossen', 30, 'sanowargiit22@gmail.com', ['bangla', 'english']);
let student2 = new Student('Mobin', 20, 'mobin@gmail.com', ['bangla', 'english']);
let student3 = new Student('Saikat', 30, 'saikat@gmail.com', ['bangla', 'english']);

console.log(student1);
console.log(student2);
console.log(student3);
// var name = "Md Sanowar hossen";
// var age = 30;
// var email = 'sanowargiit22@gmail.com';
// var lang = ['bangla', 'english']


// student = {
//     name : 'Md Sanowar Hossen',
//     age : 30,
//     email : 'sanowargiit22@gmail.com',
//     lang : ['bangla', 'english'],
// }

// student2 = {
//     name : 'Md karim mia',
//     age : 22,
//     email : 'karim@gmail.com',
//     lang : ['bangla', 'english'],
// }

// console.log(student.name);
// console.log(student.age);
// console.log(student.email);
// console.log(student.lang[0]);
// console.log(student.lang[1]);

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.email);
// console.log(student2.lang[0]);
// console.log(student2.lang[1]);