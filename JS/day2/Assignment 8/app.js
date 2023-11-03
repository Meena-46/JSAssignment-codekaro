// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.

let num = 28;
let checkPerfectNumber = (num = 1) => {
   if(num === 1) {
      return false;
   };
   let sum = 1;
   for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0) {
         sum = sum + i + num / i; if(sum > num) {
            return false;
         }
      };
   };
   return sum === num;
};

console.log(checkPerfectNumber(num));