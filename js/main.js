// Desplazamiento suave para los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const seccionObjetivo = document.querySelector(this.getAttribute('href'));
        
        seccionObjetivo.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interceptar el envío del formulario de contacto
const formulario = document.getElementById('formulario-contacto');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // Recoger los valores (útil para cuando lo conectes a un servidor real)
    const nombre = document.getElementById('nombre').value;
    
    // Mostrar un mensaje de éxito
    alert(`¡Gracias por contactar, ${nombre}! Hemos recibido tu solicitud para la finca. Nos pondremos en contacto contigo muy pronto.`);
    
    // Limpiar el formulario
    formulario.reset();
});