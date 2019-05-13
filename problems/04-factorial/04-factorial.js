/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  if(typeof(sumNum) !== typeof(0)){
      return 'You didn\'t give me a number!'
  }

  if(sumNum < 1){
      return 'Too low of a number!'
  }

  if(sumNum === Infinity){
      return 'This is too much!'
  }

  if(sumNum === 1){
      return 1
  }

  return (sumNum * factorial(sumNum-1))

}

console.log(factorial(170))