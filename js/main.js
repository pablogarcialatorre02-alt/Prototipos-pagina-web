<<<<<<< Updated upstream
console.log("El archivo JS está conectado correctamente.");

// Esto hará que el botón diga hola al hacer click
document.querySelector('button').addEventListener('click', () => {
    alert('¡Gracias por hacer clic! En breve personalizaremos esta acción.');
=======
// Este código hace que cuando le des a enviar, no recargue la página
// sino que simule el envío para que veas cómo funciona.

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario-contacto");

    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            // Evitamos que la página haga cosas raras
            evento.preventDefault(); 

            // Cogemos el nombre de la persona
            const nombre = document.getElementById("nombre").value;

            // Mostramos un mensaje de confirmación
            alert(`¡Genial ${nombre}! Hemos recibido tu mensaje.\nPronto nos pondremos en contacto contigo para ver la finca.`);

            // Limpiamos el formulario para que quede vacío
            formulario.reset();
        });
    }
>>>>>>> Stashed changes
});