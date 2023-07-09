'use strict';
console.clear();

//Variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'K';
let job = 'U';
const year = 96;

//Functions
console.log(addDecl);
console.log(addExpr);
console.log(addExpr);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
