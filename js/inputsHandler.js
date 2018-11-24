let numberIsReady = false;
let cvcIsReady = false;
let popupIsActive = false;
let numberPopupActive = false;
let cvcPopupActive = false;
const $typeInputCardNumber = $(document).find('.js-input-card-number')[0];
const $typeInputCardCvc = $(document).find('.js-input-card-cvc')[0];
const activeClass = 'active';
const $smallpopupCNumber = $(document).find('.js-small-popup-card-number');
const $smallpopupCCvc = $(document).find('.js-small-popup-card-cvc');

function closeSmallPopups() {
  if (numberPopupActive = true) {
    $smallpopupCNumber.removeClass(activeClass);
  };
  if (cvcPopupActive === true) {
    $smallpopupCCvc.removeClass(activeClass);
  };
}

function cardNumber() {
  closeSmallPopups();
  let $cardNumber = $typeInputCardNumber.value;

  if ($cardNumber.length > 18) {
    popupIsActive = false;
    numberPopupActive = false;
    closeSmallPopups();
    return numberIsReady = true;;
  }

  numberIsReady = false;
  $typeInputCardNumber.focus();
  $smallpopupCNumber.addClass(activeClass);
  return numberPopupActive = popupIsActive = true;
}

function cardCvc() {
  closeSmallPopups();
  cvcIsReady = false;
  let $cardCvc = $typeInputCardCvc.value;
  if ($cardCvc.length === 3) {
    cvcPopupActive = false;
    closeSmallPopups();
    popupIsActive = false;
    return cvcIsReady = true;;
  }
  $typeInputCardCvc.focus();
  $smallpopupCCvc.addClass(activeClass);
  return popupIsActive = cvcPopupActive = true;
}

function cardNumberHandler() {
  closeSmallPopups();
  cardNumber();
  cardCvc();
  if (numberIsReady && cvcIsReady && !popupIsActive) {
    let $cardNumber = $typeInputCardNumber.value;
    let newCardNumber = $cardNumber.replace(/-/g, "");
    $typeInputCardNumber.value = parseInt(newCardNumber);
    parseInt($typeInputCardCvc.value);
    return true;
  }
}

function commonHandler() {
  cardNumber();
  if (numberIsReady) {
    cardCvc();
  }
  if (numberIsReady && cvcIsReady) {
    if (cardNumberHandler()) {
      return true;
    }
  } else {
    return false;
  }
}

export {commonHandler };
