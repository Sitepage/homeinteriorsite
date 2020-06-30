$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        navText: ['<img src="img/leftchevron.png">', '<img src="img/rightchevron.png">'],
        dots: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});


function menuburger(selector) {
    let menu = $(selector);
    let button = menu.find('.menu-burger_btn');
    let links = menu.find('.menu_item');
    let overlay = menu.find('.menu-burger_over');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    function toggleMenu() {
        menu.toggleClass('menu-burger_active');
        if (menu.hasClass('menu-burger_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
} 

menuburger('.menu-burger');



