function simpleInterest(principleAmount, interestRate, timeInYear) {
    const finalAmount = principleAmount * (1 + (interestRate * timeInYear));
    return finalAmount;
}

let givenPrincipleAmount = 500;
let givenInterestRate = 10;
let givenTimeInYear = 5;

let interestInPercentage = givenInterestRate / 100;

let simpleInterestAmount = simpleInterest(givenPrincipleAmount, interestInPercentage, givenTimeInYear);
console.log("Principle Amount of " + givenPrincipleAmount + " taka " + givenInterestRate + "% Inerest Rate in " + givenTimeInYear + " Year is: " + simpleInterestAmount);