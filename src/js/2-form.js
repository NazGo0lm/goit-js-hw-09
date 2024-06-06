'use strict';
console.log('hello form');
const formData = { email: '', message: '' };
const formEl = document.querySelector('.feedback-form');
let inputData = formEl.querySelector('input');
let textareaData = formEl.querySelector('textarea');
let arrayData = formEl.elements;
arrayData = Array.from(arrayData);
arrayData.pop();
formEl.addEventListener('input', addLocalStorage);
formEl.addEventListener('submit', submitingForm);
window.addEventListener('DOMContentLoaded', returnData);
// adding localstorage data from event input
function addLocalStorage(event) {
  event.preventDefault();
  arrayData.forEach(area => {
    if (area.name === 'email') {
      formData.email = area.value.trim();
    } else if (area.name === 'message') {
      formData.message = area.value.trim();
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });
}
// validating end working form
function submitingForm(event) {
  event.preventDefault();
  let isValid = false;
  if (inputData.value && textareaData.value) {
    isValid = true;
  } else {
    isValid = false;
    formEl.reset();
  }
  if (!isValid) {
    alert('All form fields must be filled in');
  } else {
    formData.email = inputData.value;
    formData.message = textareaData.value;
    formEl.reset();
    console.log(formData);
  }
  localStorage.removeItem('feedback-form-state');
}
// return form data
function returnData(events) {
  let savedFormData = {};
  if (localStorage.getItem('feedback-form-state')) {
    savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    inputData.value = savedFormData.email;
    textareaData.value = savedFormData.message;
    return console.log(savedFormData);
  } else {
    return console.log('not data from localstorage');
  }
}