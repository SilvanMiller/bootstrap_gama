function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const floatingPassword = document.getElementById('floatingPassword');


    if (eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        floatingPassword.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        floatingPassword.type = 'password';
    }
}
