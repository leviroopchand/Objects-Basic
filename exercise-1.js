/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

let pho99rest = {
    name: "Pho 99",
    cuisines: ["Vietnamese", "Vegetarian"],
    numberOfStars: 4,
    favorited: true,
}

pho99rest.address = '12122 Sherman Way';
pho99rest.zipcode = 91605;
pho99rest.acceptsReservations = false;

pho99rest.numberOfStars = 5;
pho99rest.favorited = false;
pho99rest.cuisines.push ("Pescatarian")

function retrieveProperty (obj,key){
   if (key in obj) {
    return obj[key]
   } else {
    return "The information you requested does not exist."
   }
}

console.log(retrieveProperty(pho99rest, 'cuisines'));
console.log(retrieveProperty(pho99rest, 'favorited'));
console.log(retrieveProperty(pho99rest, 'name'));
console.log(retrieveProperty(pho99rest, 'nickname'));
console.log(retrieveProperty(pho99rest, 'state'));