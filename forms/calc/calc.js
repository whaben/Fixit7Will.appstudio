function calculate(num1,num2){
  let sum = num1 + num2
  return sum
}
let firstNum = parseInt(prompt("Enter your first number"));
  let secondNum = parseInt(prompt("Enter your second number"));
  let summedNumbers = calculate(firstNum, secondNum);

console.log(`The sum of ${firstNum} and ${secondNum} is ${summedNumbers}`)


