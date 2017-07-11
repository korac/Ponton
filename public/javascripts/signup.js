/**
 * Created by kristijankorac on 11/07/2017.
 */
$(document).on('input', '#signup-form input.name, #signup-form input.email, ' +
    '#signup-form input.password, #signup-form input.password-confirmation', function() {
  if (checkIfFormIsValid()) {
    __App.__Helpers.setButtonActive('#btn-signup');
  } else {
    __App.__Helpers.disableButton('#btn-signup');
  }
});

$(document).on('input', '#signup-form input.password, #signup-form input.password-confirmation', function() {
  var password = $('#signup-form input.password').val();
  var $passConf = $('#signup-form input.password-confirmation');
  var passwordConfirmation = $passConf.val();

  if (password && passwordConfirmation &&
      password.length >= 6 && passwordConfirmation.length >= 6 &&
      password === passwordConfirmation) {
    $passConf.parent().removeClass('input--alert');
  } else {
    $passConf.parent().addClass('input--alert');
  }
});

// $(document).on('click', '[data-action="signup-user"]', function(e) {
//   e.preventDefault();
//
//   var formData = $('#signup-form').serialize();
//   var submitForm = $.ajax({
//     url: 'http://localhost:3000/signup',
//     method: 'POST',
//     data: formData,
//     dataType: 'json'
//   });
//
//   submitForm.done(function(response) {
//     // TODO - if user is authenticated, redirect to main page
//     window.location = 'http://localhost:3000/';
//     response.success ? toastr.success(response.message) : toastr.error(response.message);
//   });
//
// });

function checkIfFormIsValid() {
  var name = $('#signup-form input.name').val();
  var email = $('#signup-form input.email').val();
  var password = $('#signup-form input.password').val();
  var passwordConfirmation = $('#signup-form input.password-confirmation').val();

  return name && email && password && password.length >= 6 && password === passwordConfirmation;
}