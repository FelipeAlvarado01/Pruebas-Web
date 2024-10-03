const menuBurguer = document.getElementById('menu-burguer');
const closeMenuButton = document.getElementById('close-menu_button');

menuBurguer.addEventListener('click', function () {
    document.getElementById('menu-content').classList.add("visible");
});

closeMenuButton.addEventListener('click', function() {
    document.getElementById('menu-content').classList.remove('visible');
});


/*--------------------MUEVE HACIA ABAJO CUANDO CLICKEA UNA SECCION--------------------*/
const aboutMe = document.querySelector('#About-Me_Button a');

aboutMe.addEventListener('click', function () {
  const descriptionSection = document.getElementById('My-Description');
  descriptionSection.scrollIntoView({ behavior: 'smooth' }); // Desplaza a la sección
  document.getElementById('menu-content').classList.remove('visible');
});

const myWorks = document.querySelector('#About-Me_Button a');

myWorks.addEventListener('click', function () {
  const descriptionSection = document.getElementById('My-Works');
  descriptionSection.scrollIntoView({ behavior: 'smooth' }); // Desplaza a la sección
  document.getElementById('menu-content').classList.remove('visible');
});



