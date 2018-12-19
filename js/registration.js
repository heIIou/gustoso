import {commonHandler } from './inputsHandler.js';

export default function () {
  const $container = $('.js-wrapper-index');
  if (!$container) {
    return;
  }
  const POPUP_CONTAINER = 'js-popup-container';
  const $popup = $container.find('.js-popup');
  const $form = $container.find('.js-form'); // for correct closeOnClick()
  const $popupContainer = $container.find(`.${POPUP_CONTAINER}`);
  const buttonOpen = $container.find('.js-button-open');
  const buttonClose = $container.find('.js-button-close');
  const firstPopup = $container.find('.js-popup-open');
  const secondPopup = $container.find('.js-popup-close');
  let $timer = $container.find('.js-timer')[0];
  const activeClass = 'active';
  const visible = 'visible';
  const hidden = 'hidden';

  function timer(distance) {
    $timer.value = distance;
  }

  function resetPopup() {
    setTimeout(function () {
      if ($($popup).hasClass(activeClass) === false) {
        firstPopup.removeClass(hidden);
        secondPopup.removeClass(visible);
        $form[0].reset();
      }
    }, 300)
  }

  function autoClosePopup() {
    firstPopup.addClass(hidden);
    secondPopup.addClass(visible);
    _closeStartTimer();
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
        $popup.removeClass(activeClass);
        resetPopup();
      }
    }, 1000);
  }

  $popupContainer.click(function (e) {
    const hasClass = $(e.target).hasClass(POPUP_CONTAINER);
    if (hasClass) {
      $popup.removeClass(activeClass);
      resetPopup();
    }
  });

  buttonOpen.click(function () {
    $popup.addClass(activeClass);
  });

  buttonClose.click(function () {
    $popup.removeClass(activeClass);
    resetPopup();
  });

  $form.submit(function(event) {
    event.preventDefault();
    let formData = {};
    let validation = commonHandler();

    if (validation) {
      $form.serializeArray().map(function (x) {
        formData[x.name] = x.value;
      })
      JSON.stringify(formData, function (key, value) {
        if (isNaN(value) === false) {
          console.log(typeof parseInt(value), typeof Number(value));
          let newValue = parseInt(value);
          console.log(typeof newValue);
          return newValue;
        }
        return value;
      });
      console.log(formData);
      autoClosePopup();
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
