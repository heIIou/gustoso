$(document).ready(function () {

  const $container = $('.js-wrapper-index');
  if(!$container.length) {
    return ;
  }

  const $artOfCakes = $('.js-art-of-cakes');
  const $menu = $('.js-menu');
  const menuHeight = $menu.height();

  let isHasClassActive = false;

  $(window).scroll(()=> {
    const offsetTop = $artOfCakes.offset().top;
    const scrollTop = $(window).scrollTop();

    if (scrollTop > offsetTop - menuHeight && !isHasClassActive) {
      $menu.addClass("active");
      isHasClassActive = true;
    }

    if (scrollTop < offsetTop - (menuHeight + 1) && isHasClassActive) {
      $menu.removeClass("active");
      isHasClassActive = false;
    }
  });
});
