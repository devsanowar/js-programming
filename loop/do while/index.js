let i = 1;
let sum = 0;
let addOperator = true;
do {
    if(i%3 == 0 && i%5 == 0){
        if(!addOperator){
            document.writeln(` + `);
        }
        document.writeln(` ${i}`);
        sum += i; // sum = sum +i;

        addOperator = false;
    }
    i++;
    
} while (i <=100);

document.writeln(` = ${sum}`);