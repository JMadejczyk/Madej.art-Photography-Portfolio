let photos = [];
let photos_small = [];
let index = 0;
let source = "";
let isSmall = false;
function setModalType(modalType) {
  fetch(`../json/${modalType}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      photos = data["photos"];
      photos_small = data["photos_small"];

      return [photos, photos_small];
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

const showNextModal = () => {
  if (
    (!isSmall && index + 1 != photos.length) ||
    (isSmall && index + 1 != photos_small.length)
  ) {
    if (isSmall) {
      changeModal(photos_small[index + 1]);
    } else changeModal(photos[index + 1]);
  }
};
const showPreviousModal = () => {
  if (index != 0) {
    if (isSmall) {
      changeModal(photos_small[index - 1]);
    } else changeModal(photos[index - 1]);
  }
};

function isModal() {
  return document.querySelector(".modal") ? true : false;
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
            <img src="${photoSrc}" alt="Bigger photo" class="foto_large" />
            </div>
            <button class="modal__forward" type="button">
            <img class="icon" src="icons/right.svg" alt="right">
            </button>
        </div>
        </div>
      `;

  document.body.appendChild(modal);
  setCurrentPhotoIndex();
}

function setCurrentPhotoIndex() {
  let whole_source = document.querySelector(
    "div.modal__content div.photo img.foto_large"
  ).src;

  if (whole_source.search("images") != -1) {
    source = whole_source.substring(whole_source.search("images"));
  } else if (whole_source.search("landscapes") != -1) {
    source = whole_source.substring(whole_source.search("landscapes"));
  } else if (whole_source.search("street") != -1) {
    source = whole_source.substring(whole_source.search("street"));
  }
  if (window.innerWidth > 800) {
    index = photos.indexOf(source.replace("_", ""));
    isSmall = false;
  } else {
    index = photos_small.indexOf(source.replace("_", ""));
    isSmall = true;
  }
}

function checkArrows() {
  const modal = document.querySelector(".modal");
  if (index + 1 == photos.length) {
    modal.querySelector(".modal__forward").classList.add("hide_arrows");
  } else {
    modal.querySelector(".modal__forward").classList.remove("hide_arrows");
  }
  if (index == 0) {
    modal.querySelector(".modal__back").classList.add("hide_arrows");
  } else {
    modal.querySelector(".modal__back").classList.remove("hide_arrows");
  }
}

function changeModal(photoSrc) {
  photoSrc = photoSrc.slice(0, -4) + "_.jpg";
  if (!isModal()) {
    createModal(photoSrc);
    createListeners();
  } else {
    const photoImg = document.querySelector(
      ".modal .modal__content .photo img"
    );

    photoImg.src = photoSrc;
    setCurrentPhotoIndex();
  }
  checkArrows();
}

function closeModal() {
  if (isModal()) {
    const modal = document.querySelector(".modal");

    document
      .querySelector(".modal__close")
      .removeEventListener("click", closeModal);

    document
      .querySelector(".modal")
      .removeEventListener("click", modalCloseIfClickedOutside);

    modal
      .querySelector(".modal__back")
      .removeEventListener("click", showPreviousModal);

    modal
      .querySelector(".modal__forward")
      .removeEventListener("click", showNextModal);

    window.removeEventListener("keyup", checkKeyAndshowNextModal);
    document.body.removeChild(modal);
  }
}

function modalCloseIfClickedOutside(evt) {
  const modal = document.querySelector(".modal");
  const button = document.querySelector(".modal__close");
  const insideModal = document.querySelector(".modal__content");
  const modalBack = document.querySelector(".modal__back");
  const modalForward = document.querySelector(".modal__forward");

  if (
    document.body.contains(modal) &&
    evt.target != button &&
    evt.target != insideModal &&
    evt.target != modalBack &&
    evt.target != modalForward &&
    !modalForward.contains(evt.target) &&
    !modalBack.contains(evt.target)
  ) {
    closeModal();
  }
}

function checkKeyAndshowNextModal(event) {
  if (document.querySelector(".modal__content")) {
    if (event.key === "ArrowLeft") {
      showPreviousModal();
    } else if (event.key === "ArrowRight") {
      showNextModal();
    }
  }
}

function createListeners() {
  const modal = document.querySelector(".modal");
  document.querySelector(".modal__close").addEventListener("click", closeModal);

  document
    .querySelector(".modal")
    .addEventListener("click", modalCloseIfClickedOutside);

  modal
    .querySelector(".modal__back")
    .addEventListener("click", showPreviousModal);

  modal
    .querySelector(".modal__forward")
    .addEventListener("click", showNextModal);

  window.addEventListener("keyup", checkKeyAndshowNextModal);
}

export { changeModal };
