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

function ocultarNav () {
    if(screen.width < 501) {
        document.getElementById('nav-letters').style.display = 'none';
        document.getElementById('menu-icon').style.display =  "flex";
    }
}

function mostrarNav() {
    document.getElementById('nav-letters').style.display = 'block';
    document.getElementById('menu-icon').style.display = 'none';
}

function cambiarAModoDark() {
    document.body.classList.toggle('dark');
    btn.classList.toggle('active');
}