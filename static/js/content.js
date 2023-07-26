const toggleBtn = document.querySelector('.js_toggle_btn'),
  company_detail = document.querySelector('.company_details'),
  job_requirement = document.querySelector('.job_requirement'),
  company_info = document.querySelector('.company_info'),
  body = document.body,
  h3 = document.querySelectorAll('h3'),
  footer = document.querySelector('footer');

// toggle dark mode function
const toggleDarkMode = () => {
  const isDarkMode = body.classList.contains('dark');
  // Toggle the dark mode classes
  company_detail.classList.toggle('dark', !isDarkMode);
  job_requirement.classList.toggle('dark', !isDarkMode);
  footer.classList.toggle('dark', !isDarkMode);
  body.classList.toggle('dark', !isDarkMode);
  company_info.classList.toggle('dark', !isDarkMode);
  h3.forEach((h) => {
    h.classList.toggle('dark', !isDarkMode);
  });
  // saving dark mode preference to localStorage
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
