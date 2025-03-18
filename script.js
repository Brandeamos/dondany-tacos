// Puedes agregar interactividad aquí si es necesario
// Por ejemplo, para manejar eventos de clic en los números de teléfono
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function(event) {
        alert(`Llamando a ${this.textContent}`);
    });
});
