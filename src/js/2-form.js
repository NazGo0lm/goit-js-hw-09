const formData = {
    email: "",
    message: "",
};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', () => {
  const formData = new FormData(formEl);
  const email = formData.get('email');
  const message = formData.get('message');
  const data = { email, message };
  saveToLS('formData', data);
});

window.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS('formData');
  formEl.elements.email.value = data?.email || '';
  formEl.elements.message.value = data?.message || '';
});

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const email = formData.get('email');
  const message = formData.get('message');
  const data = { email, message };
  if (email === '' || message === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(data);
    formEl.reset();
    localStorage.removeItem('formData');
  }
});

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}
 
function loadFromLS(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  }
  catch {
   return json;
  }
}