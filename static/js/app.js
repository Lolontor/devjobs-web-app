const toggleBtn = document.querySelector('.js_toggle_btn'),
  body = document.body,
  cards = document.querySelectorAll('.job_card'),
  titlebar = document.querySelector('.form'),
  company_detail = document.querySelector('.company_details'),
  job_requirement = document.querySelector('.job_requirement'),
  footer = document.querySelector('footer');


toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  cards.forEach((card) => {
    card.classList.toggle('dark');
  });
  titlebar.classList.toggle('dark');
  company_detail.classList.toggle('dark');
  job_requirement.classList.toggle('dark');
  footer.classList.toggle('dark');
});

toggleBtn.addEventListener('click', () => toggleBtn.classList.toggle('active'));










