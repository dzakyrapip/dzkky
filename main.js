// Navbar Setings
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-outline');
    const navbar = document.querySelector('.navbarButton');
    const menuIcon = menuButton.querySelector('ion-icon');

    menuButton.addEventListener('click', function(event) {
        navbar.classList.toggle('active');
        menuButton.classList.toggle('cross');
        menuIcon.setAttribute('name', navbar.classList.contains('active') ? 'close-outline' : 'menu-outline');
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !menuButton.contains(event.target)) {
            navbar.classList.remove('active');
            menuButton.classList.remove('cross');
            menuIcon.setAttribute('name', 'menu-outline');
        }
    });
});

// About Settings
function cv() {
    alert('Masih sekolah, belum buat cv');
}

