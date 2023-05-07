/* navbar - change to blue when scrolling down */


const nav = document.querySelector('nav');
const logo = document.getElementById('imgl');
const scrollThreshold = 100;

window.addEventListener('scroll', function () {
    if (window.pageYOffset > scrollThreshold) {
        nav.classList.add('navcol', 'shadow');
    } else {
        nav.classList.remove('navcol', 'shadow');
    }
});