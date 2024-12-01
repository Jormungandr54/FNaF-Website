document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const dropdown = document.querySelector('.dropdown');

    menuIcon.addEventListener('click', () => {
        dropdown.classList.toggle('show'); // Mostrar u ocultar el menú
        menuIcon.classList.toggle('active'); // Animación del icono
    });
});
