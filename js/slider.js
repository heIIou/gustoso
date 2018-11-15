$(document).ready(function(){
  $('.rating__backgrounds').slick({
    infinite: true,
    dots: true,
    swipe: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(`.prev`),
    nextArrow: $(`.next`),
    appendDots: $(`.interactive__bullets`),
    dotsClass: `js-rating-bullets`,
    asNavFor: `.interactive__previews`
  });
  $(`.interactive__previews`).slick({
    arrows: false,
    dots: false,
    infinite: true,
    asNavFor: `.rating__backgrounds`,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true
  });
});
