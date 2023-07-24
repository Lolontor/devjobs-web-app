const toggleBtn = document.querySelector('.js_toggle_btn'),
  company_detail = document.querySelector('.company_details'),
  job_requirement = document.querySelector('.job_requirement'),
  body = document.body,
  h3 = document.querySelectorAll('h3'),
  footer = document.querySelector('footer');

toggleBtn.addEventListener('click', () => {
  company_detail.classList.toggle('dark');
  job_requirement.classList.toggle('dark');
  footer.classList.toggle('dark');
  body.classList.toggle('dark');
  h3.forEach((h) => {
    h.classList.toggle('dark');
  });
  console.log('hello');

});

toggleBtn.addEventListener('click', () => toggleBtn.classList.toggle('active'));