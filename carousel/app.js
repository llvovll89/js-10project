const imgBox = document.getElementById('imgbox');
const imgs = document.querySelectorAll('#imgbox img');
console.log(imgs);

let index = 0;

const carousel = () => {
    index++;

    if(index > 3) {
        index = 0;
    }

    imgBox.style.transform = `translateX(${-index * 400}px)`;
}

const bgInterval = setInterval(carousel, 2000);

