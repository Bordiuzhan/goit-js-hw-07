import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEL = document.querySelector('.gallery');

const elementsOfGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join(' ');

galleryContainerEL.insertAdjacentHTML('beforeend', elementsOfGallery);
galleryContainerEL.addEventListener('click', onOpenModal);

const instance = new SimpleLightbox(`.gallery a`, {
  overlayOpacity: 1,
  captionsData: 'alt',
  captionDelay: 250,
});
function onOpenModal(e) {
  e.preventDefault();
  instance.on('show.simplelightbox');
}
