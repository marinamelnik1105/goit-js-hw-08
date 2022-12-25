import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onSaveValue, 500));
form.addEventListener('submit', onFormSubmit);

let userData = { email: '', review: '' };

if (localStorage.getItem('feedback-form-state')) {
  userData = JSON.parse(localStorage.getItem('feedback-form-state'));
}

if (userData.email.length > 0 || userData.review.length > 0) {
  form.elements['email'].value = userData.email;
  form.elements['message'].value = userData.review;
}

function onSaveValue() {
  console.dir(form);
  userData.email = form.elements['email'].value;
  userData.review = form.elements['message'].value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(`email: ${userData.email}, review: ${userData.review}`);
  form.elements['email'].value = '';
  form.elements['message'].value = '';
  localStorage.clear();
}
