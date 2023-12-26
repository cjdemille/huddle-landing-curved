const input = document.querySelector('.footer__form__input');
const submit = document.querySelector('.footer__form__submit');

const errorMsg = document.querySelector('.footer__form__error');


const validateEmail = (e) => {
    e.preventDefault();

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.length > 0) {
        if (!input.value.match(validRegex)) {
            errorMsg.classList.remove('hidden');
        } else {
            errorMsg.classList.add('hidden')
        }
    } else {
        errorMsg.classList.remove('hidden');
    }
}

input.addEventListener('input', validateEmail)
submit.addEventListener('click', validateEmail)