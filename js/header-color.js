;
$(window).scroll(function() {
  if ($(window).scrollTop() > $(`.art-of-cakes`).offset().top - $(`.menu`).height()) {
    $(`.menu`).addClass("active");
  }
  if ($(window).scrollTop() < ($(`.art-of-cakes`).offset().top - ($(`.menu`).height() + 1))) {
    $(`.menu`).removeClass("active");
  }
});
