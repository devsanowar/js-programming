let digit = prompt('Enter a digit');
// if(digit == 0)
//     document.writeln(`${digit} = Zero`);
// else if(digit == 1)
//     document.writeln(`${digit} = One`);
// else if(digit == 2)
//     document.writeln(`${digit} = Two`);
// else if(digit == 3)
//     document.writeln(`${digit} = Three`);
// else if(digit == 4)
//     document.writeln(`${digit} = Four`);
// else if(digit == 5)
//     document.writeln(`${digit} = Five`);
// else if(digit == 6)
//     document.writeln(`${digit} = Six`);
// else if(digit == 7)
//     document.writeln(`${digit} = Seven`);
// else if(digit == 8)
//     document.writeln(`${digit} = Eight`);
// else if(digit == 9)
//     document.writeln(`${digit} = Nine`);
// else
//     document.writeln(`${digit} is Not a digit`);



switch(digit){
    case "0":
        document.writeln(`${digit} = Zero`)
        break;
    case "1":
        document.writeln(`${digit} = One`)
        break;
    case "2":
        document.writeln(`${digit} = Two`)
        break;
    case "3":
        document.writeln(`${digit} = Three`)
        break;
    case "4":
        document.writeln(`${digit} = Four`)
        break;
    case "5":
        document.writeln(`${digit} = Five`)
        break;
    case "6":
        document.writeln(`${digit} = Six`)
        break;
    case "7":
        document.writeln(`${digit} = Seven`)
        break;
    case "8":
       document.writeln(`${digit} = Eight`)
        break;
    case "9":
       document.writeln(`${digit} = Nine`)
        break;
    default :
        document.writeln(`${digit} is Not a digit`);

}