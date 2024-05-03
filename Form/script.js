
const pw = document.querySelector(".password-wrapper");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector(".form");

const mismatch = document.createElement("div");
mismatch.innerText = "* Passwords do not match";
mismatch.style.color = "red";

function passConfirm() {
    if (password.value != confirmPassword.value) {
        form.append(mismatch);
    }
    else {
        mismatch.remove();
    }
}



