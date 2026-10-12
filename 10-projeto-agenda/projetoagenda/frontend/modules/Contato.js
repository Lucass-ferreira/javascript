import validator from 'validator';
import { isValidPhoneNumber, AsYouType  } from 'libphonenumber-js'

export default class Contato{
    constructor(formClass){
        this.form = document.querySelector(formClass)
    }

    init() {
        this.events()
    }

    events() {
        if(!this.form) return;

        const telefoneInput = this.form.querySelector('input[name="telefone"]');

        this.formatNumber(telefoneInput);

        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        })
    }

    formatNumber(telefone){
        if(!telefone) return;

        telefone.addEventListener('input', () => {
            telefone.value = new AsYouType('BR').input(telefone.value);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');

        let error = false;

        //nome
        if(nomeInput.value.trim().length < 3 || /[^a-zA-ZÀ-ÿ\s-]/.test(nomeInput.value)){
            nomeInput.classList.remove('is-valid');
            nomeInput.classList.add('is-invalid');
            error = true;
        } else {
            nomeInput.classList.remove('is-invalid');
            nomeInput.classList.add('is-valid');
        }

        //sobrenome
        if(!sobrenomeInput.value.trim() || /[^a-zA-ZÀ-ÿ\s-]/.test(sobrenomeInput.value)){
            sobrenomeInput.classList.remove('is-valid');
            sobrenomeInput.classList.add('is-invalid');
            error = true;
        } else {
            sobrenomeInput.classList.remove('is-invalid');
            sobrenomeInput.classList.add('is-valid');
        }



        //email
        if(!validator.isEmail(emailInput.value)){
            if(!telefoneInput.value) {
                emailInput.classList.remove('is-valid');
                emailInput.classList.add('is-invalid');
            }
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }

        //telefone
        if(!telefoneInput.value.trim() || !isValidPhoneNumber(telefoneInput.value, 'BR')){
            if(!emailInput.value){
                telefoneInput.classList.remove('is-valid');
                telefoneInput.classList.add('is-invalid');
            }
        } else {
            telefoneInput.classList.remove('is-invalid');
            telefoneInput.classList.add('is-valid');
        }

        if(emailInput.value || telefoneInput.value){
            if(!error ) el.submit();
            this.formatNumber()
        }
    }
}