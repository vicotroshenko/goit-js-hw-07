import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listOfPics = document.querySelector(".gallery");

const addGalleryPic = galleryItems
  .map((item) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
  })
  .join("");

listOfPics.innerHTML = addGalleryPic;
listOfPics.addEventListener("click", showBigPic);

function showBigPic(event) {
  stopAction(event);

	if(event.target.nodeName !== `IMG`){
		return;
	}

  const instance = basicLightbox.create(`<img src='${event.target.dataset.source}' width="800" height="600">`);
  instance.show();

  listOfPics.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

listOfPics.addEventListener("click", stopAction);

function stopAction(event) {
  event.preventDefault();
}
