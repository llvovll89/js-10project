const container = document.querySelector('.container');
const img = document.querySelector('img');
const width = container.style.width;
const height = container.style.height;

container.addEventListener('mousemove', (e) => {
    const x = e.clientX - e.target.offsetTop;
    const y = e.clientY - e.target.offsetLeft;
    // if(y > 0){
    //    img.style
    // } 
    // console.log(x,y);

    img.style.transformOrigin = `${x - 125}px ${y + 120}px`;
    img.style.transform = 'scale(2)';
});

container.addEventListener('mouseleave', () => {
    img.style.transformOrigin = 'center center';
    img.style.transform = 'scale(1)';
})