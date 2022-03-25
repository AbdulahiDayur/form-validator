const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm( ) {
  // Using Constaint API
  isValid = form.checkValidity();
  console.log(isValid);
  if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return
  }

  if (password1El.value === password2El.value) {
    passwordMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
    return
  } else {
    passwordMatch = false;
    message.textContent = 'Make sure passwords match'
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red'
    password1El.style.borderColor = 'red'
    password2El.style.borderColor = 'red'
    console.log(password1El.value);
    console.log(password2El.value);
  }

  // If form is valid and passwords match
  if (isValid && passwordMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'rebreend'
  }
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);

