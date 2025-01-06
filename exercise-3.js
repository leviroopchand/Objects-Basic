// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};


// function printPizzaPlace (obj) {
//   for (let [key, value] of Object.entries(obj)) {

//     console.log(`${key}: ${value}`);

//   }
// }

function printPizzaPlace (obj) {
    for (let key in obj) {
      console.log(key, obj[key])
    }
}

console.log(printPizzaPlace (dominos));

function toppingsPriceRange (toppings) {
  let toppingPrices = [];
  for (let value in toppings) {
    toppingPrices.push(toppings[value]);
  }
  console.log('$' + Math.min(...toppingPrices) + ' to $' + Math.max(...toppingPrices));
}

console.log(toppingsPriceRange (dominos["pizzaToppings"]))