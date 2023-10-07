// Selectors

//? Resimler
const rockImg = document.getElementById("rock");
const paperImg = document.getElementById("paper");
const scissorImg = document.getElementById("scissor");

//? Seçilen Eleman Taşıyıcıları
const yourChoiceDiv = document.getElementById("your-choice");

// Variables
let image = document.createElement("img");

// Event Listeners
rockImg.addEventListener("click", () => {
  image.src = "./assets/rock.png";
  image.alt = "rock";
  yourChoiceDiv.appendChild(image);
});
paperImg.addEventListener("click", () => {
  image.src = "./assets/paper.png";
  image.alt = "paper";
  yourChoiceDiv.appendChild(image);
});
scissorImg.addEventListener("click", () => {
  image.src = "./assets/scissor.png";
  image.alt = "scissor";
  yourChoiceDiv.appendChild(image);
});

// Functions
