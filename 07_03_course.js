console.clear();

const country = 'Lietuva';
const continent = 'Europe';
let population = 2800000;
const isIsland = false;
const language = 'Lietuviu';

console.log(country);
console.log(continent);
console.log(population);
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// country = 'Anglija';
population = 2800001;
console.log(population);

let half = population / 2;
console.log(half);
population += 1;
console.log(population);

let finland = 6000000;
let average = 33000000;

if (finland > population) {
  console.log(true);
} else {
  console.log(false);
}

if (average < population) {
  console.log(true);
} else {
  console.log(false);
}

let description0 =
  country +
  ' is in ' +
  continent +
  ' and its ' +
  population +
  ' people speak ' +
  language +
  '.';

let description = `${country} is in ${continent} and its ${population} people speak ${language}.`;

console.log(description);
console.log(description0);

if (population > average) {
  console.log(`Lithuania population is above average`);
} else {
  console.log(`Lithuania population is ${population} below average`);
}

//CHALLENGE #4 of js fundamentals part 1

const bill = 40;

let tip = 0;
let pay = '';

bill <= 300 && bill >= 50
  ? (tip = (bill * 15) / 100)
  : (tip = (bill * 20) / 100);

pay = `The bill was ${bill}, the tip was ${tip}, and the total value ${
  bill + tip
}`;

console.log(pay);

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIJohn);
console.log(BMIMark);

let markHigherBMI =
  BMIMark > BMIJohn
    ? `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`
    : `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`;

console.log(markHigherBMI);

let averageDolphins = (96 + 108 + 89) / 3;
let scoreDolphins = averageDolphins;

let averageKoalas = (88 + 91 + 110) / 3;
let scoreKoalas = averageKoalas;

if (scoreDolphins === scoreKoalas) {
  console.log(`Both win the trophy`);
} else if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the trophy`);
} else {
  console.log(`Koalas win the trophy`);
}
