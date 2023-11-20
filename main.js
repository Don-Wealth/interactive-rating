const buttons = document.querySelectorAll('.number')
const button = document.querySelector("#button");
const displayRating = document.getElementById('#user-selection')
const submitButton = document.getElementById('#submit-button')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    displayRating.textContent = button.innerText
  })
})

const submitRating = () => {
  // get the selected rating
  const userSelection = document.getElementById('user-selection');
  const selectedRating = userSelection.textContent;

  // redirect to rating.html with the selected rating as a query parameter
  window.location.href = 'rating.html?rating=${selectedRating}';
} 


// rating.html

document.addEventListener('DOMContentLoaded', () => {
  // Get the rating from the query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const rating = urlParams.get('rating');

  // Update the span with the retrieved rating
  const userSelection = document.getElementById('user-selection');
  userSelection.textContent = rating;
});
