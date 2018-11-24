export default function() {
  const $container = $(document).find('.js-wrapper-index');
  if (!$container) {
    return;
  }

  const cardNumber = $(document).find('.js-input-card-number');
  const cardCvc = $(document).find('.js-input-card-cvc');
  const email = $(document).find('.js-input-email');
  const password = $(document).find('.js-input-password')

  const checkFieldValue = (regexp = '') => {

    return function (event) {
      event.currentTarget.value = event.currentTarget.value.replace(regexp, '');
    }
  };

  const regExpData = {
    email: /[^\w@\.-]+/gi,
    password: /[^\w]+/gi,
    card_number: /[^\d-]+/gi,
    card_cvc:/[^\d]+/gi
  };

  const checkEmailValue = checkFieldValue(regExpData.email);
  const checkPasswordValue = checkFieldValue(regExpData.password);
  const checkCardNumberValue = checkFieldValue(regExpData.card_number);
  const checkCardCvcValue = checkFieldValue(regExpData.card_cvc);

  email.on('input', function(e) {
    checkEmailValue(e);
  });

  password.on('input', function (e) {
    checkPasswordValue(e);
  });

  cardNumber.on('input', function (e) {
    checkCardNumberValue(e);
    let currentInput = e.currentTarget.value;
    if (currentInput.length === 4 || currentInput.length === 9 || currentInput.length === 14) {
      e.currentTarget.value = currentInput + "-";
    }
  })

  cardCvc.on('input', function (e) {
    checkCardCvcValue(e);
  })
};
