import validator from 'validator';

export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass)
    }

    init() {
        this.events()
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    validate(e) {
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')

        let error = false;

        if(!validator.isEmail(emailInput.value)){
            emailInput.classList.remove('is-valid');
            emailInput.classList.add('is-invalid');
            error = true;
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }

        if(passwordInput.value.length < 8 || passwordInput.value.length > 50){
            passwordInput.classList.remove('is-valid');
            passwordInput.classList.add('is-invalid');
            error = true;
        } else {
            passwordInput.classList.remove('is-invalid');
            passwordInput.classList.add('is-valid');
        }

        if(!error) el.submit();
    }
}