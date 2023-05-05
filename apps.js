/* navbar - change black when scrolling down */


var nav = document.querySelector('nav');
var logo = document.getElementById('imgl');

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100) {
                nav.classList.add('bg-primary', 'shadow');
                nav.classList.add('navbar-dark');
                logo.src = "/img/Logo/2.png";
            } else {
                nav.classList.remove('bg-primary', 'shadow');
                nav.classList.remove('navbar-dark');
                nav.classList.add('navbar-light');
                logo.src = "/img/Logo/1.png";
            }
        });
