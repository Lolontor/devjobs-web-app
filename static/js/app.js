const toggleBtn = document.querySelector('.js_toggle_btn'),
  body = document.body,
  cards = document.querySelectorAll('.job_card'),
  titlebar = document.querySelector('.form');
  

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  cards.forEach((card) => {
    card.classList.toggle('dark');
  });
  titlebar.classList.toggle('dark');
 
});

toggleBtn.addEventListener('click', () => toggleBtn.classList.toggle('active'));










