const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const modalContainer = document.querySelector('.modal');
const portfolioJs = document.querySelector('.main-post-container');
const deskportfolioJs = document.querySelector('.desk-main-post-container');

modalContainer.style.display = 'none';
closeIcon.style.display = 'none';

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}
hamburger.addEventListener('click', toggleMenu);
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

/* POP Window */

const workObject = [{
  Title: 'Multi-Post Stories',
  images: 'Icons/Rectangle.png',
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required, has been the industries standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text',
  languages: ['css', 'html', 'bootstrap', 'Ruby'],

}];

for (let i = 0; i <= 4; i += 1) {
  for (let j = 0; j < workObject.length; j += 1) {
    const allWork = workObject[j];
    portfolioJs.innerHTML += `
  <section class="primary-post-sec3">
  <div class="work-place-img"></div>
  <h2>${allWork.Title}</h2>
  <p>${allWork.cardDescription}</p>
  <ul class="languages">
      <li>${allWork.languages[j]}</li>
      <li><img src=${allWork.images} alt="divide line1"></li>
      <li>${allWork.languages[j + 1]}</li>
      <li><img src=${allWork.images} alt="divide line2"></li>
      <li>${allWork.languages[j + 2]}</li>
      <li> <img src=${allWork.images} alt="divide line3"></li>
      <li>${allWork.languages[j + 3]}</li>
  </ul>
  <button class="work-button"> See Project</button>
</section>
`;
  }
}

for (let i = 0; i <= 2; i += 1) {
  for (let j = 0; j < workObject.length; j += 1) {
    const allWork = workObject[j];
    deskportfolioJs.innerHTML += `
    <section class="desk-primary-post-sec">
    <div class="desk-post-image"></div>
    <div class="desk-ellipse-work-sec1"></div>
    </section>
    <section class="desk-primary-post-sec">
    <h2 class="desk-post-heading">${allWork.Title}</h2>
    <p class="desk-post-detail">${allWork.cardDescription}</p>
    <ul class="languages">
        <li>${allWork.languages[j]}</li>
        <li><img src="${allWork.images}" alt="divide line1"></li>
        <li>${allWork.languages[j + 1]}</li>
        <li><img src="${allWork.images}" alt="divide line2"></li>
        <li>${allWork.languages[j + 2]}</li>
        <li> <img src="${allWork.images}" alt="divide line3"></li>
        <li>${allWork.languages[j + 3]}</li>
    </ul>
    <button class="work-button">See Project</button>
    </section>
    <section class="desk-primary-post-sec">
    <h2 class="desk-post-heading">${allWork.Title}</h2>
    <p class="desk-post-detail">${allWork.cardDescription}</p>
    <ul class="languages">
        <li>${allWork.languages[j]}</li>
        <li><img src="${allWork.images}" alt="divide line1"></li>
        <li>${allWork.languages[j + 1]}</li>
        <li><img src="${allWork.images}" alt="divide line2"></li>
        <li>${allWork.languages[j + 2]}</li>
        <li> <img src="${allWork.images}" alt="divide line3"></li>
        <li>${allWork.languages[j + 3]}</li>
    </ul>
    <button class="work-button">See Project</button>
    </section>
                <section class="desk-primary-post-sec">
                    <div class="desk-post-image"></div>
                    <div class="ellipse-img4"></div>
                </section>
`;
  }
}

const openModalButtons = document.querySelectorAll('.work-button');
const appWrapper = document.querySelector('.app-wrap');
const modalClose = document.querySelector('.modal-close');

function openModal() {
  appWrapper.style.display = 'none';
  modalContainer.style.display = 'inherit';
}
openModalButtons.forEach((openModalButtons) => {
  openModalButtons.addEventListener('click', openModal);
});

function closeModal() {
  modalContainer.style.display = 'none';
  appWrapper.style.display = 'inherit';
}
modalClose.addEventListener('click', closeModal);

/* form Validation */
const form = document.querySelector('.contact-form');
const email = document.getElementById('email');
const errMsg = document.querySelector('.err-msg');

form.addEventListener('submit', (e) => {
  if (email.value === email.value.toLowerCase()) {
    errMsg.innerHTML = '';
  } else { e.preventDefault(); }
  errMsg.innerHTML = '* Please enter a correct email in lowercase';
});
