/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 

function grabCategories (obj){
  return Object.keys(obj);
}

console.log(grabCategories(papaJohns))

console.log(grabCategories((papaJohns['pizzaToppings'])))

function verifyValues (obj, vals){
  if ((Object.values(obj)).length === vals) {
    return true
  }
  else {return false}
}

console.log(verifyValues (papaJohns, 8))
console.log(verifyValues (papaJohns, 9))


function getToppingsInfo (obj) {
  return Object.entries(obj['pizzaToppings']);
}

console.log(getToppingsInfo(papaJohns))

function printAD (topping, address, slogan) {
  console.log ("Welcome to Papa John's! We are located at " + address + ". This week, we are having a sale on " + topping + "  for $" + papaJohns.pizzaToppings[topping] + ". " + slogan)
}

console.log(printAD ("bacon", "122 Glendale Boulevard", "When it comes to pizza, We think BIG!"))

