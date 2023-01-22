const video = document.getElementById("video");
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector('.modal');
const botaoFecharModal = document.querySelector(".fechar-modal");
const srcVideo = video.src;

function altModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    altModal();
    video.setAttribute("src", srcVideo)
});

botaoFecharModal.addEventListener("click", () => {
    altModal();
    video.setAttribute("src", "")
});





