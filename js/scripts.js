/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 
const collapseToggles = document.querySelectorAll('.collapse-toggle');

collapseToggles.forEach(toggle => {
    const collapseElement = document.querySelector(toggle.getAttribute('href'));
    const arrow = toggle.querySelector('.arrow');

    // Evento de clic
    toggle.addEventListener('click', function() {
        arrow.classList.toggle('rotate'); // Alterna la rotación de la flecha
    });

    // Escuchar eventos de Bootstrap para mantener la rotación en sincronización
    collapseElement.addEventListener('shown.bs.collapse', function() {
        arrow.classList.add('rotate');
    });

    collapseElement.addEventListener('hidden.bs.collapse', function() {
        arrow.classList.remove('rotate');
    });
});




const collapsibleElement = document.getElementById('propiedad-antioxidante');
const arrow = document.getElementById('arrowToggle');

window.addEventListener('scroll', function() {
    const rect = collapsibleElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Verifica si el elemento está visible en el viewport
    if (rect.top >= 0 && rect.bottom <= windowHeight) {
        // Abre el colapso solo una vez
        if (!collapsibleElement.classList.contains('show')) {
            const collapse = new bootstrap.Collapse(collapsibleElement, {
                toggle: true
            });

            // Rota la flecha hacia abajo
            arrow.classList.add('rotate');
        }
    }
});

// Para manejar la rotación de la flecha cuando el colapso se oculta
collapsibleElement.addEventListener('hidden.bs.collapse', function () {
    arrow.classList.remove('rotate'); // Retira la rotación si el colapso se oculta
});


document.querySelectorAll('.collapse').forEach(collapseElement => {
    collapseElement.addEventListener('show.bs.collapse', function () {
        // Asegura que el colapso calcula la altura correctamente
        this.style.transitionProperty = 'height, margin, padding';
        this.style.transitionDuration = '0.89s'; // O tu valor deseado
    });
});



window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});