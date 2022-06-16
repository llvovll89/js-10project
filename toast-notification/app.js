const content = document.querySelector(".content");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    eventHandler();
});

function eventHandler() {
  // createElement
  const items = document.createElement("li");
  const who = prompt('누구신가요~?', '이름 입력하세요.');

  if(who === '강아지' || who === '고양이'){
    alert('또 동물이니!?');
  }
  
  content.appendChild(items);
  items.classList.add('item');
  items.innerText = `안녕하세요 저는 ${who} 입니다.`;

  setTimeout(() => {
    items.remove();
  }, 3000);
}
