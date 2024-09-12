/*----------------------------------------CAMBIO DE COLOR----------------------------------*/
const rangeInput = document.getElementById('slider-change');

const initialColor = { r: 33, g: 50, b: 146 }; // Color inicial
const finalColor = { r: 0, g: 0, b: 0 }; // Color final

// Se ejecuta cuando el valor del input cambia
rangeInput.addEventListener('input', function () {
  const colorValue = rangeInput.value;

  document.querySelector('header').style.backgroundColor = interpolateColor(colorValue);
  //console.log(colorValue);
  //console.log(interpolateColor(colorValue));
});

function interpolateColor(value) { //Funcion de para cambiar de color progresivamente
  const r = Math.round(initialColor.r + (finalColor.r - initialColor.r) * (value / 100));
  const g = Math.round(initialColor.g + (finalColor.g - initialColor.g) * (value / 100));
  const b = Math.round(initialColor.b + (finalColor.b - initialColor.b) * (value / 100));
  //console.log("rgb");
  return `rgb(${r}, ${g}, ${b})`;
}

/*--------------------MUEVE EL BOTON HACIA ABAJO----------------------------*/
const icon = document.querySelector('.down-button i');

icon.addEventListener('click', function () {
  icon.style.transition = 'transform 0.1s ease';// Agrega una clase para deslizar hacia abajo
  icon.style.transform = 'translateY(10px)';

  const descriptionSection = document.getElementById('My-Description');
  descriptionSection.scrollIntoView({ behavior: 'smooth' });// Desplaza a la sección

  setTimeout(function () {
    icon.style.transform = 'translateY(0)';
  }, 200);
});
