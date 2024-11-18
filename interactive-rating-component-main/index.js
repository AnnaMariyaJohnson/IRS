// Select necessary elements from the DOM
const ratingButtons = document.querySelectorAll('.btn');
const submitButton = document.getElementById('submit');
const thankYouSection = document.querySelector('.thank-you');
const ratingComponent = document.querySelector('.main-container');
const selectedRatingDisplay = document.getElementById('rating');
const rateAgainButton = document.getElementById('rate-again');

let lastSelectedButton = null; // To store the last selected button

// Add event listeners to each rating button
ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Reset styles of all buttons
    ratingButtons.forEach(btn => {
      btn.classList.remove('selected', 'previous');
      btn.style.backgroundColor = 'hsl(213, 20%, 22%)';
      btn.style.color = '#fff';
    });

    // Style the current button as selected
    button.classList.add('selected');
    button.style.backgroundColor = 'hsl(25, 97%, 53%)';

    // Style the last selected button as previous
    if (lastSelectedButton && lastSelectedButton !== button) {
      lastSelectedButton.classList.add('previous');
      lastSelectedButton.style.backgroundColor = '#fff';
      lastSelectedButton.style.color = 'hsl(213, 19%, 18%)';
    }

    // Update last selected button reference
    lastSelectedButton = button;
  });
});

// Handle submit button click
submitButton.addEventListener('click', () => {
  // Check if a rating is selected
  const selectedRating = document.querySelector('.btn.selected');
  if (selectedRating) {
    // Show selected rating in the thank-you message
    selectedRatingDisplay.textContent = selectedRating.textContent;

    // Hide the rating component and show thank-you message
    ratingComponent.classList.add('hidden');
    thankYouSection.classList.remove('hidden');
  } else {
    alert("Please select a rating before submitting.");
  }
});

// Handle "Rate Again" button click
rateAgainButton.addEventListener('click', () => {
  // Show rating component and hide thank-you message
  ratingComponent.classList.remove('hidden');
  thankYouSection.classList.add('hidden');

  // Reset rating button styles
  ratingButtons.forEach(button => {
    button.classList.remove('selected', 'previous');
    button.style.backgroundColor = 'hsl(213, 20%, 22%)';
    button.style.color = '#fff';
  });

  lastSelectedButton = null; // Clear last selected reference
});
