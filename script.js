// Assignment code here

let topOptions = ['shirt', 'blouse','tank top', 'blazer'];
let bottomOptions = ['shorts', 'pants', 'skirt', 'skort', 'leggings'];
let shoesOptions = ['sandals', 'boots', 'heels', 'sneakers'];
let accessoryOptions = ['necklace', 'earrings', 'bracelet', 'hat', 'scarf', 'sunglasses', 'ring', 'belt'];

// Random Number between 0 - length of array
function getRandom(arr) {
  return arr[Math.floor(Math.random()* arr.length)]
}

function generateOutfit () {
  let outfit = "";
  let possibleChoices = [];
  console.log("Outfit details here");

// Outfit Criteria

  let userTop = confirm ("Do you want us to pick out a top? If yes, then click 'ok'; Otherwise, click 'cancel'.");

  let userBottom = confirm ("Do you want us to pick out a bottom? If yes, then click 'ok'; Otherwise, click 'cancel'.");

  let userShoes = confirm ("Do you want us to pick out shoes? If yes, then click 'ok'; Otherwise, click 'cancel'.");

  let userAccessoryCount = prompt("How many accessories do you want to wear? Enter a number between 1 and 5. ");

  
  while ((userAccessoryCount < 1) || (userAccessoryCount > 5) || isNaN(userAccessoryCount)) {
  let userAccessoryCount = prompt("How many accessories do you want to wear? Enter a number between 1 and 5. ");
  }

  let outfitLength = userAccessoryCount += 3;

  if (userTop) {
    possibleChoices = [...possibleChoices, ...topOptions];
    outfit += getRandom(topOptions);
  }

  if (userBottom) {
    possibleChoices = [...possibleChoices, ...bottomOptions];
    outfit += getRandom(bottomOptions);
  }

  if (userShoes){
    possibleChoices = [...possibleChoices, ...shoesOptions];
    outfit += getRandom(shoesOptions);
  }
  
  if (userAccessoryCount){
    possibleChoices = [...possibleChoices, ...accessoryOptions];
    outfit += getRandom(accessoryOptions);
  }

  for (let i =outfit.length; i < outfitLength; i++) {
     outfit += getRandom(possibleChoices) 
  }   

  console.log(userAccessoryCount)

  // return outfit.split('').join(' ');
  return outfit;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writeOutfit() {
  let outfit = generateOutfit();
  let outfitText = document.querySelector("#outfit");

  outfitText.value = outfit;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writeOutfit);
