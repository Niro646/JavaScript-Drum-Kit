window.addEventListener("keydown", playSound); // when a key is pressed

function removeTransition(e) {
  //if (e.propertyName !== "transform") return; //  checks if represents the name of the CSS property that has completed its transition.
  e.target.classList.remove("playing"); // e.target refers to the pressed element
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function playSoundTouch(e) {
  const touchAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const touchKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key")); // creates array with all keys
keys.forEach(
  (key) => key.addEventListener("transitionend", removeTransition) // when a css element has changed
);

keys.forEach((key) => {
  key.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Prevent default touch behavior (e.g., scrolling)
    playSoundTouch(key);
  });
});
