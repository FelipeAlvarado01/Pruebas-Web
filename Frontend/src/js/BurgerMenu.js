const menuBurguer = document.getElementById('menu-burguer');
const closeMenuButton = document.getElementById('close-menu_button');

menuBurguer.addEventListener('click', function () {
    document.getElementById('menu-content').classList.add("visible");
});

closeMenuButton.addEventListener('click', function() {
    document.getElementById('menu-content').classList.remove('visible');
});


