const quotes = [
  // Rick and Morty
  {
    quote: '"Wubba lubba dub dub!"',
    character: "Rick",
    show: "Rick and Morty",
  },
  {
    quote:
      '"Nobody exists on purpose. Nobody belongs anywhere. We\'re all going to die. Come watch TV."',
    character: "Morty",
    show: "Rick and Morty",
  },
  {
    quote: '"Get Schwifty!"',
    character: "Principal Vagina",
    show: "Rick and Morty",
  },
  {
    quote: '"I\'m Mr. Meeseeks, look at me!"',
    character: "Mr. Meeseeks",
    show: "Rick and Morty",
  },
  {
    quote: '"Existence is pain!"',
    character: "Mr. Meeseeks",
    show: "Rick and Morty",
  },

  // Spongebob Squarepants
  {
    quote: "\"I'm ready, I'm ready!\"",
    character: "SpongeBob",
    show: "SpongeBob SquarePants",
  },
  {
    quote: '"Is mayonnaise an instrument?"',
    character: "Patrick",
    show: "SpongeBob SquarePants",
  },
  {
    quote: '"I wumbo, you wumbo, he-she-me wumbo."',
    character: "Patrick",
    show: "SpongeBob SquarePants",
  },
  {
    quote: "\"I'm ugly and I'm proud!\"",
    character: "SpongeBob",
    show: "SpongeBob SquarePants",
  },
  {
    quote: '"The inner machinations of my mind are an enigma."',
    character: "Patrick",
    show: "SpongeBob SquarePants",
  },

  // Chowder
  {
    quote: '"Radda radda!"',
    character: "Chowder",
    show: "Chowder",
  },
  {
    quote: '"I\'m not your boyfriend!"',
    character: "Chowder",
    show: "Chowder",
  },
  {
    quote: "\"I'm not weird, I'm just unique!\"",
    character: "Gazpacho",
    show: "Chowder",
  },
  {
    quote: '"Mung Daal, stop yer yappin\' and pass me the bacon!"',
    character: "Truffles",
    show: "Chowder",
  },
  {
    quote: '"Endive, I am not your lover! I am a chef!"',
    character: "Mung Daal",
    show: "Chowder",
  },

  // Bob's Burgers
  {
    quote: '"I\'m not ready to run through your hurdles."',
    character: "Bob",
    show: "Bob's Burgers",
  },
  {
    quote: '"Tina, you\'re a smart, strong, sensual woman."',
    character: "Bob",
    show: "Bob's Burgers",
  },
  {
    quote:
      "\"That's not a comforter; that's a blanket with delusions of grandeur.\"",
    character: "Linda",
    show: "Bob's Burgers",
  },
  {
    quote:
      '"You know, not all heroes wear capes. Sometimes they wear mustaches."',
    character: "Teddy",
    show: "Bob's Burgers",
  },
  {
    quote: '"I\'m sorry, but your opinion means very little to me."',
    character: "Louise",
    show: "Bob's Burgers",
  },
  {
    quote:
      '"Sometimes life is like this dark tunnel. You can’t always see the light at the end of the tunnel, but if you just keep moving, you will come to a better place."',
    character: "Uncle Iroh",
    show: "Avatar: The Last Airbender",
  },
  {
    quote:
      '"It is important to draw wisdom from many different places. If you take it from only one place, it becomes rigid and stale."',
    character: "Uncle Iroh",
    show: "Avatar: The Last Airbender",
  },
  {
    quote:
      '"In the darkest times, hope is something you give yourself. That is the meaning of inner strength."',
    character: "Uncle Iroh",
    show: "Avatar: The Last Airbender",
  },
  {
    quote:
      '"When we hit our lowest point, we are open to the greatest change."',
    character: "Aang",
    show: "Avatar: The Last Airbender",
  },
  {
    quote:
      '"Pride is not the opposite of shame, but its source. True humility is the only antidote to shame."',
    character: "Uncle Iroh",
    show: "Avatar: The Last Airbender",
  },
  // ... 25 more quotes
];

let newColor = document.body;
let newShow = document.getElementById("show");
let newSource = document.getElementById("source");
let newQuote = document.getElementById("quote");
let loadNewQuote = document.getElementById("newQuote");
let quote = quotes.quote;
let show = quotes.show;
let character = quotes.character;
let randomQuote;
// gets random quote based on number of quotes in array
function newRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
}
newRandomQuote();

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let randomColor = "rgb(" + red + "," + green + "," + blue + ")";

  return randomColor;
}
document.addEventListener("DOMContentLoaded", function () {
  // Simulate a click on the button to trigger the quote generation on page loading
  loadNewQuote.click();
});
loadNewQuote.onclick = function loadNewQuote() {
  randomQuote = newRandomQuote();
  newQuote.textContent = randomQuote.quote;
  newSource.textContent = randomQuote.character;
  newShow.textContent = randomQuote.show;
  newColor.style.backgroundColor = getRandomColor();
};

Date = new Date().getFullYear();

document
  .querySelector("footer")
  .insertAdjacentText("beforeend", " " + Date + " Made with ✨ by Tishaya");

// if Function to select background based on show from randomQuote var
// function newBackground(randomQuote) {
// if(quote.show = SB){
//  document.body.style.backgroundImage
// }
// if(quote.show = RM) {document.body.style.backgroundImage}

// }

// Gets random color for background for RGB
