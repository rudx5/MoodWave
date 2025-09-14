let selectedRating = null;

const ratingButtons = document.querySelectorAll(".circle");
const nextButton = document.getElementById("nextButton");

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    selectedRating = button.getAttribute("data-value");
    nextButton.disabled = false;
  });
});

nextButton.addEventListener("click", () => {
  if (selectedRating) {
    // Save rating in localStorage to use in emotions.html if needed
    localStorage.setItem("moodRating", selectedRating);
    window.location.href = "emotions.html";
  }
});
