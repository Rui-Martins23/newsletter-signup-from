const submitButton = document.getElementById('btn');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-msg');

const mainPage = document.querySelector('.card');
const successPage = document.querySelector('.card-2');

const userEmail = document.querySelector('.user-email');
const dismissMessage = document.getElementById('close-msg');

function formSuccess() {
    successPage.classList.remove('hide');
    mainPage.classList.add('hide');
}

function validateEmail(email) {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return isValidEmail.test(email); // it'll return a boolean
}

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const emailInserted = emailInput.value.trim();

    if (!emailInserted) {
        errorMessage.innerText = "Please enter an email";
    }
    else if (validateEmail(emailInserted)) {
        formSuccess();
        userEmail.innerText = emailInserted;
        emailInput.value = '';
    }
    else {
        errorMessage.innerText = "Valid email required";
        emailInput.classList.add('invalid');
    }
})

dismissMessage.addEventListener('click', () => {
    successPage.classList.add('hide');
    mainPage.classList.remove('hide');

    errorMessage.innerText = "";
    emailInput.classList.remove('invalid');
})