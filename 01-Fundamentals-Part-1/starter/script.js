// The SWITCH statement

/*const day = "Saturday";

switch(day) {
    case "Monday":
        console.log(`Plan my course structure.`);
        console.log("It is the first day of the week.");
        break;
    case "Tuesday":
    case "Wednesday":
        console.log("Chilling in the backyard.");
        break;
    default:
        console.log("Drinking beer.");
}*/

// using STRICT MODE - more secure code (needs to be the first line)
'use strict';

// ARROW FUNCTIONS
const calcAge = (birthYear) => 2037 - birthYear;
const age = 1990;

//  CODING CHALLENGE IF ELSE STATEMENTS
/* 
BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter)
Your tasks:
1.Store Mark's and John's mass and height in variables
2.Calculate both their BMIs using the formula (you can even implement both versions)
3.Create a Booleanvariable 'markHigherBMI'containing information about whether Mark has a higher BMI than John.
Test data:
Data1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

const BMI = function (height, mass) {
	return mass / height ** 2;
};

let markMass, markHeight, johnMass, johnHeight;
markMass = 78;
markHeight = 1.69;
johnMass = 95;
johnHeight = 1.88;

console.log(
	`The BMI of Mark is ${BMI(
		markHeight,
		markMass
	)}; he wieghs ${markMass} kg and is ${markHeight} m tall.`
);
console.log(
	`The BMI of John is ${BMI(
		johnHeight,
		johnMass
	)}; he wieghs ${johnMass} kg and is ${johnHeight} m tall.`
);

const markBMI = BMI(markHeight, markMass);
const johnBMI = BMI(johnHeight, johnMass);

if (markBMI > johnBMI) {
	console.log(
		`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`
	);
} else {
	console.log(`John's BMI (${johnBMI}) is higher than Mark's (${johnBMI})!`);
}

// TYPE CONVERSION AND COERCION
/*
Type conversion: doing it manually
Type coercion: JS does it automatically
*/

// type conversion
const inputYear = '1991';
const someInt = 37;
console.log(typeof inputYear);
console.log(Number(inputYear));
console.log(typeof someInt);
console.log(typeof String(someInt));

// type coercion - whenever an operator is dealing with values of different types
// doesn't do it for the +  operator, does it for everything else
console.log('23' > '18');
console.log('23' * '2');

// TURTHY AND FALSY VALUES
/* FALSY - values that are not exactly false, but will become FALSE when we try to convert them to a boolean. There are 5 falsy values:
- 0
- ""
- undefined
- NULL
- NaN

Everything else are TRUTHY values.
*/

console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean({}));

const money = 0;
if (money) {
	console.log('Smth');
} else {
	console.log('Smth else.');
}

/*
let favNumber = Number(prompt("what's your fav number?"));
favNumber === 23
	? console.log('your fav num is 23!')
	: console.log('your fav number is not 23.');*/

// LOGICAL OPERATORS
const hasGoodVision = true;
const hasWallet = false;

console.log(hasGoodVision && hasWallet);
console.log(hasGoodVision || hasWallet);
console.log(!hasGoodVision);

//  CODING CHALLENGE #3
/*
There are two gymnastics teams, Dolphinsand Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy.

Test data:§Data 
1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus2: Dolphins score 97, 112 and101. Koalas score 109, 95 and 106
*/

// calculate average score for each team
// Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
//Bonus1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint:Use a logical operator to test for minimum score, as well as multiple else-if blocks
//Bonus2:Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// solve this challenge using filter, map reduce
// const dolphins = [96, 108, 89];
// const koalas = [88, 91, 110];

const dolphins = [97, 112, 101];
const koalas = [109, 95, 106];

const dolphinsAvg = dolphins.reduce((a, b) => a + b) / dolphins.length;
const koalasAvg = koalas.reduce((a, b) => a + b) / koalas.length;
console.log(dolphinsAvg, koalasAvg);

// include a draw
if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
	console.log('Dolphins Win!');
} else if (
	dolphinsAvg === koalasAvg &&
	dolphinsAvg >= 100 &&
	koalasAvg >= 100
) {
	console.log("It's a draw!");
} else if (dolphinsAvg >= 100 && koalasAvg >= 100 && dolphinsAvg < koalasAvg) {
	console.log('Koalas win!');
} else {
	console.log('No team has an avg score higher than 100.');
}

// compare the avg scores and determine the winner
// dolphinsAvg > koalasAvg
// 	? console.log('Dolphins win.')
// 	: console.log('koalas win');

const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// MAP FILTER SORT REDUCE forEach

// classic for loop
// for (let i = 0; i < companies.length; i++) {
// 	console.log(companies[i]);
// }

// forEach - synchronous
// companies.forEach((company) => console.log(company.name));

// companies.forEach(function (current, index, array) {
// 	console.log(current);
// 	console.log(index);
// 	console.log(array);
// 	console.log('\n');
// });

// filter
// basic for loop for ages greater than smth

let ageFilt = [];
for (let i = 0; i < ages.length; i++) {
	if (ages[i] >= 21) {
		ageFilt.push(ages[i]);
	}
}

// console.log(ageFilt);

// using FILTER
const ageFilter = ages.filter(function (age) {
	if (age >= 21) {
		return true;
	}
});

// console.log(ageFilter);

// using arrow function with FILTER
const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

// filter retail companies
const retailComp = companies.filter(
	(company, index) => company.category === 'Retail'
);
// console.log(retailComp);

// all companies that started in the 80's
const compEighties = companies.filter(
	(company) => company.start < 1990 && company.start >= 1980
);
// console.log(compEighties);

// companies that lasted more than 10 years
const compTen = companies.filter((company) => company.end - company.start > 10);
// console.log(compTen);

// USING MAP
// create array of only the company names
const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// square the ages in a new array
const ageSq = ages.map((age) => age ** 2);
// console.log(ageSq);
//
// sqrt the ages and then double them
const agesSquare = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(agesSquare);

// USING SORT
// sort companies by start year

const sortedComp = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
// console.log(sortedComp);

// sort companyes by years in business
const sortComp = companies.sort((a, b) =>
	a.end - a.start > b.end - b.start ? 1 : -1
);
// console.log(sortComp);

// sort the ages in ascending order
const ageSort = ages.sort((a, b) => a - b);

// sort ages in descending order
const ageSortDesc = ages.sort((a, b) => b - a);

// console.log(ageSort);

// USING REDUCE
// add all the ages together
const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// total years for all companies (range)
const ageComp = companies.reduce(
	(total, comp) => total + (comp.end - comp.start),
	0
);
// console.log(ageComp);

// use more together
const combined = ages.map((age) => age * 2).filter((age) => age >= 35);
// console.log(combined);
