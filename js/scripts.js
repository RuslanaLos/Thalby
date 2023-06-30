$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:2000,
        navText: [ '', ' ' ],
        nav: false,
        dots: true,


        responsive:{
            0:{
                items:1,
                autoplay: true,
                dots: false,
            },
            360:{
                items:2,
                autoplay: true,
                dots: false,
            },
            768:{
                items:3
            }
        }
    });
});