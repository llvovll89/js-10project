const btn = document.querySelector('.btn-hamberger');
const nav = document.querySelector('nav');

btn.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    btn.classList.toggle('toggle');
}) 