/* Função que muda a cor do celular */

function imgSlider (e) {
    document.querySelector('#phone').src = e
}

/* Função que muda o circulo do background */

function circleChange(color) {
    const circle = document.querySelector('.circle')
    circle.style.background = color
}