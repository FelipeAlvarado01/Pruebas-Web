/*const leftButton = document.querySelector("#scrolling-button_left");
const rightButton = document.querySelector("#scrolling-button_right");
const worksContent = document.querySelector("#scrolling-container");

leftButton.addEventListener("click", function(){
    worksContent.scrollLeft -= 800; //Mueve las tarjetas de trabajo hacia la izquierda
    console.log("presionando boton 1");
});

rightButton.addEventListener("click", function(){
    worksContent.scrollLeft += 800;//Mueve las tarjetas de trabajo hacia la derecha
    console.log("presionando boton 2");
});*/

const scrollingCards = document.querySelectorAll("#scrolling-card");
const leftButton = document.querySelector("#scrolling-button_left");
const rightButton = document.querySelector("#scrolling-button_right");
const scrollingContainer = document.querySelector("#scrolling-container");
let current = 3;
const cardWidth = scrollingCards[0].offsetWidth; //obtiene el ancho de las tarjetas para centrarlas en la pantalla

console.log(cardWidth);

const offset = -current * cardWidth + (window.innerWidth / 2) - (cardWidth / 2);
scrollingContainer.style.transform = `translateX(${offset}px)`;

leftButton.addEventListener('click', function () {
    moveTo(current - 1);
    //worksContent.scrollLeft -= 400;
});
rightButton.addEventListener('click', function () {
    moveTo(current + 1);
    //worksContent.scrollLeft += 400;
});

function moveTo(index) {
    if (index < 0) {
        current = scrollingCards.length - 1; //para pasar del 0 al 6
    } else if (index >= scrollingCards.length) {
        current = 0; //para pasar del 6 al 1
    } else {
        current = index;
    }

    const offset = -current * cardWidth + (window.innerWidth / 2) - (cardWidth / 2);
    scrollingContainer.style.transform = `translateX(${offset}px)`;

    scrollingCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === current) {
            card.classList.add('active');
        }
    });
}
