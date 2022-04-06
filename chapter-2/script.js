

   /*  const x =5
    console.log(typeof(x)); */    //number
   /* const a  = 'hi'
    console.log(typeof(a));  */    // string
/* Looping a triangle Exercises
Write a loop that makes seven calls to console.log to output the following triangle: */
/* for (let line = "#"; line.length < 8; line += "#")
  console.log(` ${line.length} - ${line}`); */

 /*  Write a program that uses console.log 
  to print all the numbers from 1 to 100, 
  with two exceptions. For numbers divisible by 3, 
  print "Fizz" instead of the number, 
  and for numbers divisible by 5 (and not 3), print "Buzz" instead. */

  for (let a = 1; a <=100; a++){
   /*  When you have that working, modify 
    your program to print "FizzBuzz" for 
    numbers that are divisible by both 3 and 5 
    (and still print "Fizz" or "Buzz" for 
    numbers divisible by only one of those). */
     /*  if(a % 3 == 0 || a % 5 == 0) 
        console.log('FIZZBUZZZ')
      
      else if(a % 3 == 0) console.log(`FIZZZ`)
       else if (a % 5 == 0) console.log(`BUZZZ`)
      else console.log(a) */
  }

  /* const a = 5 % 5 == 0
 console.log(a) */

 /* Chessboard
Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the 
grid there is either a space or a "#" character. The characters should 
form a chessboard.Passing this string to console.log 
should show something like this: */

let size = 8
let board = ""
//Outerloop for rows
for(let i = 1; i <= size; i++) {
    //inner loop for columns
    for(let j = 1; j <= size; j++) {
        if((i + j) % 2 ==0) { //chck if col is even
            board += " "
        } else { // if col is odd
            board += "#"
        }
    }
    board += "\n" //jump to text row
}
console.log(board)

/* const a = (1 + 1) % 2 == 0
console.log("🚀 ~ file: script.js ~ line 55 ~ a", a) */
