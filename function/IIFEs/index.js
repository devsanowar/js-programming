
// IIFEs - Immediatly Invokeable Function Expression


// (function Message(message){
//     document.writeln(message);
// })("Hello");

// I want to display sum of two numbers.

(function addition(num1, num2){
    let result = num1 + num2;
    document.writeln(result);
})(70, 30);

document.writeln("<br/>");


// Funciton expression


// একটি ফাংশনকে ভ্যারিএবল এর মধ্যে রেখে কাজ করা কেই ফাংশন এক্সপ্রেশন বলা হয়।
// আমরা চাইলে ফাংশন প্যারামিটার ও ব্যবহার করতে পারবও

const display = function displayMessage(){ 
    document.writeln("Hello");
}

display();