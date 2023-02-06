"use strict"
// *
// !
// todo
// ?
// 
// 
// 
// 
// 
// *1

// let min=+prompt("Введіть мінімальна число");
// let max=+prompt("Введіть максимальне число");
// let result=0;

//   for (let i = min; i <= max;i ++ ) {
//     result+=i;
//   }
// alert("Сума всіх чисел: "+result);
// !2
// let numOne = +prompt('Введіть перше число:');
// let numTwo = +prompt('Введіть друге число');

// let i;

// if ( numOne > numTwo){
//     i = numOne;
// } else { i = numTwo}

// while( i > 1){
//     if(numOne%i === 0 && numTwo%i === 0){
//         alert(i);
//         break;
//        }
    
   
//     i--
// }
// if(i===1){
//         alert("Спільних дільників не виявлено!")
//     }
// todo 3
// const number = +prompt("Enter a number: ");


// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     console.log("На число "+number+" ділиться наступне число: "+i);
//   }
// }
// ?4
// let number = +prompt("Enter a number:");
// let count = 0;

// if (number === 0) {
//     count = 1;
// } else {
//     while (number > 0) {
//         number = Math.floor(number / 10);
//         console.log(number)
//         count++;
//     }
// }

// alert(`В заданному числі: ${count} , цифр`);
// *5
// let countPositive = 0, countNegative = 0, countZero = 0, countEven = 0, countOdd = 0;

// for (let i = 0; i < 10; i++) {
//     let number = +prompt(`Введіть ${i + 1} число:`);

//     if (number > 0) {
//         countPositive++;
//     } else if (number < 0) {
//         countNegative++;
//     } else {
//         countZero++;
//     }

//     if (number === 0) {
//         continue;
//     } else if (number % 2 === 0) {
//         countEven++;
//     } else {
//         countOdd++;
//     }
// }

// console.log(`Додатні числа: ${countPositive}`);
// console.log(`Відємні числа: ${countNegative}`);
// console.log(`Введено 0, кількість: ${countZero}`);
// console.log(`Парні числа: ${countEven}`);
// console.log(`Непарні числа: ${countOdd}`);
// !6
// let continueCalc = true;

// while (continueCalc) {
//     let num1 = +prompt("Введіть перше число:");
//     let num2 = +prompt("Введіть друге число:");
//     let operator = prompt("Введіть операцію (+, -, *, /):");
//     let result;

//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             alert("Не коректно введено операцію.");
//             break;
//     }

//     if (result !== undefined) {
//         alert(`Результат: ${result}`);
//     }

//     continueCalc = confirm("Ви хочете продовжувати рахувати?");
// }
//todo 8
// let day = "Понеділок";

// while(true)
// {

//     let continueDay = confirm(`День тижня ${day}. Ви хочете побачити наступний день?`);
//     if (continueDay!=true){
//         break;
//     }
//     if(day === "Неділя"){
//         day ="Понеділок";
//     }
//     else if(day === "Понеділок"){
// day ="Вівторок";
//     }
//         else if(day === "Вівторок"){
// day ="Середа";
//     }
//         else if(day === "Середа"){
// day ="Четвер";
//     }
//         else if(day === "Четвер"){
// day ="П'ятниця";
//     }
//         else if(day === "П'ятниця"){
// day ="Субота";
//     }
//         else if(day === "Субота"){
// day ="Неділя";
//     }

// }
//!9
// for(let i=2;i<=9;i++){
//     for(let n=1;n<=10;n++){
//         let result=n*i;
//         console.log(i+" * "+n+" = "+result);
//     }
// }