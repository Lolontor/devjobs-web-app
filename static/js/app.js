const toggleBtn = document.querySelector('.js_toggle_btn');
const body = document.body;
const cards = document.querySelectorAll('.job_card');
const titlebar = document.querySelector('.form');

// Function to toggle dark mode
const toggleDarkMode = () => {
  const isDarkMode = body.classList.contains('dark');
  // Toggle the dark mode classes
  body.classList.toggle('dark', !isDarkMode);
  cards.forEach((card) => {
    card.classList.toggle('dark', !isDarkMode);
  });
  titlebar.classList.toggle('dark', !isDarkMode);
  // Save the dark mode preference to localStorage
  localStorage.setItem('darkMode', !isDarkMode);
};

// Event listener for toggling dark mode on button click
toggleBtn.addEventListener('click', () => {
  toggleDarkMode();
  toggleBtn.classList.toggle('active');
});

// Check and set the initial dark mode state on page load
document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
  if (isDarkMode) {
    toggleDarkMode();
    toggleBtn.classList.toggle('active');
  }
});


const filterBtn = document.querySelector(".js-filter-btn");
const modal = document.querySelector(".search-modal");
const overlay = document.querySelector(".overlay");

filterBtn.addEventListener('click', displayModal);

// display modal function 
function displayModal() {
  console.log('hello modal');
  overlay.classList.add('show');
  modal.classList.remove('hidden');

};

overlay.addEventListener('click', () => {
  overlay.classList.remove('show');
  modal.classList.add('hidden');
});