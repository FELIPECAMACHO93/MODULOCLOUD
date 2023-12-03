/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

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

// listado de tarjeta de productos //
function obtenerProductos() {
    const cardsContainer = document.getElementById("cards-container");

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            console.log(products);
            products.forEach(product => {
                const card = document.createElement("div");
                card.className = "card col-lg-4 col-md-6 col-sm-12 p-3 mb-3";
                // Agregamos clases responsivas, padding y margen inferior a las tarjetas

                card.innerHTML = `
                    <div class="card-body">
                        <img src="${product.image}" class="card-img-top img-fluid" style="max-height: 200px;" alt="${product.title}">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text text-truncate">${product.description}</p>
                        <p class="card-text">$${product.price}</p>
                        <button onclick="agregarAlCarrito(${product.id})" class="btn btn-primary">Agregar al carrito</button>
                    </div>
                `;

                cardsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.log("Hubo un error: ", error);
        });
}

//tablas//
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('cargarBtn').addEventListener('click', function () {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => {
                const datos = data;
                const tablaCuerpo = document.getElementById("tabla-cuerpo");
                tablaCuerpo.innerHTML = ''; // Limpiar cualquier contenido existente

                datos.forEach((dato) => {
                    const fila = document.createElement("tr");
                    fila.innerHTML = `
                        <td><img src="${dato.url}" class="img-thumbnail" style="max-width: 100px; max-height: 100px; border-radius: 50%;"></td>
                        <td>${dato.albumId}</td>
                        <td>${dato.id}</td>
                        <td>${dato.title}</td>
                        <td>
                            <button type="button" class="btn btn-success editar">EDITAR</button>
                            <button type="button" class="btn btn-danger eliminar">ELIMINAR</button>
                        </td>
                    `;
                    tablaCuerpo.appendChild(fila);

                    // Agregar eventos a los botones de editar y eliminar (si es necesario)
                });
            })
            .catch(error => {
                console.error('Hubo un problema con la operación fetch:', error);
            });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Código para cargar la tabla...

    // Agregar evento al botón "Borrar Tabla"
    document.getElementById('borrarBtn').addEventListener('click', function () {
        const tablaCuerpo = document.getElementById("tabla-cuerpo");
        tablaCuerpo.innerHTML = ''; // Borrar todo el contenido de la tabla
    });
});