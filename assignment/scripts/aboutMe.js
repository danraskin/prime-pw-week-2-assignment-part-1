// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name
let firstName = 'Dan';

// 2 - Create a second variable called `lastName` and assign it the value of your last name
let lastName = 'Raskin';
// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)
let fullName = firstName + ' ' + lastName;
// 4 - Console log the value of `fullName`
console.log(fullName);
// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.
let numberTamales = Math.floor(Math.random()*25);
// 6 - Console log this sentence, adding in the variables you created above: 
console.log("I, "+ fullName + ", am an avid consumer of tamales, and just today I have consumed " + numberTamales + " of them. YUM!");
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)
let adventurous = prompt("Are you feeling adventurous? Please type 'yes' or 'no'");
if (adventurous == 'yes') {
    adventurous = true;
} else {
    adventurous = false;
}
// 8 - Create a variable named `food`, and set its value to a string of your favorite food
let food = "smoked fish";
// 9 - Create a variable called `pets` and set it to the value of the number of pets you have
let pets = Number(prompt("How many pets do you have? Be honest, please. There is a MAXIMUM!"));
alert("Listen, about that. I need you to take care of my two bearded dragons for the week, okay?")
// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has
let friendsPets = 4;
// 11 - Add two pets to your `pets` variable
pets += 2;
// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice
allowedPets = 4;
// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"
if(adventurous == true){
    console.log("Adventures in food and life are mandatory for a full experience");
} else{
    console.log("I guess you could sit there keeping the kiddie pool warm... loser.");
}

// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"
if(adventurous == true && numberTamales <= 5){
    console.log("Keep packing 'em in, buddy!");
} else{
    console.log("Hoo boy, why don't we reign in it today?");
}

// 15 - Write a conditional that console logs "I can have more pets!" 
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

if(pets < allowedPets){
    console.log(`You've only got ${pets} animal companions? Bring on the PETS, baby!`);
} else if(pets == allowedPets){
    console.log(`${pets} pets... Don't you think your zoo is properly calibrated to your petty emotional needs and current financial means? No more pets for you.`);
} else{
    console.log(`Nooooo ${pets} is way too many pets!! With the lizards, this just can't stand. You'll have to get rid of ${Number(pets - allowedPets)} of the ones you brought, I am sorry. The incinerator is in the basement.`);
}

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios. 
// console.log `mostPets` after the conditional has run.

if(pets > friendsPets){
    let mostPets = pets;
    console.log(`You have ${mostPets}, which is ${mostPets-friendsPets} more pets than your friend.`);
} else if (pets < friendsPets) {
    let mostPets = friendsPets;
    console.log(`Your friend has ${mostPets}, which is ${mostPets-pets} more than you have.`);
} else {
    let mostPets = pets;
    console.log(`It's really not a competetion. You each have ${mostPets} pets. Good for you.`);
}
// another way to output the higher number is:
// let mostPets = Math.max(pets,friendsPets);
// but, I don't know if this comparison method would allow me to log the above messages with less script.
//

// 17 - Write a *switch* statement that logs:
//      "First is the worst" if your lucky number is 1
//      "Second is the best" if your lucky number is 2
//      "Third is the one with the polka dot dress" if your lucky number is 3
//      Otherwise, log "Luck is what happens when preparation meets opportunity"
//      You'll need to research how to use switch statements!

switch (true){
    case (numberTamales <= 5):
        console.log(`${numberTamales} is a healthy amount to eat every single day of your precious, beautiful life. Keep it up!`);
        break;
    case (numberTamales > 5 && numberTamales <= 10):
        console.log(`${numberTamales} is a lot. I'd recommend only eating this many once a week. Try and pull back`);
        break;
    case (numberTamales > 10):
        console.log(`STOP! ${numberTamales} is tooooooo many!`);
        break;
}

// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!

let message = (adventurous == true) ? "Adventures in food and life are mandatory for a full experience" : "I guess you could sit there keeping the kiddie pool warm... loser.";
console.log(message);

