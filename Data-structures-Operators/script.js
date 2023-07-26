'use strict';
console.clear();

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    time = '20:00',
    address,
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '21:00',
  address: 'USA',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'USA',
  starterIndex: 2,
});

//Nested objects
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

//Mutating variables
// let a = 99;
// let b = 11;

// const obj = { a: 4, b: 6, c: 0 };
// ({ a, b } = obj);
// console.log(a, b);

// const { name, openingHours, mainMenu } = restaurant;
// console.log(name, openingHours, mainMenu);

// const {
//   name: restaurantName,
//   openingHours: open,
//   mainMenu: menu1,
// } = restaurant;
// console.log(restaurantName, open, menu1);

//Default values
// const { menu = [], openingHours: hours = [] } = restaurant;
// console.log(menu, hours);

// const arr = [2, 3, 4];
// const [a, b, c] = arr;
// console.log(arr);

// //Switching variables
// let [first, second] = restaurant.categories;
// console.log(first, second);
// [first, second] = [second, first];
// console.log(first, second);

// //Receive 2 return values from a function
// const [starterOrder, mainOrder] = restaurant.order(2, 0);
// console.log(starterOrder, mainOrder);

// //Nested destructuring
// const nested = [5, 3, 4, 2, [5, 2, 4], 6];
// const [l, , , , [k, h, m]] = nested;
// console.log(l, k, h, m);

// //Default values

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
