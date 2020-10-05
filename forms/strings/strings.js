let quoteString = "Failure is simply the opportunity to begin again this time more intelligently.";
 quoteString = quoteString.toUpperCase()
alert(`Upper case string is: ${quoteString}`)

let authorString = "- Henry Ford"
alert(authorString)

let completeString = quoteString + authorString
alert(completeString)


let found = completeString.includes("Henry")
if (found) {
  console.log("Henry was in the quote string.");
} else {
  console.log("Henry was NOT in the quote string.");
}


let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
secondQuote = secondQuote.toLowerCase()
console.log(`The Lower Case string is: ${secondQuote}`)

let n = parseInt(prompt("Please enter a number"));

let answer = n + 10;

console.log(`The number ${n} + 10 is ${answer}.`);