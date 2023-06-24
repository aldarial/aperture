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
                items:1
            },
            1100:{
                items:5
            }
        }
    });
});
