$(document).ready(function() {
  const $container = $('.js-wrapper-index');
  if (!$container) {
    return;
  }

  const cardNumber = $('.registration__input-card-number');
  const cardCvc = $('.registration__input-cvc');
  const email = $('.registration__email');

  cardNumber.inputmask("9999-9999-9999-9999");
  cardCvc.inputmask("999");
  email.inputmask({
   mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
   greedy: false,
   onBeforePaste: function (pastedValue, opts) {
     pastedValue = pastedValue.toLowerCase();
     return pastedValue.replace("mailto:", "");
   },
   definitions: {
     '*': {
       validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
       casing: "lower"
     }
   }
 });

  const $form = $('.js-main-form');
  const buttonOpen = $('.js-button-open');
  const buttonClose = $('.js-button-close');

  buttonOpen.click(function () {
    $form.addClass('active');
  });

  buttonClose.click(function () {
    $form.removeClass('active');
  })









  $form.submit(function(event) {
    event.preventDefault();
    console.log(event);
    let formData = {};
    $form.serializeArray().map(function (x) {
      formData[x.name] = x.value;
    })
    JSON.stringify(formData);
    console.log(formData);


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
})
