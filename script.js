// script.js
let availableImages = Array.from({ length: 24 }, (_, i) => i + 1);
let clickCount = 0;

document.getElementById('start-button').addEventListener('click', function () {
    const button = document.getElementById('start-button');
    const image = document.getElementById('portada');

    // Increment the click count
    clickCount++;

    // Check if this is the 25th click
    if (clickCount === 25) {
        // Redirect to the main screen
        window.location.href = 'index.html';
        return;
    }

    // Cambiar el texto del botón
    button.textContent = 'Siguiente tarjeta';

    // Comprobar si la lista de imágenes disponibles está vacía
    if (availableImages.length === 0) {
        // Si está vacía, restablecer la lista
        availableImages = Array.from({ length: 24 }, (_, i) => i + 1);
    }

    // Seleccionar un índice aleatorio de la lista de imágenes disponibles
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const randomImageIndex = availableImages[randomIndex];

    // Eliminar el índice seleccionado de la lista de imágenes disponibles
    availableImages.splice(randomIndex, 1);

    // Actualizar la imagen mostrada
    image.src = `Images/Image${randomImageIndex}.png`;
});