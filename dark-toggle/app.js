const body = document.querySelector('body');
const btn = document.querySelector('.btn-click');
const box = document.querySelector('.btn');
const title = document.querySelector('.title');

btn.addEventListener('click', () => {
    btn.classList.toggle('toggle');
    body.classList.toggle('active');
    title.classList.toggle('active');
    box.classList.toggle('active');
})