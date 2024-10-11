const scrollingCards = document.querySelectorAll("#scrolling-card"); //Genera un arreglo
const leftButton = document.querySelector("#scrolling-button_left");
const rightButton = document.querySelector("#scrolling-button_right");
const scrollingContainer = document.querySelector("#scrolling-container");
let cardSelected = 3;//La primera carta en mostrarse

centerCard();
leftButton.addEventListener('click', function () {
    moveTo(cardSelected - 1);
});
rightButton.addEventListener('click', function () {
    moveTo(cardSelected + 1);
});

function moveTo(index) {
    if (index < 0) {
        cardSelected = scrollingCards.length - 1; //para pasar del 0 al 6
    } else if (index >= scrollingCards.length) {
        cardSelected = 0; //para pasar del 6 al 1
    } else {
        cardSelected = index;
    }

    centerCard();

    scrollingCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === cardSelected) {
            card.classList.add('active');
        }
    });
}

function centerCard(){
    const card = scrollingCards[cardSelected];
    const containerCenter = window.innerWidth/ 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2; //Se calcula a partir de la posicion izquierda de cada tarjeta y su mitad

    scrollingContainer.scrollLeft = cardCenter - containerCenter;

    console.log("centro container: " + scrollingContainer.offsetWidth);
    console.log("centro de la carta: "+ cardCenter);
    console.log("posicion: "+ (cardCenter - containerCenter));
}
/*===============================================================================================*/
