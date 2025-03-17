import './styles/main.scss';

import boilingImg from './images/boiling.png'; 
import chefImg from './images/chef-experimenting.png'; 
import eggImg from './images/egg-cooking-progress.png';

import redImg from './images/red.png';
import greenImg from './images/green.png';
import whiteImg from './images/white.png';

//mock array of objects
const carouselItems = [
  {
    title: 'Red',
    content: 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.',
    imgUrl: redImg
  },
  {
    title: 'Green',
    content: 'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.',
    imgUrl: greenImg
  },
  {
    title: 'White',
    content: 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.',
    imgUrl: whiteImg
  },
];

// Only Initialize event listeners when DOM is loaded, to prevent targetting missing elements.
document.addEventListener('DOMContentLoaded', () => {

  //Load Images, to demonstrate something like masonry
  document.querySelector('.image-grid').innerHTML = `
    <img src="${boilingImg}" alt="Cooking Process" class="modal-trigger  object-cover w-full h-full sm:row-span-2 cursor-pointer  transition duration-200 ease-in-out lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-gray-950 lg:hover:z-[1]" />
    <img src="${chefImg}" alt="Chef Experimenting" class="modal-trigger  object-cover h-full sm:row-span-1 cursor-pointer  transition duration-200 ease-in-out lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-gray-950 lg:hover:z-[1]" />
    <img src="${eggImg}" alt="Perfect Eggs" class="modal-trigger  object-cover h-full sm:row-span-1 cursor-pointer  transition duration-200 ease-in-out lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-gray-950 lg:hover:z-[1] " />
  `;

  //Load Images to demonstrate carousel like sections
  let carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.innerHTML = null;
  carouselItems.forEach(item => {
    carouselContainer.innerHTML += `
      <a class="modal-trigger inline-flex text-center flex-col text-white mb-8 md:basis-[calc(50%-5px)] cursor-pointer transition duration-200 ease-in-out lg:hover:-translate-y-1 lg:hover:scale-110 lg:hover:bg-gray-950 lg:hover:z-10">
        <img class="w-full aspect-square object-cover" src="${item.imgUrl}">
        <h1 class="mt-5 text-xl font-bold">${item.title}</h1>
        <p class="my-2 text-xl font-light px-2 lg:px-[30px]">${item.content}</p>
      </a>
    `
  })

  //Listen for close button click event to closes the modal
  document.querySelector('#closeModal').addEventListener('click', (e) => {
    toggleModal(false);
  });

  //Listen for Escape keyup event to closes the modal
  document.addEventListener('keyup', (e) => {
    if(e.key === "Escape") {
      toggleModal(false);
    }
  });

  //Listen to modal triggers, then append img's src into modal img
  //append content if any
  document.querySelectorAll('.modal-trigger').forEach(element => {
    element.addEventListener('click', () => {
      let modalImage = document.querySelector('#modal-image');
      if(element.tagName === 'A') {
        console.log('Anchor clicked:', element);
        let modalContent = document.querySelector('#modal-content');
        let modalTitle = modalContent.querySelector('h1');
        let modalText = modalContent.querySelector('p');

        modalImage.src = element.querySelector('img').src;
        modalTitle.innerText = element.querySelector('h1').innerText;
        modalText.innerText = element.querySelector('p').innerText;
        modalContent.style.display = "flex";

      } else {
        modalImage.src = element.src;
      }
      toggleModal();
    });
  });
},{ once: true });

// Reusable modal toggle
function toggleModal(open = true) {
  let imageModal = document.querySelector('#imageModal');
  let modalContent = document.querySelector('#modal-content');

  if(!open) {
    imageModal.style.display = 'none';
    modalContent.style.display = 'none';
    document.documentElement.style.overflow = 'scroll';
    return;
  }

  document.documentElement.style.overflow = 'hidden';
  imageModal.style.display = 'flex';
}