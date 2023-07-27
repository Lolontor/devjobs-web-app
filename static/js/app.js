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

document.addEventListener('DOMContentLoaded', () => {
  const contentdiv = document.querySelector('.js-content');
  console.log('hello there button clicked');

  // Event delegation for the Load More button
  document.addEventListener('click', (event) => {
    const loadMoreBtn = event.target.closest('.js-load-more-btn');
    if (loadMoreBtn) {
      loadMoreBtn.classList.add('hidden');
      console.log('hello, load more condition true');
      fetch('/loadmore/')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Appending new jobs to the content div
          for (let job of data) {
            const jobCard = createJobCard(job);
            // Create a temporary element to convert the jobCard string to a DOM node
            const tempElement = document.createElement('div');
            tempElement.innerHTML = jobCard;
            contentdiv.appendChild(tempElement.firstChild); // Append the first child (the jobCard node)

          }
        })


        .catch((error) => {
          console.log('could not make it');
          console.error('Error fetching more data', error);
        });
    }
  });
});

// Function to create a job card
function createJobCard(job) {
  let jobCard = `<a href="content/${job.id}">
    <div class="job_card js_card">
      <img
        src="${job.logo}"
        alt=""
        style="background-color : ${job.logoBackground}"
      />
      <div class="description">
        <span class="time_posted">${job.postedAt}</span>
        <span>&#8226;</span>
        <span class="job_description">${job.contract}</span>
      </div>
      <p class="job_title large_bold_text">${job.position}</p>
      <p class="company">${job.company}</p>
      <p class="country">${job.location}</p>
    </div>
  </a>`;
  return jobCard;
};
