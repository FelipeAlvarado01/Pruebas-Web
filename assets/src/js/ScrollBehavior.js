const scrollingCards = document.querySelectorAll("#scrolling-card"); //Genera un arreglo
const bot = document.querySelectorAll("#dot");
const leftButton = document.querySelector("#scrolling-button_left");
const rightButton = document.querySelector("#scrolling-button_right");
const scrollingContainer = document.querySelector("#scrolling-container");
let cardSelected = 3;//La primera carta en mostrarse

centerCard(cardSelected );

leftButton.addEventListener('click', () => {
    moveTo(cardSelected - 1);
    console.log("Se mueve");
});
rightButton.addEventListener('click', () => {
    moveTo(cardSelected + 1);
});


//Estas lineas permiten centrar la tarjeta que se selecciona con le mouse
scrollingCards.forEach(card => {
    card.addEventListener('click', () => {
        cardSelected = Number(card.dataset.index);
        moveTo(cardSelected);
    });
});

bot.forEach(point =>{
    point.addEventListener('click',()=>{
        cardSelected =  Number(point.dataset.point);
        moveTo(cardSelected);
    });
});


function moveTo(index) {

    //iteracion entre cartas
    if (index < 0) {
        cardSelected = scrollingCards.length - 1; //para pasar del 0 al 6
    } else if (index >= scrollingCards.length) {
        cardSelected = 0; //para pasar del 6 al 1
    } else {
        cardSelected = index;
    }

    centerCard(cardSelected);

    //Se muestra el css del elemeno activo 
    scrollingCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === cardSelected) {
            card.classList.add('active');
        }
    });

    //Se muestras el css del elemento activo en este caso lo puntos abajo de la cartas
    bot.forEach((point, i) => {
        point.classList.remove('active');
        if (i === cardSelected) {
            point.classList.add('active');
        }
    });
}

function centerCard(cardToCenter) {
    const card = scrollingCards[cardToCenter];
    const containerCenter = window.innerWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2; //Se calcula a partir de la posicion izquierda de cada tarjeta y su mitad

    scrollingContainer.scrollLeft = cardCenter - containerCenter;
}
/*-----------------------------RESPONSIVE------------------------------------*/
const screenSize = screen.width;
//console.log(screenSize);
//console.log(screen.height);

if (screenSize <= 650) {
    const scrollingButtonContainer = document.querySelectorAll("#scrolling-button_container");

    scrollingButtonContainer.forEach((button) => {
        button.classList.add("visible");
    });
}

