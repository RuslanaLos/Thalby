$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        navText: [ '', ' ' ],
        nav: false,
        dots: true,


        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1100:{
                items:3
            }
        }
    });
});