console.clear();

const showModalBtnDOM = document.querySelectorAll('.show-modal');
const modalDOM = document.querySelector('.modal');
const hiddenDOM = document.querySelector('.hidden');
const closeModalDOM = document.querySelector('.close-modal');
const overlayDOM = document.querySelector('.overlay');

const closeFunction = _ => {
  hiddenDOM.classList.add('hidden');
  overlayDOM.classList.add('hidden');
};

const openFunction = _ => {
  modalDOM.classList.remove('hidden');
  overlayDOM.classList.remove('hidden');
};

for (let i = 0; i < showModalBtnDOM.length; i++) {
  showModalBtnDOM[i].addEventListener('click', openFunction);
}

closeModalDOM.addEventListener('click', closeFunction);
overlayDOM.addEventListener('click', closeFunction);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalDOM.classList.contains('hidden')) {
    closeFunction();
  }
});
