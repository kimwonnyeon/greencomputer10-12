// script 링크에 defer 사용안할 시
// window.addEventListener("load"()=>{
//     이 안에 자바스크립트 작성
// });
/** @type {HTMLElement | null} */
const openBtn = document.querySelector("#open");
/** @type {HTMLElement | null} */
const detail = document.querySelector("#detail");
// console.log(open);
openBtn.addEventListener("click", () => {
  detail.style.display = "block";
  openBtn.style.display = "none";
});
/** @type {HTMLElement | null} */
const closeBtn = document.querySelector("#close");
closeBtn.addEventListener("click", () => {
  detail.style.display = "none";
  openBtn.style.display = "block";
});
