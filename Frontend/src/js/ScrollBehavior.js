const leftButton = document.querySelector("#scrolling-button_left");
const rightButton = document.querySelector("#scrolling-button_right");
const worksContent = document.querySelector("#scrolling-container");

leftButton.addEventListener("click", function(){
    worksContent.scrollLeft -= 800; //Mueve las tarjetas de trabajo hacia la izquierda
    console.log("presionando boton 1");
});

rightButton.addEventListener("click", function(){
    worksContent.scrollLeft += 800;//Mueve las tarjetas de trabajo hacia la derecha
    console.log("presionando boton 2");
});