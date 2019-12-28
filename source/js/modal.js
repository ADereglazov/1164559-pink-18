var formButton = document.querySelector('.form__button');

var form = document.querySelector('.form');
var formSurname = form.querySelector('#surname-field');
var formName = form.querySelector('#name-field');
var formEmail = form.querySelector('#email-field');

var modalFailure = document.querySelector('.modal--failure');
var closeFailureButton = modalFailure.querySelector('.modal__button');
var modalSent = document.querySelector('.modal--sent');
var closeSentButton = modalSent.querySelector('.modal__button');

formButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (!formSurname.value || !formName.value || !formEmail.value || !formEmail.validity.valid) {
    modalFailure.classList.remove('modal--hide');
    closeFailureButton.focus();
  } else {
    modalSent.classList.remove('modal--hide');
    closeSentButton.focus();
  }
});

modalFailure.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalFailure.classList.add('modal--hide');

  var formFieldRequired = form.querySelectorAll('input[required]');
  for (var i = 0; i < formFieldRequired.length; i++) {
    formFieldRequired[i].classList.add('form__required');
  }

  if (!formSurname.value) {
    formSurname.focus();
    return;
  }

  if (!formName.value) {
    formName.focus();
    return;
  }

  formEmail.focus();
});

modalSent.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalSent.classList.add('modal--hide');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!modalFailure.classList.contains('modal--hide')) {
      evt.preventDefault();
      modalFailure.classList.add('modal--hide');
    } else if (!modalSent.classList.contains('modal--hide')) {
      evt.preventDefault();
      modalSent.classList.add('modal--hide');
    }
  }
});
