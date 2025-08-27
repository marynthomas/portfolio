
document.getElementById('themeToggle').addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
});
document.querySelector('.contact-form').addEventListener('submit', e=>{
  e.preventDefault(); alert('Thanks for reaching out!');
});
