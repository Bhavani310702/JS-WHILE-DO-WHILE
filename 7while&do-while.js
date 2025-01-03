// 1.What will the following code output?
// let x = 5;
// while (x < 3) {
//     console.log(x);
//     x++;
// }

// a) 5
// b) 3
// c) No output
// d) 5, 6, 7... (Infinite loop)

console.log(`c- No Output`)
console.log(`Explaination:here the we r using while loop, which is iterates based upon the condition...here the condition is false...hence the output will be nothing`)


// 2. What will be the result of the following code?
// let y = 0;
// do {
//     console.log(y);
//     y++;
// } while (y < 2);

// a) 0
// b) 0, 1
// c) 1, 2
// d) No output


console.log(`b - 0,1`)
console.log(`Explaination:here we r using the do while statement,so it will print the very 1st line of code nd after that it will checks the condition`)


// 3. Which statement is true about the difference between while and do...while loops?
// a) while loops execute at least once, while do...while loops may not execute at all.
// b) do...while loops execute at least once, while while loops may not execute at all.
// c) Both while and do...while loops execute at least once.
// d) Neither loop guarantees execution of the code block.

console.log(`b - do...while loops execute at least once, while while loops may not execute at all.`)
console.log(`Explaination : while loops will iterates based upon the condition but do-while will prints very 1st statement nd after that it will checks the condtion...`)

// 4. What will the following code print?
// let count = 5;
// do {
//     console.log(count);
//     count--;
// } while (count > 0);

// a) 5, 4, 3, 2, 1
// b) 5
// c) 4, 3, 2, 1
// d) No output

console.log(`a (5,4,3,2,1)`)
console.log(`Explaination:here 1st the count will print nd it will increment by one and after that is will check the condition....so at the count value is 5 it will print nd also increment by one so the value of count is 6,hence while is false so it will stop the execution of code...`)

// 5. Which of the following loops will execute the code block at least once, even if the condition is initially false?
// a) while loop
// b) do...while loop
// c) for loop
// d) for...in loop

console.log(`b- do..while loop`)
console.log(`Explaination: A do while loop check the condition after the code block us executed,so the code block will always run at least once.`)

// 6. What will be the output of the following code?
// let z = 0;
// while (z < 3) {
//     console.log(z);
//     z++;
// }

// a) 1, 2, 3
// b) 0, 1, 2
// c) 0, 1, 2, 3
// d) No output

console.log(`b- 0,1,2`)
console.log(`Explaination:aft the iteration the value of z is 4...nd here we used while so it will checks the code`)

// 7. What is the primary difference between the while loop and the do...while loop?
// a) The while loop checks the condition before the code bloc.k runs, while the do...while loop checks the condition after.
// b) The do...while loop runs only once, while the while loop runs indefinitely.
// c) The while loop checks the condition after the code block runs, while the do...while loop checks it before.
// d) There is no difference between the two loops.

console.log(`a - The while loop checks the condition before the code block runs, while the do...while loop checks the condition after`)


// 8. What will be the output of this code?
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     if (i === 3) break;
//     i++;
// }

// a) 0, 1, 2, 3, 4
// b) 0, 1, 2, 3
// c) 0, 1, 2
// d) Infinite loop

console.log(`b - 0,1,2,3`)
console.log(`Explaination:here the break is used aft the console ...so it will print upto 3 nd break is appicable`)


// 9. Which of the following is the correct usage of a do...while loop?
// a) while (condition) { do { // code } }
// b) do { // code } while (condition);
// c) do while (condition) { // code }
// d) while (condition) do { // code };

console.log(`a - do { // code } while (condition);`)

// 10. What will be the output of the following code?
// let a = 0;
// do {
//     console.log(a);
//     a++;
// } while (a < 0);

// a) 0
// b) 1
// c) No output
// d) Infinite loop

console.log(`a - 0`)
console.log(`Explanation:here we r using do-while loop , so it will print very 1st line of code nd after that it will check the condition...`)


console.log(`Write a while and do while loop that prints the numbers from 1 to 5 in the console`)

let i = 1
while (i<6)
{
    console.log(i)
    i++;
}

let j = 1
do{
    console.log(j)
    j++;
}
while(j<=5)

console.log(`How would you exit a while loop if a specific condition is met (e.g., when the number equals 3), Write a example code?`) 


let x = 0;
while (x < 5) {
    console.log(x);
    if (x == 3) break;
    x++;
}


// next question...

console.log(`Write a while and do while loop that prints numbers from 1 to 10, but skips printing the any number from 1 to 10 .`)


//  using while condition
let num = 0;
while(num<10)
{
    num++;
    if(num == 5){
        continue;
    }
    console.log(num)
}

// using do while condition

let num1 = 0
do{
    num1++
    console.log(num1)
    if(num1==4)
    {   
        num1++
        continue
    }
} 
while(num1<10)


console.log(`Write a while loop that prints all even numbers from 0 to 20`)

let a= 0
while(a<=20)
{   
    a++
    if(a%2==0)
    {
     console.log(a)
    }
}

console.log(`Write an if statement in JavaScript that checks if a number is greater than 10, and prints Number is greater than 10 if true.`)

let b = 15
if(b>10)
{
 console.log(`${b} greater then 10`)
}


 console.log(`
Write an if-else if-else ladder that checks the value of a variable grade and prints:
"A" for grades 90 and above,
"B" for grades 80 to 89,
"C" for grades 70 to 79,
"F" for grades below 70.
`)
let grade = 10
if(grade>90){
   console.log("A"); 
}
else if(grade<89 && grade>=80){
    console.log("B");
}
else if(grade<79 && grade>=70){
    console.log("c");
}
else if(grade>=70){
    console.log("F");
}
else{
    console.log("fail")
}

console.log(`Write a nested if statement that checks if a number is positive and, if true, checks if it's even or odd.?`)


 let num11 = 25
  if(num11>0){
   console.log("it is a positive")
       if(num11%2==0){
        console.log("number is positive if it is even")
    }
        else{
        console.log("if a number is positive if it is odd")
    }
  }
  else{
    console.log("it is a negative")
  }

console.log(`Rewrite the following code using if else statement :let age = 20;console.log(age >= 18 ? "Adult" : "Minor")?`)

let age = 15;
if(age>=18){
console.log("adult")
}
else{
    console.log("minor")
}

console.log(`Write an if statement that checks if a number is between 10 and20 (inclusive). Print "In range" if true, otherwise print "Out ofrange".`)

let z= 30;
if(z>=10 && z<=20){
    console.log("in range")
}
else{
    console.log("out of range ")
}

console.log(`8. Write an if statement that checks if a number is between 10 and 20 or if it's exactly 30, and prints "Condition met" if true.`)

let z2= 30;
if(z2 == 30){
    console.log("condition met")
}
else{
    console.log("condition not met")
}

console.log(`What is the difference between == and === in an if statement inJavaScript? Provide an example where each would behavedifferently.
`)
let user="50"
let user4 =50
if(user==user4){
   console.log("login")
}
else{
    console.log("not login")
}


let user2 = "50"
let user3 = 50
if(user2===user3){
    console.log("login")
}
else{
    console.log("not login")
}


