$(function(){
    $('.slider').slick({
        arrows:true,
        asNavFor: '.thumbs',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="./images/slider2/previous.png" alt=""></button>' ,
        nextArrow: '<button class="slick-arrow slick-next"><img src="./images/slider2/next.png" alt=""></button>',
    });

    $('.thumbs').slick({
        arrows:false,
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider',
        focusOnSelect: true,
     
    });
});
