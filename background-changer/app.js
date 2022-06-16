const bg = document.querySelector('.container');
const random = Math.floor(Math.random() * 10) + 1;

const bgCange = () => {
    bg.style.background = ranBg();  
}

const ranBg = () => {
    return `hsl(${random} , 100%, 50%)`;
}

const bgInterval = setInterval(bgCange, 1000);