const submitBtn = document.getElementById('submitBtn');
const formContainer = document.getElementById('formContainer');
const form = document.getElementById('form');
const formHeader = document.getElementById('form-header');
const message = document.getElementById('message');
const traineeBox = document.getElementById('trainee');
const jrBox = document.getElementById('junior');
const studentBox = document.getElementById('student');
const ticketBtn = document.getElementById('resumenTickets');
const totalValue = document.getElementById('totalValue');
const quantity = document.getElementById('qty');
const ticketType = document.getElementById('type');
const formTickets = document.getElementById('form-tickets');
const resetButton = document.querySelector('button[type="reset"]');
const myModal = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')
const closeModal2 = document.getElementById('close-modal2')

const styles = {
    initial:"#ffffff",
    trainee:"#18a051",
    student:"#2a428f",
    junior:"#a87c1d"
}
const checkout = {
  name: document.getElementById('name-ticket'),
  email: document.getElementById('email-ticket'),
  quantity: document.getElementById('qty-tickets'),
  category: document.getElementById('category-ticket')
}

const boxes = {
    'student': studentBox,
    'trainee': traineeBox,
    'junior': jrBox
  };    
const pesosARSLocale = Intl.NumberFormat('es-AR');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    message.classList.remove('hidden');
    form.classList.add('hidden');
    formHeader.classList.add('hidden');
    submitBtn.style.display = 'none';
    formContainer.style.background = 'url(./assets/img/success-gif.gif) no-repeat center center';
    formContainer.style.backgroundSize = 'contain';
})

const selectBox = (box) => {

    if (box in boxes) {
        Object.keys(boxes).forEach(key => {
          if (key === box) {
            ticketType.value = box;
            boxes[key].classList.add('box');
            boxes[key].style.backgroundColor = styles[key];
          } else{
            boxes[key].classList.remove('box');
            boxes[key].style.background = styles['initial'];
          }
        });
    }

}

const showTotal = () => {
    const discounts = {
        'none' : 1,
        'student': 0.80,
        'trainee': 0.5,
        'junior': 0.15
        };
    
    if(quantity.value === "") {
        quantity.value = 0;
    }
    checkout.name.textContent = document.getElementById('formName').value + " " + document.getElementById('formApellido').value;
    checkout.email.textContent = document.getElementById('formEmail').value;
    checkout.quantity.textContent = quantity.value;
    checkout.category.textContent = ticketType.value;
    totalValue.value = "Total a pagar: $" +  pesosARSLocale.format(quantity.value *200-((200 * discounts[ticketType.value])));  
}
const showModal = () => {
  if(formTickets.checkValidity()){
    myModal.style.display = "block";
    showTotal();
  }
} 
closeModal.addEventListener('click', () => {
  myModal.style.display = "none";
})
closeModal2.addEventListener('click', () => {
  myModal.style.display = "none";
})



formTickets.addEventListener('submit', (e)=>{
  e.preventDefault();
  showModal();
});
ticketType.addEventListener('change', (e)=>{
    if(e.target.value !== 'none') {
    selectBox(e.target.value);
    } else{
        resetBoxes();
    }
})
const resetBoxes = () => { 
  ticketType.value = 'none';
    Object.keys(boxes).forEach(key => {
        boxes[key].classList.remove('box');
        boxes[key].style.background = styles['initial'];
    });
  }



resetButton.addEventListener('click', resetBoxes);