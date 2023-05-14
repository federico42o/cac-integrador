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
const resetButton = document.querySelector('button[type="reset"]');
const styles = {
    initial:"#ffffff",
    trainee:"#18a051",
    student:"#2a428f",
    junior:"#a87c1d"
}
const boxes = {
    'student': studentBox,
    'trainee': traineeBox,
    'junior': jrBox
  };    
    

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
    const descounts = {
        'none' : 1,
        'student': 0.15,
        'trainee': 0.5,
        'junior': 0.80
        };
    
    if(quantity.value === "") {
        quantity.value = 0;
    }
    totalValue.value = "Total a pagar: $" +  parseFloat(quantity.value * (200 * descounts[ticketType.value]));  
}

ticketBtn.addEventListener('click', showTotal);
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