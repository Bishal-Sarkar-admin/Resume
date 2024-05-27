const titles = ["I am a Web Developer", "I am a Software Engineer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 160; // Adjust to make typing slower or faster
const pauseTime = 2000; // Pause before changing to the next title
const jobTitleElement = document.getElementById("job-title");

function typeLetter() {
  if (charIndex < titles[index].length) {
    jobTitleElement.textContent += titles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeLetter, typingSpeed);
  } else {
    setTimeout(() => {
      index = (index + 1) % titles.length; // Move to the next title
      charIndex = 0;
      jobTitleElement.textContent = ""; // Clear text content before typing the next title
      typeLetter(); // Start typing the next title
    }, pauseTime);
  }
}

typeLetter(); // Start typing the first title immediately

function toggleFeedbackForm(event) {
  event.preventDefault();
  document.querySelector("#opinion").classList.toggle("active");
}
