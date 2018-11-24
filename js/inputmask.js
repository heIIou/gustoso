export default function() {
  const $container = $(document).find('.js-wrapper-index');
  if (!$container) {
    return;
  }

  const $cardNumber = $container.find('.js-input-card-number')[0];
  const $cardCvc = $container.find('.js-input-card-cvc')[0];
  const $email = $container.find('.js-input-email')[0];
  const $password = $container.find('.js-input-password')[0];

  console.log($cardCvc, $cardNumber, $email, $password);
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

  $($email).on('input', checkEmailValue);

  $($password).on('input', checkPasswordValue);

  $($cardNumber).on('input', function (e) {
    checkCardNumberValue(e);
    let currentInput = e.currentTarget.value;
    if (currentInput.length === 4 || currentInput.length === 9 || currentInput.length === 14) {
      e.currentTarget.value = currentInput + "-";
    }
  })

  $($cardCvc).on('input', checkCardCvcValue);
};
