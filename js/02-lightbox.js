import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList =document.querySelector('.gallery');
const pictureCard = createGalleryPictureCard (galleryItems);

galleryList.insertAdjacentHTML('beforeend', pictureCard);
// galleryList.addEventListener('click', onGalleryPictureCardClick);

function createGalleryPictureCard (galleryItems){
  return galleryItems
  .map(({preview, original, description}) => {
return`
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}"
      />
  </a>
</li>
    `
  })
  .join('');
};

new SimpleLightbox('.gallery a', {
	captions: true,
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
});
