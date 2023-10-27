let photos = [];
let photos_small = [];
let currentPhoto = "";
function isModal() {
  return document.querySelector(".modal") ? true : false;
}
function setModalType(modalType) {
  fetch(`../json/${modalType}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      photos = data["photos"];
      photos_small = data["photos_small"];

      return [photos, photos_small];
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

export { setModalType };

function createModal(photoSrc) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
        <div class="modal__inner">
        <div class="modal__top">
            <button class="modal__close" type="button">
            <img class="icon" src="icons/close.svg" alt="close">
            </button>
        </div>
        <div class="modal__content">
            <button class="modal__back" type="button">
            <img class="icon" src="icons/left.svg" alt="left"  height="2rem">
            </button>
            <div class="photo">
            <img src="${
              photoSrc.slice(0, -4) + "_.jpg"
            }" alt="Bigger photo" class="foto_large" />
            </div>
            <button class="modal__forward" type="button">
            <img class="icon" src="icons/right.svg" alt="right">
            </button>
        </div>
        </div>
      `;

  document.body.appendChild(modal);
}

function changeModal(photoSrc) {
  if (!isModal()) {
    createModal(photoSrc);
  }
  const photoImg = document.querySelector(".modal .modal__content .photo img");
  photoImg.src = photoSrc;
}

function closeModal() {
  if (isModal()) {
    const modal = document.querySelector(".modal");
    document.body.removeChild(modal);
  }
}
