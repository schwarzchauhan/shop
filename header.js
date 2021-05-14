// login form
var loginFormModal = document.querySelector('.form-modal');
document.querySelector('.loginForm-btn').addEventListener('click', function() {
    loginFormModal.style.display = 'block';
});

document.querySelector('.form-modalClose-btn').addEventListener('click', function() {
    loginFormModal.style.display = 'none';
});

var togglePasswordVisibilityBtn = document.querySelector('.form-modal input[type ="checkbox"]');
var passwordField = document.querySelector('.form-modal input[name="password"]');

togglePasswordVisibilityBtn.addEventListener('click', function() {
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
})


// print the page
var printBtn = document.querySelector('#print-btn');
printBtn.addEventListener('click', function() {
    print();
})