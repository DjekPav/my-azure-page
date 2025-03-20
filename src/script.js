// Сообщение при нажатии кнопки
function showMessage() {
    alert("Yahuuuuu! 🚀");
}

// Эффект параллакса при движении мыши
document.addEventListener("mousemove", (event) => {
    const container = document.querySelector(".container");
    let x = (window.innerWidth / 2 - event.clientX) / 20;
    let y = (window.innerHeight / 2 - event.clientY) / 20;
    container.style.transform = `translate(${x}px, ${y}px)`;
});
