//aqui você concatenando o nickname e a saudação
(function () {
    const nickName = " Silvan";
    const saudacao = document.querySelector("li a p");
    saudacao.textContent += nickName;
}) ();

//aqui você valida o email e se o btn vai estar habilitado ou ñ
const text = document.getElementById("floatingInput")
const senha = document.getElementById("floatingPassword")
const btn = document.getElementById("btnVldar")

const regexEmail = /^[\w.-]+@[\w.-]+\.[\w]{2,}/
const regexSenha = /^[\w.-]{2,}/

text.addEventListener("input", (e) => {
    const emailValido = e.target.value
    // console.log(regexEmail.test(emailValido))
    if (regexEmail.test(emailValido)) {
        document.getElementById("validoEmail").innerHTML = `O e-mail ${emailValido} é valido!`;
        btn.disabled = false
    } else {
        document.getElementById("validoEmail").innerHTML = "Digite um e-mail valido para logar."
        btn.disabled = true
    }
})

//aqui vc testa se pode ver a senha digitada
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



