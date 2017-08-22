$(document).on('input', '#login-form input.email, #login-form input.password', function() {
  if (checkIfLoginFormIsValid()) {
    console.log('valid!');
    __App.__Helpers.setButtonActive('#btn-login');
  } else {
    __App.__Helpers.disableButton('#btn-login');
  }
});

// TODO Refactor this function and corresponding one for 'Signup form' - DRY out the code
function checkIfLoginFormIsValid() {
    var email = $('#login-form input.email').val();
    var password = $('#login-form input.password').val();

    return email && password && password.length >= 6;
}