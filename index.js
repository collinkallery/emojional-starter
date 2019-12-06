var happyButton = document.querySelector(".happy");
var sillyButton = document.querySelector(".silly");
var sadButton = document.querySelector("crying");
var inputField = document.querySelector(".message");

var sillyQuotes = ["Interesting response.", "Sounds ...good?", "Me too."]
var sadQuotes = ["Do you want to talk?", "Keep your head up!", "We can cry together"]

function happyResponses() {
  // When a user clicks the happy emoji, I want it to cycle through the happyQuotes array at random.
  var happyQuotes = ["You go!", "Your smile just cheered me up!", "YAY!"];
  inputField.innerText = happyQuotes[0];
}

happyButton.addEventListner("click", happyResponses);
// sillyButton.addEventListner("click", sillyResponses);
// sadButton.addEventListner("click", sadResponses);
