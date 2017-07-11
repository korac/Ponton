$(document).on('input', '#login-form input.email, #login-form input.password', function() {
  if (checkIfFormIsValid()) {
    __App.__Helpers.setButtonActive('#btn-login');
  } else {
    __App.__Helpers.disableButton('#btn-login');
  }
});

function checkIfFormIsValid() {
    var email = $('#login-form input.email').val();
    var password = $('#login-form input.password').val();

    return email && password && password.length >= 6;
}

$(document).on('click', '[data-action="login-user"]', function(e) {
    e.preventDefault();

    var formData = $('#login-form').serialize();
    var submitForm = $.ajax({
        url: 'http://localhost:3000/session/login',
        method: 'POST',
        data: formData,
        dataType: 'json'
    });

    submitForm.done(function() {
        // TODO - if user is authenticated, redirect to main page
    });
});