const submitBtn = document.getElementById('submitBtn');
const formContainer = document.getElementById('formContainer');
const form = document.getElementById('form');
const formHeader = document.getElementById('form-header');
const message = document.getElementById('message');
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    message.classList.remove('hidden');
    form.classList.add('hidden');
    formHeader.classList.add('hidden');
    submitBtn.style.display = 'none';
    formContainer.style.background = 'url(./assets/img/success-gif.gif) no-repeat center center';
    formContainer.style.backgroundSize = 'contain';
})