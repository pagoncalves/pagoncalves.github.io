//'use strict';
let time = 3000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#imgtopo img")
max = images.length

function proximaImagem() {

    images[currentImageIndex].classList.remove("selec")

    currentImageIndex++

    if (currentImageIndex >= max){
        currentImageIndex = 0
}
    images[currentImageIndex].classList.add("selec")
}

function inicio() {
    setInterval(() => {
        // troca de image
        proximaImagem()
    }, time)
}
window.addEventListener("load", inicio)
