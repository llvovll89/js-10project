const createRain = () => {
    const body = document.querySelector('body');
    const vanana = document.createElement('div');
    vanana.classList.add('vanana');
    vanana.textContent = "🍌"
    body.appendChild(vanana);

    vanana.style.left = Math.random() * 100 + 'vw';
    vanana.style.animationDirection = Math.random() * 2 + 3 + 's';

    setTimeout(() => {
        vanana.remove();
    }, 5000);
}

const vananaInterval = setInterval(createRain, 1000);