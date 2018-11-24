let numberIsReady = false;
let cvcIsReady = false;
let popupIsActive = false;
let numberPopupActive = false;
let cvcPopupActive = false;
const inputCardNumber = '.js-input-card-number';
const inputCardCvc = '.js-input-card-cvc';
const activeClass = 'active';
const smallpopupCNumber = $(document).find('.js-small-popup-card-number');
const smallpopupCCvc = $(document).find('.js-small-popup-card-cvc');

function closeSmallPopups() {
  if (numberPopupActive = true) {
    smallpopupCNumber.removeClass(activeClass);
  };
  if (cvcPopupActive === true) {
    smallpopupCCvc.removeClass(activeClass);
  };
}

function cardNumber() {
  closeSmallPopups();
  let $cardNumber = $(document).find(inputCardNumber)[0].value;

  if ($cardNumber.length > 18) {
    popupIsActive = false;
    numberPopupActive = false;
    closeSmallPopups();
    return numberIsReady = true;;
  }

  numberIsReady = false;
  $(document).find(inputCardNumber).focus();
  smallpopupCNumber.addClass(activeClass);
  return numberPopupActive = popupIsActive = true;
}

function cardCvc() {
  closeSmallPopups();
  cvcIsReady = false;
  let $cardCvc = $(document).find(inputCardCvc)[0].value;
  if ($cardCvc.length === 3) {
    cvcPopupActive = false;
    closeSmallPopups();
    popupIsActive = false;
    return cvcIsReady = true;;
  }
  $(document).find(inputCardCvc).focus();
  smallpopupCCvc.addClass(activeClass);
  return popupIsActive = cvcPopupActive = true;
}

function cardNumberHandler() {
  closeSmallPopups();
  cardNumber();
  cardCvc();
  if (numberIsReady && cvcIsReady && !popupIsActive) {
    let $cardNumber = $(document).find(inputCardNumber)[0].value;
    let newCardNumber = $cardNumber.replace(/-/g, "");
    $(document).find(inputCardNumber)[0].value = newCardNumber;
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

export {commonHandler};
