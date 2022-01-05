const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const SpeakerList = document.querySelector('.feature-speakers');
const More = document.querySelector('.more');
const Less = document.querySelector('.less');

hamburgerMenu.style.display = 'none';
Less.style.display = 'none';

function toggleMenu() {
  hamburgerMenu.style.display = 'inherit';
}
hamburger.addEventListener('click', toggleMenu);

function CloseMenu() {
  hamburgerMenu.style.display = 'none';
}
closeIcon.addEventListener('click', CloseMenu);

const workObject = [{
  images: ['images/speakers/cem-yildirm.jpeg', 'images/speakers/zain-Asgar.png', 'images/speakers/sheganku.jpg', 'images/speakers/dan-sturman.jpeg', 'images/speakers/Sanjeev.jpeg', 'images/speakers/dan-sturman.jpeg'],
  speakerName: ['Cem Yildirm', 'Zain Asgar', 'Gerta Sheganaku', 'Dan Sturman', 'Sanjeev Mervana', 'Dan Sturman'],
  speakerPost: ['VP & Head of Engineering @ Fast', 'GVP & Product GM @ New Relic', 'Co-Founder and COO @ LocalStack', 'Chief Technology Officer @ Roblox', 'Vice President Products, Emerging Technologies & Incubation @ Cisco Systems', 'Chief Technology Officer @ Roblox'],
  speakerDiscription: ['Cem Yildirim is the vice president and head of engineering at Fast, where he oversees the development of products, including Fast Checkout, and Fast’s growing engineering organization.', 'Zain Asgar is currently the GVP/GM - Pixie at New Relic, through the acquisition of Pixie Labs Inc. where he was the co-founder/CEO.', 'Gerta is co-founder and COO of LocalStack, where she and her team are obsessed with building tools for extraordinary Developer Experience (DevEx). LocalStack is the leading platform for local cloud development, based on the hugely popular open source framework with 37k+ stars on Github.', 'an Sturman is the Chief Technology Officer at Roblox where he manages and supports Roblox’s diverse blend of engineering leaders in a variety of specialties including; App, Game Engine, Developer, International, Economy, Safety, and Platform Engineering groups.', 'Sanjeev Mervana is the Vice President Products, Emerging Technologies & Incubation at Cisco Systems. He has broadly applicable experience in building go to market strategies for complex hardware & software ; from product definition through end of life (both inbound and outbound).', 'an Sturman is the Chief Technology Officer at Roblox where he manages and supports Roblox’s diverse blend of engineering leaders in a variety of specialties including; App, Game Engine, Developer, International, Economy, Safety, and Platform Engineering groups.'],
}];
if (window.innerWidth > 768) {
  for (let i = 0; i <= 5; i += 1) {
    for (let j = 0; j < workObject.length; j += 1) {
      const allWork = workObject[j];
      SpeakerList.innerHTML += `
      <div class="speaker1">
      <img class="speaker1-image" src="${allWork.images[i]}" alt="speaker1">
      <h1>${allWork.speakerName[i]}</h1>
      <h2>${allWork.speakerPost[i]}</h2>
      <p>${allWork.speakerDiscription[i]}</p>
      </div>
`;
    }
  }
} else if (window.innerWidth < 768) {
  for (let i = 0; i <= 1; i += 1) {
    for (let j = 0; j < workObject.length; j += 1) {
      const allWork = workObject[j];
      SpeakerList.innerHTML += `
      <div class="speaker1">
        <img class="speaker1-image" src="${allWork.images[i]}" alt="speaker1">
        <h1>${allWork.speakerName[i]}</h1>
        <h2>${allWork.speakerPost[i]}</h2>
        <p>${allWork.speakerDiscription[i]}</p>
        </div>
  `;
    }
  }
}

function morebtn() {
  for (let i = 2; i <= 5; i += 1) {
    for (let j = 0; j < workObject.length; j += 1) {
      const allWork = workObject[j];
      SpeakerList.innerHTML += `
      <div class="speaker1">
        <img class="speaker1-image" src="${allWork.images[i]}" alt="speaker1">
        <h1>${allWork.speakerName[i]}</h1>
        <h2>${allWork.speakerPost[i]}</h2>
        <p>${allWork.speakerDiscription[i]}</p>
        </div>
  `;
    }
  }
  Less.style.display = 'inherit';
  More.style.display = 'none';
}
More.addEventListener('click', morebtn);
Less.addEventListener('click', () => {
  document.getElementById('speaker-card').innerHTML = '';
  Less.classList.add('hidden');
  More.classList.remove('hidden');
  for (let i = 0; i <= 1; i += 1) {
    for (let j = 0; j < workObject.length; j += 1) {
      const allWork = workObject[j];
      SpeakerList.innerHTML += `
      <div class="speaker1">
        <img class="speaker1-image" src="${allWork.images[i]}" alt="speaker1">
        <h1>${allWork.speakerName[i]}</h1>
        <h2>${allWork.speakerPost[i]}</h2>
        <p>${allWork.speakerDiscription[i]}</p>
        </div>
  `;
    }
  }
  More.style.display = 'inherit';
  Less.style.display = 'none';
});