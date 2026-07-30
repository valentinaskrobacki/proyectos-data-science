document.addEventListener('DOMContentLoaded', () => {
    // los enlaces externos abren en pestaña nueva de forma segura
    const links = document.querySelectorAll('a[target="_blank"]');
    links.forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // animacion hover tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease';
        });
    });

    console.log("Portafolio cargado correctamente");
});