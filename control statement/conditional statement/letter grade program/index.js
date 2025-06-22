let number = prompt('Enter number : ');
if(number >= 80 && number <= 100 ) {
    document.writeln(`A+ grade = ${number}`);
}
else if(number >= 70 && number < 80 ){
    document.writeln(`A grade = ${number}`);
}

else if(number >= 60 && number < 70){
    document.writeln(`A- grade = ${number}`);
}

else if(number >= 50 && number < 60){
    document.writeln(`B grade = ${number}`);
}

else if(number >= 40 && number < 50){
    document.writeln(`C grade = ${number}`);
}

else if(number >= 33 && number < 40){
    document.writeln(`D grade = ${number}`);
}

else if(number < 33){
     document.writeln(`Fail !!!`);
}


else{
    document.writeln(`${number} is not a valid number.`);
}