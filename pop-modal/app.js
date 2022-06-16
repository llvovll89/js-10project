const openBtn = document.querySelector('.open');
const modalContainer = document.querySelector('.modal-container');
const desc = modalContainer.querySelector('.desc');
const closeBtn = document.querySelector('.close');

// Event

openBtn.addEventListener('click', () => {
    const qna = confirm('당신은 성인입니까?');
    modalContainer.style.display = "block";
    if (qna){
    desc.innerText = `성인이면 입장 가능합니다.`
    } else {
        alert('입장불가!');
        desc.innerText = '입장 불가!'
    }
})

closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
})