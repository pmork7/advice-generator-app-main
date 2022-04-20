let adviceIdElement = document.getElementById("advice-number");
let adviceTextElement = document.getElementById("advice-text");
let playButton = document.getElementById("playButton");



function formatAdvice(message) {
  let id = message["slip"].id;
  let adviceText = message["slip"].advice;
  console.log(id);
  console.log(adviceText);
  adviceIdElement.textContent = `ADVICE #${id}`;
  adviceTextElement.textContent = `“${adviceText}”`;
}

playButton.addEventListener("click", function() {
  fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data => formatAdvice(data));
})
