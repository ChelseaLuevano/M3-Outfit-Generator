// Assignment code here

function generateOutfit () {
  let outfit = "Outfit details here";
  console.log("Outfit details here");
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
