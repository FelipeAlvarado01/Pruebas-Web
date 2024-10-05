/*----------------------------------------CAMBIO DE COLOR----------------------------------*/
const rangeInput = document.getElementById('slider-change');

//const initialColor = { r: 33, g: 50, b: 146 }; // Color inicial
//const finalColor = { r: 0, g: 0, b: 0 }; // Color final

// Se ejecuta cuando el valor del input cambia
rangeInput.addEventListener('input', function () {
  const colorValue = rangeInput.value;

  document.querySelector('header').style.backgroundColor = interpolateColor(colorValue,{ r: 33, g: 50, b: 146 },{ r: 0, g: 0, b: 0 });
  document.querySelector('#slider-change').style.backgroundColor = interpolateColor(colorValue,{r: 245, g: 130, b: 65}, {r: 153, g: 191, b: 242});
  document.querySelector('#menu-burguer img').style.backgroundColor = interpolateColor(colorValue, {r: 32, g: 46, b: 128}, {r: 236, g: 106, b: 32});
  document.querySelector('#down-button img').style.backgroundColor = interpolateColor(colorValue, {r: 32, g: 46, b: 128}, {r: 236, g: 106, b: 32});
  //document.querySelector('.down-button i').style.boxShadow = "2px 4px 4px " + interpolateColor(colorValue, {r:0, g: 0, b: 0}, {r: 33, g: 27, b: 24});
  //console.log(interpolateColor(colorValue));
});

function interpolateColor(value,initialColor,finalColor) { //Funcion de para cambiar de color progresivamente
  const r = Math.round(initialColor.r + (finalColor.r - initialColor.r) * (value / 100));
  const g = Math.round(initialColor.g + (finalColor.g - initialColor.g) * (value / 100));
  const b = Math.round(initialColor.b + (finalColor.b - initialColor.b) * (value / 100));
  //console.log("rgb");
  return `rgb(${r}, ${g}, ${b})`;
}

/*--------------------MUEVE EL BOTON HACIA ABAJO----------------------------*/
const icon = document.querySelector('.down-button img');

icon.addEventListener('click', function () {
  icon.style.transition = 'transform 0.1s ease';// Agrega una clase para deslizar hacia abajo
  icon.style.transform = 'translateY(10px)';

  const descriptionSection = document.getElementById('my-description');
  descriptionSection.scrollIntoView({ behavior: 'smooth' });// Desplaza a la sección
  document.getElementById('menu-content').classList.remove('visible');//cierra el menu hamburguesa si es necesario

  setTimeout(function () {
    icon.style.transform = 'translateY(0)';
  }, 200);
});



