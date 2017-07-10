$(document).on('input', '#login-form input.email, #login-form input.password', function() {
    if (checkIfFormIsValid()) {
        setButtonActive()
    } else {
        disableButton();
    }
});

function checkIfFormIsValid() {
    var email = $('#login-form input.email').val();
    var password = $('#login-form input.password').val();

    if(email && password && password.length >= 6) {
        return true;
    }

    return false;
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

function setButtonActive() {
    $('#btn-login').addClass('btn--active').removeAttr('disabled');

}

function disableButton() {
    $('#btn-login').removeClass('btn--active').attr('disabled');
}