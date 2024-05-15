var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,

    breakpoints: {
        // when window width is >= 320px
        360: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        590: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        767: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


window.addEventListener('load', function () {

    function resizeItem() {
        let sectionTop = document.querySelector('.section_top');
        let product = document.querySelector('.product');
        let footer = document.querySelector('footer');
        let width = document.documentElement.clientWidth;

        if (width <= 1650) {
            if (width >= 767.9) {
                sectionTop.style.minHeight = (width * 0.54) + 'px';
                product.style.minHeight = (width * 0.5) + 'px';
                footer.style.minHeight = (width * 0.262) + 'px';
            }
        }

    }

    resizeItem();

    window.addEventListener('resize', () => {
        resizeItem();
    });

    let gamburger = document.querySelector('.gamburger');
    let bodyMain = document.querySelector('body');
    let wrapperMobile = document.querySelector('.wrapper_mobile');
    let closeMobile = document.querySelector('.close');

    wrapperMobile.addEventListener("click", function(e) {
        bodyMain.classList.remove("mobileMenu");
    }, false);
    closeMobile.addEventListener("click", function(e) {
        bodyMain.classList.remove("mobileMenu");
    }, false);
    gamburger.addEventListener("click", function(e) {
        bodyMain.classList.toggle("mobileMenu");
    }, false);
});

/*svg*/

var paths = document.querySelectorAll('.eniges path');
var time = 25000;
var totalLength = 0;
paths.forEach(function(path) {
    totalLength += path.getTotalLength();
});
let productBlock = document.querySelector('.product_block');
var offset = 0;
paths.forEach(function(path){
    var length = path.getTotalLength();
    path.style.setProperty('--length',length);
    var duration = length / totalLength * time;
    path.style.setProperty('--duration',duration+'ms');
    var delay = 0;
    path.style.setProperty('--delay',delay+'ms');
    offset += length;
});


/*svg offset*/
let countOfset = 0;
let topPos =  productBlock.offsetTop;
window.addEventListener('scroll', function() {
    if (pageYOffset > (topPos - 400) && (countOfset == 0)) {
        console.log("работает");
        productBlock.classList.add("startSVG");
        countOfset = 1;
    }
});
