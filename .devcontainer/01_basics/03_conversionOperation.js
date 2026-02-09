let score = 33

//  console.log(typeof score);       // number
// console.log(typeof(score));       // number

let age = "22"
// console.log(typeof age);    // string
//  console.log(age)    // 22

let valueInNumber = Number(age)      
// console.log(typeof valueInNumber);    //  number
// console.log(valueInNumber);         //  22

let val = "33abc"
let valInNumber = Number(val)
//  console.log(typeof valInNumber);     // number
//  console.log(valInNumber);            // NaN


let A = null   
// console.log(typeof(A));            // object    
let B = Number(A)
// console.log(typeof(B));           // number
// console.log(B);                  // 0


let value_1 = undefined
// console.log(typeof(value_1));        // undefined

let value_2 = Number(value_1);      
// console.log(typeof(value_2));        // number
// console.log(value_2);                // NaN


let value_3 = true
 // console.log(typeof(value_3));     // boolean
let value_4 = Number(value_3);
// console.log(typeof(value_4))      // number
 // console.log(value_4)             //  1


let str = "Shivani"
// console.log(typeof(str));     // string
let str2 = Number(str);
// console.log(typeof(str2));    // number
// console.log(str2);            // NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)                  // true

let isLoggedIn_01 = 0
let booleanIsLoggedIn_01 = Boolean(isLoggedIn_01)
 // console.log(booleanIsLoggedIn)                      // true

let isLoggedIn_02 = ""
let booleanIsLoggedIn_02 = Boolean(isLoggedIn_02)
// console.log(booleanIsLoggedIn_02)                     // false

let isLoggedIn_03 ="shivani"
let booleanIsLoggedIn_03 = Boolean(isLoggedIn_03)
// console.log(booleanIsLoggedIn_03)                     // true

// 1 => true; 0 => false
// "" => false
// "shivani" => true


let someNumber = 33 
let stringNumber = String(someNumber)
// console.log(stringNumber);                // 33
// console.log(typeof stringNumber);         // string



// *********************************** Operations ********************************


let value = 3
let negValue = -value
//  console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let strX = "hello"
let strY = " shivani"

let strZ = strX + strY
// console.log(strZ);            // hello shivani

// console.log("1" + 2);           // 12
// console.log(1 + "2");           // 12
// console.log("1" + 2 + 2);        // 122

// console.log(1 + 2 + "2");          // 32

// console.log((3 + 4) * 5 % 3);       // ( messy code saperated by paranthesis)

console.log(true);           // true
console.log(+true);           // 1   (not preferred)
console.log(-true)             // -1  (not preferred)

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

// *********** prefix/ postfix

let gameCounter = 100
++gameCounter;
console.log(gameCounter);  // 101

let apple = 200
apple++;
console.log(apple);        // 201

