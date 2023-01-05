document.getElementById("menu-icon").addEventListener('click', function(){
    mostrarNav();
});

document.getElementById("contenedor").addEventListener('click', function() {
    ocultarNav();
});

document.getElementById("nav-letters").addEventListener('click', function() {
    ocultarNav();
});

const btn = document.getElementById('switch');

btn.addEventListener('click', () => {
    cambiarAModoDark(); 
});

window.addEventListener("resize", ()=> {
    if(window.innerWidth >= 500) {
        document.getElementById('nav-letters').style.display = 'inline-block';
        document.getElementById('menu-icon').style.display = 'none';
    }
});

window.addEventListener("resize", ocultarNav);

window.addEventListener("resize", moverElemento);

moverElemento();

function ocultarNav () {
    if(window.innerWidth < 500) {
        document.getElementById('nav-letters').style.display = 'none';
        document.getElementById('menu-icon').style.display =  "flex";
    }
}

function mostrarNav() {
    document.getElementById('nav-letters').style.display = 'inline-block';
    document.getElementById('menu-icon').style.display = 'none';
}

function cambiarAModoDark() {
    document.body.classList.toggle('dark');
    btn.classList.toggle('active');
}

function moverElemento() {
    if (window.innerWidth < 500) {
        let elemento = document.getElementById("p-estudio");
        let destino = document.getElementById("icon-estudio");
        destino.parentNode.insertBefore(elemento, destino);
    } else {
        let elemento = document.getElementById("icon-estudio");
        let destino = document.getElementById("p-estudio");
        destino.parentNode.insertBefore(elemento, destino);
    }
}