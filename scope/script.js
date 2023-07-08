'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    const output = `${name}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `You are, ${name}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //   output = `NEW OUTPUT`; //perraso teve esanti outputa
    }
    // add(2, 3); //error
  }
  printAge();

  return age;
}

const name = 'Karolis';
calcAge(1996);
