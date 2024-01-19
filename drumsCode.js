console.log("comment 0");

function removeTransition(e) {
  console.log(e);
  //if (e.propertyName !== "transform") return; //  checks if represents the name of the CSS property that has completed its transition.
  e.target.classList.remove("playing"); // e.target refers to the pressed element
  console.log("comment 1");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  console.log("comment 2");
}

const keys = Array.from(document.querySelectorAll(".key")); // creates array with all keys
keys.forEach(
  (key) => key.addEventListener("transitionend", removeTransition) // when a css element has changed
);
console.log("comment 4");
window.addEventListener("keydown", playSound); // when a key is pressed
console.log("comment 5");
