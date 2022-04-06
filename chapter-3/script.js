 
 /* const square = function(x) {
    return x * x;
 };
 //result 144
 console.log(square(12));   */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  /* const makeNoise = function() { console.log("Pling!");
};
makeNoise() */
//result Pling

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* const power = (base, exponent) => {
    let result = 1
    for(let count = 0; count < exponent; count++) {
        result*= base
    }
    //result 256 👇
    return result
} */

//call function and pass parameteres 👇
/* console.log(power(2,8)); */


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//global scope examples
/* let x = 10
if(true) {
    //this let and const value  work only in this scoope or child heritage
    let y = 20
    const z = 30
    //result 60 👇
    console.log('value from father',x + y +z);
    if(true) {
        //result 50 👇
        console.log('heritage',y + z);
    }
}
//here i had wrong ´cause the "y" 👇 value can´t i call outside of the scope
console.log(x + y); */


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* const halve = (n) => {
    return n / 2
}
let n = 10
//get the parameter function pass 👇 result: 50
console.log('halve function', halve(100))
//get the let value, result: 10 👇
console.log('n', n); */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


//nested scope
/* const humans = (factor) => {
    const ingredient = (amount, unit, name) => {
        let ingredientAmount = amount * factor
        if(ingredientAmount > 1) {
            unit +=  "S"
        }
       console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, "can", "chickpeas"); 
    ingredient(0.25, "cup", "tahini"); 
    ingredient(0.25, "cup", "lemon juice"); 
    ingredient(1, "clove", "garlic"); 
    ingredient(2, "tablespoon", "olive oil"); 
    ingredient(0.5, "teaspoon", "cumin");
}
//pass parameter function 👇
console.log('humans', humans(2)); */



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* 
//result 👇
console.log("The future says:", future());
function future() {
return "You'll never have flying cars";
}
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

//example 1 about arrow function
/* const square1 = (x) => { return x * x; };
console.log(square1(3)); */ //9

//example 2 about arrow function

/* const square2 = x => x * x;
console.log(square2(3)); */ //9

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* The call stack */
/* const  greet = (who) =>  console.log("Hello " + who);
//pass parameters who 👇
greet("Harry"); 
//result 👇 1st => Hello Harry then => Bye
console.log("Bye"); */



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


//add return

/* function chicken() {
    return egg();
  }
  function egg() {
    return chicken();
  } // result Maximum call stack size 👇
 console.log(chicken() + " came first."); */



 /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

 /* function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
 }
 //entry in the first condition, Result: -10
  console.log(minus(10));

  //entry en the second condition, result:   5
  console.log(minus(10, 5));
 */


  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

  /* function power(base, exponent = 2 ) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
    console.log("🚀 ~ file: script.js ~ line 154 ~ power ~ exponent", exponent)
        
      result *= base;
    }
    return result;
  }
  console.log(power(4));
  // → 16
  console.log(power(2, 6));
  // → 64 */




  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


  // Closure functions

/* function wrapValue(n) {
   let local = n;
   return () => local;
}

//simple function call 👇 the result of the first two is 1
let wrap1 = wrapValue(1);
// console.log("🚀 ~ file: script.js ~ line 180 ~ wrap1", wrap1())
// console.log("🚀 ~ file: script.js ~ line 180 ~ wrap1", wrap1())

//here why it´s CLOSURE, the resul change  👇
let wrap1 = wrapValue(1);
console.log("🚀 ~ file: script.js ~ line 180 ~ wrap1", wrap1())
let wrap2 = wrapValue(2);
console.log("🚀 ~ file: script.js ~ line 182 ~ wrap2", wrap2()) */


/* function multiplier(factor) {
    return number => number * factor;
 }
 let twice = multiplier(2);
//10 👇
 console.log(twice(5)); */


 /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

 //Recursive function

function power(base, exponent) {
   if (exponent == 0) {
     return 1;
   } else {
     return base * power(base, exponent - 1);
   }
}
 console.log(power(2, 3));
 // → 8

 
 
 function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
 } else {
 return find(current + 5, `(${history} + 5)`) ||
            find(current * 3, `(${history} * 3)`);
 } }
 return find(1, "1"); }

 console.log(findSolution(24));