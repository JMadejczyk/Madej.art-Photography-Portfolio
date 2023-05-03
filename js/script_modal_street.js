function showModal(photoSrc) {
  const modal = document.createElement("div");

  modal.classList.add("modal");
  modal.innerHTML = `
        <div class="modal__inner">
        <div class="modal__top">
            <button class="modal__close" type="button">
            <span class="material-icons">close</span>
            </button>
        </div>
        <div class="modal__content">
            <button class="modal__back" type="button">
            <span class="material-icons">arrow_back_ios_new</span>
            </button>
            <div class="photo">
            <img src="${
              photoSrc.slice(0, -4) + "_.jpg"
            }" alt="zdj1" class="foto" />
            </div>
            <button class="modal__forward" type="button">
                <span class="material-icons">arrow_forward_ios</span>
            </button>
        </div>
        </div>
      `;

  const photos = [
    "street/Img0001.jpg",
    "street/Img0006.jpg",
    "street/Img0003.jpg",
    "street/Img0007.jpg",
    "street/Img0004.jpg",
    "street/Img0005.jpg",
    "street/Img0002.jpg",
  ];

  const photos_small = [
    "street/Img0001.jpg",
    "street/Img0007.jpg",
    "street/Img0003.jpg",
    "street/Img0004.jpg",
    "street/Img0005.jpg",
    "street/Img0006.jpg",
    "street/Img0002.jpg",
  ];

  modal.querySelector(".modal__close").addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  document.body.appendChild(modal);
  document.querySelector(".modal").addEventListener("click", (evt) => {
    let button = document.querySelector(".modal__close");
    let insideModal = document.querySelector(".modal__content");
    let modalBack = document.querySelector(".modal__back");
    let modalForward = document.querySelector(".modal__forward");
    // let modalIcons = document.querySelector("span.material-icons");

    // console.log(evt.target);
    if (
      document.body.contains(modal) &&
      evt.target != button &&
      evt.target != insideModal &&
      evt.target != modalBack &&
      evt.target != modalForward &&
      !modalForward.contains(evt.target) &&
      !modalBack.contains(evt.target)
    ) {
      // console.log("usunięto modal");
      document.body.removeChild(modal);
    }
  });

  if (window.innerWidth > 800) {
    let whole_source = document.querySelector(
      "div.modal__content div.photo img.foto"
    ).src;
    let source = whole_source.substring(whole_source.search("street"));
    // console.log(source);
    let index = photos.indexOf(source.replace("_", ""));

    modal.querySelector(".modal__back").addEventListener("click", () => {
      // console.log("Previous");
      if (index != 0) {
        document.body.removeChild(modal);
        showModal(photos[index - 1]);
      }
    });

    modal.querySelector(".modal__forward").addEventListener("click", () => {
      // console.log("Next");

      if (index + 1 != photos.length) {
        document.body.removeChild(modal);
        showModal(photos[index + 1]);
      }
    });

    if (index + 1 == photos.length) {
      modal.querySelector(".modal__forward").classList.add("hide_arrows");
    }
    if (index == 0) {
      modal.querySelector(".modal__back").classList.add("hide_arrows");
    }
  } else {
    let whole_source_ = document.querySelector(
      "div.modal__content div.photo img.foto"
    ).src;
    let source_ = whole_source_.substring(whole_source_.search("street"));
    // console.log(source_);
    let index_ = photos_small.indexOf(source_.replace("_", ""));

    modal.querySelector(".modal__back").addEventListener("click", () => {
      // console.log("Previous");
      if (index_ != 0) {
        document.body.removeChild(modal);
        showModal(photos_small[index_ - 1]);
      }
    });

    modal.querySelector(".modal__forward").addEventListener("click", () => {
      // console.log("Next");

      if (index_ + 1 != photos_small.length) {
        document.body.removeChild(modal);
        showModal(photos_small[index_ + 1]);
      }
    });

    if (index_ + 1 == photos_small.length) {
      modal.querySelector(".modal__forward").classList.add("hide_arrows");
    }
    if (index_ == 0) {
      modal.querySelector(".modal__back").classList.add("hide_arrows");
    }
  }
}
