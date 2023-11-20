// Declare displayRating variable
let displayRating;

const buttons = document.querySelectorAll(".number");
const submitButton = document.getElementById("submit-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Confirm that the button clicks
    // console.log(button.textContent);

    // Assign content of the button to the displayRating variable
    displayRating = button.textContent;

    // console.log(displayRating);

    // add styling to the button when clicked on desktop
    button.classList.add("clicked");
  });
});

const submitRating = () => {
  // Assign the number from the button to the userSelection variable
  const userSelection = displayRating;

  // Redirect to rating.html with the selected rating as your query parameter
  window.location.href = `rating.html?rating=${userSelection}`;
};

//rating.html
document.addEventListener("DOMContentLoaded", () => {
  // Get the rating from the query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const rating = urlParams.get("rating");

  // Update the span with the retrieved rating
  const span = document.getElementById("user-selection");

  span.textContent = rating;
});
