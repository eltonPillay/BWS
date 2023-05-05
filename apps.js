/* navbar - change to blue when scrolling down */


const nav = document.querySelector('nav');
const logo = document.getElementById('imgl');
const scrollThreshold = 100;

window.addEventListener('scroll', function () {
    if (window.pageYOffset > scrollThreshold) {
        nav.classList.add('bg-primary', 'shadow');
        nav.classList.replace('navbar-light', 'navbar-dark');
        logo.src = "/img/Logo/2.png";
    } else {
        nav.classList.remove('bg-primary', 'shadow');
        nav.classList.replace('navbar-dark', 'navbar-light');
        logo.src = "/img/Logo/1.png";
    }
});