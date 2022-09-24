import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEL = document.querySelector('.gallery');

const elementsOfGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
  })
  .join(' ');

function onOpenModal(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  const instance = basicLightbox.create(`<img src=${e.target.dataset.source}>`);
  instance.show();
  window.addEventListener('keydown', onEscPres);
  function onEscPres(e) {
    if (e.code === 'Escape') {
      window.removeEventListener('keydown', onEscPres);
      instance.close();
    }
  }
}

galleryContainerEL.insertAdjacentHTML('beforeend', elementsOfGallery);
galleryContainerEL.addEventListener('click', onOpenModal);
