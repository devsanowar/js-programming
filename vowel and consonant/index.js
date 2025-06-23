const vowelList = ['a', 'e', 'i', 'o', 'u'];
let text = "How are you";
let letters = text.split('');

let vowels = [];
let consonants = [];

letters.forEach(char => {
    if(vowelList.includes(char))
        vowels.push(char);
   
    else if (char >= 'a' && char <= 'z' )
        consonants.push(char);
});

console.log(`${vowels} \n`);
console.log(`${consonants} \n`);

