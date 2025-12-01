// let name = "Sufyan";
// let age = 19;
// let is_active = true;
// let score = 75.5;


// console.log("Hello World");
// console.log(age);
// console.log(score);
// console.log("Score:",score);


// alert("This is a warning");
// confirm("Are you sure you want to delete this?");


// document.write("hello this is my first websitye using javascript");
// document.write(age);


// let Student_name = prompt("Enter your name?");

// console.log(Student_name);



// let maximum = Math.max(5,9,43,60);
//  console.log(maximum)

// let minimum = Math.min(90,80,70,60);
// console.log(minimum)

//  let round_value = Math.round(4.8);
//  console.log(round_value)

//  let floor_value = Math.floor(4.9);
// console.log(floor_value);

//  let ceil_vlaue = Math.ceil(4.1);
//  console.log(ceil_vlaue);


//  let random_value = Math.random();
//  console.log(random_value);

// let user_input = prompt("Enter a number");
// let random_value2 = Math.round(Math.random()*user_input);
// console.log(random_value2);

// let no1 = parseFloat(prompt("enter no 1"));
// let no2 = parseFloat(prompt("enter no 2"));


// let sum = no1 + no2;
// let sub = no2 - no1;
// let mul = no1 * no2;
// let div = no2 / no1;
// let mod = no2 % no1;
// console.log("The sum of two number",no1,"and",no2 ,"is",sum);
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(mod);

// let no = toString(9);
// console.log(typeof(no));

 
// let no1 = 12;
// let no2 = "12";

// let equal_to = no1 == no2;
// console.log(equal_to);


// let strict_equal_to = no1 === no2;
// console.log(strict_equal_to);


// let not_equal_to = no1 != no2;
// console.log(not_equal_to)

// let strict_not_equal_to = no1 !== no2;
// console.log(strict_not_equal_to);


// let result = no1 > no2;
// console.log(result);

// let age = 25;
// let is_citizen = false;

// if (age>="18" || is_citizen == true){
//     console.log("you are eligible to vote")
// }
// else{
//     console.log("You are not not eligible to vote")
// }

// let number = parseInt(prompt("Enter a number"));

// if (number%2 == 0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

// let no = prompt("enter a number?");

// if(no % 5 == 0 && no % 7 == 0){
//     console.log("Number is divisible by both")
// }

// else if (no % 7 == 0){
//     console.log("Number is divisible by 7")
// }
// else if (no % 5 == 0){
//     console.log("Number is divisible by 5");
// }
// else{
//     console.log("Not divisible")
// }






// const num = Math.floor(Math.random() * 10) + 1;
// const guess = parseInt(prompt("Guess a number (1–10):"));

// if (guess === num) {
//   console.log(" Correct!");
// } else if (guess < num && guess >= 1) {
//   console.log("Too low!");
// } else if (guess > num && guess <= 10) {
//   console.log("Too high!");
// } else {
//   console.log("Out of range!");
// }




// const password = prompt("Enter your password:");
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// const matchResult = password.match(passwordRegex);
// if (matchResult !== null) {
//   alert(" Strong Password!\nYour password meets all security requirements.");
// } else {
  
//   let message = " Weak Password!\nYour password must include:\n";

 
//   if (!password.match(/[a-z]/)) {
//     message += "- At least one lowercase letter (a–z)\n";
//   }
//   if (!password.match(/[A-Z]/)) {
//     message += "- At least one uppercase letter (A–Z)\n";
//   }
//   if (!password.match(/\d/)) {
//     message += "- At least one number (0–9)\n";
//   }
//   if (!password.match(/[@$!%*?&]/)) {
//     message += "- At least one special character (@, $, !, %, *, ?, &)\n";
//   }
//   if (password.length < 8) {
//     message += "- Minimum length of 8 characters\n";
//   }


// alert(message);
// }


// for(let i =0;i<10;i++){
//   console.log("Hello World",i);
// }

// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// let num = prompt("Enter a number?");

// for(i=1;i<=10;i++){
//   console.log(num,"x",i,"=",num*i);
// }

// let n = parseInt(prompt("Enter a number:"));
// let i = 1;

// while (i <= n) {
//   console.log(i);
//   i++;
// }


// let sum = 0;
// let num = parseFloat(prompt("Enter a number (0 to stop):"));

// while (num !== 0) {
//   sum += num;
//   num = parseFloat(prompt("Enter another number (0 to stop):"));
// }

// console.log("Total sum =", sum);

// for(let i = 10;i>=1;i--){
//   console.log(i)
// }

// for(let i = 1; i<10;i++){
//   if(i==5){
//     continue;
//   }
//   console.log(i)
// }

// let i = 1;

// do{
//   console.log(i);
//   i++;
// }while(i==5);

let fruits = ["apple","orange","banana"]


// fruits.push("Mango");

// console.log(fruits[3]);

// fruits.pop();
// console.log(fruits[2]);

// fruits.unshift("mango");
// console.log(fruits[0]);

// fruits.shift();
// console.log(fruits[0]);



// fruits.splice(1, 1, "grape"); 
// console.log(fruits); 


// let extracted_part = fruits.slice(0, 2); 
// console.log(extracted_part)
// console.log(fruits); 

// console.log(fruits.indexOf("banana"))

// let if_apple = fruits.includes("mango");
// console.log(if_apple)

// console.log(fruits.join("$"))

// let day = parseInt(prompt("Enter a number"));
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Invalid day";
// }

// console.log(dayName); 


// function greet(name){
//     console.log("Hello",name)
// }

// greet("Ali");
// greet("Ayan");

// function sum(a,b){
//     let add = a + b;
//     console.log(add);
// }

// sum(5,6);
// sum(10,10);

// let a = function(name){
//     console.log("Hello",name)
// }

// a("Ali");

// let mul = (x,y) => x*y

// console.log(mul(5, 6));

// function outer(){

//     function inner(){
//         console.log("Inner function");
//     }

//     console.log("Outer function");
//     inner();
// }

// outer();


// let menu = ["Coffee", "Tea", "Cake", "Juice"];
 
// menu.forEach(function(items, index) {
//   document.write((index + 1) + ")" + items + "<br>");
// });









