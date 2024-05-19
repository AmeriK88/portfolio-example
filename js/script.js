const burgerContainer = document.querySelector('.burger-container');
const navLinks = document.querySelector('.navlinks');
const goTopBtn = document.querySelector(".go-top-btn");

// Función para manejar el despliegue del menú al hacer clic en el botón del burger
function handleBurgerClick() {
    burgerContainer.addEventListener('click', () => {
        burgerContainer.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Función para manejar el comportamiento del botón de volver arriba al hacer scroll
function handleScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            goTopBtn.style.display = "block";
        } else {
            goTopBtn.style.display = "none";
        }
    });
}

// Función para truncar el contenido y mostrar el enlace "Leer más" para cada entrada de blog
function handleBlogEntries() {
    const entries = document.querySelectorAll('.blog-entry');

    entries.forEach(entry => {
        const entryContent = entry.querySelector('.entry-content');
        const readMoreLink = entry.querySelector('.read-more-link');

        // Truncar el contenido para mostrar solo las primeras 60 palabras
        const content = entryContent.textContent.trim().split(/\s+/).slice(0, 50).join(" ") + " ...";
        entryContent.textContent = content;

        
    });
}

// Función para desplazarse suavemente hacia arriba cuando se hace clic en el botón
goTopBtn.addEventListener("click", function() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Ejecutar las funciones al cargar la ventana
window.onload = () => {
    handleBurgerClick();
    handleScroll();
    handleBlogEntries();
};


