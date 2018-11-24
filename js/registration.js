import {commonHandler} from './inputsHandler.js';

export default function () {
  const $container = $('.js-wrapper-index');
  if (!$container) {
    return;
  }

  const $form = $(document).find('.js-main-form');
  const _form = $(document).find('.js-form'); // for correct closeOnClick()
  const $formContainer = $(document).find('.popup__container');
  const buttonOpen = $(document).find('.js-button-open');
  const buttonClose = $(document).find('.js-button-close');
  const firstPopup = $(document).find('.js-popup-open');
  const secondPopup = $(document).find('.js-popup-close');
  const activeClass = 'active';
  const visible = 'visible';
  const hidden = 'hidden';
  let hasActiveClass = false;
  let isHover;

  function timer(distance) {
    $(document).find('.js-timer')[0].value = distance;
  }

  function resetPopup() {
    firstPopup.removeClass(hidden);
    secondPopup.removeClass(visible);
    _form[0].reset();
  }

  function closePopup() {
    firstPopup.addClass(hidden);
    secondPopup.addClass(visible);
    _closeStartTimer();
    setTimeout(resetPopup, 5500);
  }

  function _closeStartTimer() {
    let countDown = new Date().getTime();
    let time = 5;

    let timerInterval = setInterval(() => {
      let now = new Date().getTime();
      let distance = (now - countDown);
      distance = time - Math.floor((distance % (1000 * 60)) / 1000);
      timer(distance);
      if(distance === 0) {
        clearInterval(timerInterval);
        $form.removeClass(activeClass);
      }
    }, 1000);
  }

  _form.hover(function () {
    return isHover = true;
  },
  function () {
    return isHover = false;
  })

  function closeOnClick() {
    if (hasActiveClass && (isHover === false)) {
      $form.removeClass(activeClass);
      hasActiveClass = false;
    };
    return;
  }

  buttonOpen.click(function () {
    $form.addClass(activeClass);
    return hasActiveClass = true;
  });

  buttonClose.click(function () {
    $form.removeClass(activeClass);
    resetPopup();
    return hasActiveClass = false;
  });

  $form.click(function () {
    closeOnClick();
  });

  $formContainer.click(function () {
    closeOnClick();
  });

  _form.submit(function(event) {
    event.preventDefault();
    let formData = {};
    let validation = commonHandler();

    if (validation) {
      _form.serializeArray().map(function (x) {
        formData[x.name] = x.value;
      })
      JSON.stringify(formData);
      console.log(formData);
      closePopup();
      return;
    };

    // const newInit = {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   },
    //   body: formData
    // }
    //
    // fetch('#',newInit)
    // .then(function(response) {
    //   if (!response.ok) {
    //     return Promise.reject(new Error(
    //       'Response failed: ' + response.status + ' (' + response.statusText + ')'
    //     ));
    //
    //   }
    //
    //   return response.json();
    // });

  })
};
