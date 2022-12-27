document.getElementById("menu-icon").addEventListener('click', function(){
    document.getElementById('nav-letters').style.display = 'block';
    document.getElementById('menu-icon').style.display = 'none';
});

document.getElementById("contenedor").addEventListener('click', function() {
    if(screen.width < 501) {
        document.getElementById('nav-letters').style.display = 'none';
        document.getElementById('menu-icon').style.display =  "flex";
    }
});

document.getElementById("nav-letters").addEventListener('click', function() {
    if(screen.width < 501) {
        document.getElementById('nav-letters').style.display = 'none';
        document.getElementById('menu-icon').style.display =  "flex";
    }
});