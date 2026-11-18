const nusaBar = document.getElementById('nusaBar');

// Espande/chiude la barra Nusa su schermi touch
nusaBar.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A') {
        nusaBar.classList.toggle('active');
    }
});

// Animazione a comparsa fluida mentre scorri la pagina verticale
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mostra l'avviso nella sezione download
function mostraAvviso() {
    const toast = document.getElementById('toast-box');
    if (toast) toast.style.display = 'block';
}