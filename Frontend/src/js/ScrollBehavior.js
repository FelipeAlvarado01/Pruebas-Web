const scrollingCards = document.querySelectorAll("#scrolling-card"); //Genera un arreglo
const bot = document.querySelectorAll("#dot");
const leftButton = document.querySelector("#scrolling-button_left");
const rightButton = document.querySelector("#scrolling-button_right");
const scrollingContainer = document.querySelector("#scrolling-container");
let cardSelected = 3;//La primera carta en mostrarse

centerCard();

leftButton.addEventListener('click',  () => {
    moveTo(cardSelected - 1);
});
rightButton.addEventListener('click',  () => {
    moveTo(cardSelected + 1);
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

    centerCard();

    //Se muestra el css del elemeno activo 
    scrollingCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === cardSelected) {
            card.classList.add('active');
        }
    });

    //Se muestras el css del elemento activo en este caso lo puntos abajo de la cartas
    bot.forEach((point,i) => {
        point.classList.remove('active');
        if (i === cardSelected) {
            point.classList.add('active');
        }
    });
}

function centerCard(){
    const card = scrollingCards[cardSelected];
    const containerCenter = window.innerWidth/ 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2; //Se calcula a partir de la posicion izquierda de cada tarjeta y su mitad

    scrollingContainer.scrollLeft = cardCenter - containerCenter;
}
/*===============================================================================================*/

scrollingCards.forEach(card => {
    card.addEventListener('click', () => {
        console.log(card.dataset.index);
    });
});

/*-----------------------------RESPONSIVE------------------------------------*/
const screenSize = screen.width;
console.log(screenSize);

if(screenSize <= 650){
  console.log("estoy eliminando las flechas");
  const scrollingButtonContainer = document.querySelectorAll("#scrolling-button_container");

  scrollingButtonContainer.forEach((button)=>{
    button.classList.add("visible");
  });

}
