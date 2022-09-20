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

galleryContainerEL.insertAdjacentHTML('beforeend', elementsOfGallery);

galleryContainerEL.addEventListener('click', onBigImg);

function onBigImg(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  console.dir(e.target.dataset.source);
}
const instance = basiclightbox.create(`
	
`);
