let income = 18000;
let homeRant = 1750;
let mealExpense = 1500;
let carRant = 1400;
let extraExpense = 1000;
let familyExpense = 10000;
let savings = 10; // 20 %
savings /=100; // savings = savings/100;


let totalCost, texDeduction, monthlySaving, remainingBalance, balance;

// Monthly savings as a percentage of total income
monthlySaving = income * savings;
document.writeln("Mothly Savings (10%) = " + monthlySaving + "<br/>");

// Total cost
totalCost = homeRant + mealExpense + carRant + extraExpense;
document.writeln("Total monthly cost = " + totalCost + "<br/>");

// Every month, I have to give my family 10,000 Taka.
document.writeln("Every month, I have to give my family 10,000 Taka = " + familyExpense + "<br/>");

// Remaining balance
remainingBalance = income - (totalCost + monthlySaving + familyExpense);
document.writeln("Remaining Balance = " + remainingBalance + "<br/>");

balance = remainingBalance;
document.writeln(" Balance = " + balance);