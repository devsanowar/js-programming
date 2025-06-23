let letter =  prompt('Enter a number : ');
letter = letter.toLowerCase();

if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
    document.writeln(`${letter} is a vowel \n`);
else
document.writeln(`${letter} is a consonant \n`);
