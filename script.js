var sidenav = document.querySelector(".sidenav");
var overlay = document.querySelector(".overlay");

function menutoggle() {
    sidenav.style.left = '40vw'; 
    overlay.style.display = 'block';
}

overlay.addEventListener('click', closeNav);

function closeNav () {
    sidenav.style.left = '100vw'; 
    overlay.style.display = 'none';
}