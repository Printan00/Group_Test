// ฟังก์ชันเพื่อคลิกแล้วแสดงข้อความ
function toggleText(card) {
    card.classList.toggle('clicked');
}
function toggleMenu(){
    const menu  = document.querySelector("nav ul");
    menu.classList.toggle("active");
}