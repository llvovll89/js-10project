const text = document.querySelector('.text');

const textAni = `안녕하세요 저는 김건호 입니다. 람쥐`;

let index = 0;

const autoWrite = () => {
    text.innerText = textAni.slice(0, index);
    index++;

    if (index > textAni.length){
        index = 0;
        return clearInterval(a);
    }
}

const a = setInterval(autoWrite, 100);