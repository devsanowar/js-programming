// For of = use for array

const numbers = [1,5,2,4,5,3];
for(let number of numbers){
    console.log(number);
}

// string loop
let name = "Md Sanowar hossen";
for(let char of name){
    console.log(char);
}

// For in = User for object

const student ={
    ID : 101,
    name : 'Md Sanowar Hossen',
    cgpa : 3.21
}

for(x in student){
    console.log(`${x} : ${student[x]}`);
}


