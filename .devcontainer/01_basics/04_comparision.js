// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//  console.log("2" > 1);      // true
//  console.log("02" > 1);      // true

// console.log(null > 0);       // false

// console.log(null == 0);      // false
// console.log(null >= 0);      // true

// The reason is that an equality check == and comparisions >  <  >=  <= work differently.
//  Comparisions convert null to a number, treating  it as 0.
// thats why (3) null >= 0 is true and (1) null > 0 is false.

// console.log(undefined == 0);       // false
// console.log(undefined > 0);        // false 
// console.log(undefined < 0);       // false


//      ===    ( value and datatype dono ko check karta h)

console.log("2" === 2);         // false
