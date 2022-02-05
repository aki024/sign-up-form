let password = document.querySelector('#password');
let checkPassword = document.querySelector('#confirmPassword');

let message = document.querySelector('#message');

function checkPW() {
    if (password.value === "" && checkPassword.value === "") {

        password.style.border = "1px solid white";
        checkPassword.style.border = "1px solid white"

        message.innerHTML = "";
    } else if (password.value == checkPassword.value) {
        message.style.color = "green";
        message.innerHTML = "Password is valid";
        password.style.border = "1px solid green";
        checkPassword.style.border = "1px solid green"

    } else {
        message.style.color = "red";
        password.style.border = "1px solid red";
        checkPassword.style.border = "1px solid red";

        message.innerHTML = "*Passwords do not match";
    }
}