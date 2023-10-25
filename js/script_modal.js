//how to make a global object?
let photos = [];
let photos_small = [];
async function setModalType(modalType) {
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
// setModalType("portraits");

export { setModalType };

function showModal(photoSrc) {
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
      "div.modal__content div.photo img.foto_large"
    ).src;

    let source = "";
    if (whole_source.search("images") != -1) {
      source = whole_source.substring(whole_source.search("images"));
    } else if (whole_source.search("landscapes") != -1) {
      source = whole_source.substring(whole_source.search("landscapes"));
    } else if (whole_source.search("street") != -1) {
      source = whole_source.substring(whole_source.search("street"));
    }

    let index = photos.indexOf(source.replace("_", ""));

    const showNextModal = () => {
      if (index + 1 != photos_small.length) {
        document.body.removeChild(modal);
        showModal(photos[index + 1]);
      }
    };
    const showPreviousModal = () => {
      if (index != 0) {
        document.body.removeChild(modal);
        showModal(photos[index - 1]);
      }
    };

    modal.querySelector(".modal__back").addEventListener("click", () => {
      showPreviousModal();
    });

    modal.querySelector(".modal__forward").addEventListener("click", () => {
      showNextModal();
    });

    if (index + 1 == photos.length) {
      modal.querySelector(".modal__forward").classList.add("hide_arrows");
    }
    if (index == 0) {
      modal.querySelector(".modal__back").classList.add("hide_arrows");
    }
  } else {
    let whole_source_ = document.querySelector(
      "div.modal__content div.photo img.foto_large"
    ).src;

    let source_ = "";
    if (whole_source_.search("images") != -1) {
      source_ = whole_source_.substring(whole_source_.search("images"));
    } else if (whole_source_.search("landscapes") != -1) {
      source_ = whole_source_.substring(whole_source_.search("landscapes"));
    } else if (whole_source_.search("street") != -1) {
      source_ = whole_source_.substring(whole_source_.search("street"));
    }

    let index_ = photos_small.indexOf(source_.replace("_", ""));

    const showNextSmallModal = () => {
      if (index_ + 1 != photos_small.length) {
        document.body.removeChild(modal);
        showModal(photos_small[index_ + 1]);
      }
    };
    const showPreviousSmallModal = () => {
      if (index_ != 0) {
        document.body.removeChild(modal);
        showModal(photos_small[index_ - 1]);
      }
    };

    // window.addEventListener("keydown", (event) => {
    //   if (document.querySelector(".modal__content")) {
    //     if (event.key === "ArrowLeft") {
    //       console.log("left");

    //       showPreviousModal();
    //     } else if (event.key === "ArrowRight") {
    //       console.log("right");

    //       showNextModal();
    //     }
    //   }
    // });

    modal.querySelector(".modal__back").addEventListener("click", () => {
      showPreviousSmallModal();
    });

    modal.querySelector(".modal__forward").addEventListener("click", () => {
      // console.log("Next");
      showNextSmallModal();
    });

    if (index_ + 1 == photos_small.length) {
      modal.querySelector(".modal__forward").classList.add("hide_arrows");
    }
    if (index_ == 0) {
      modal.querySelector(".modal__back").classList.add("hide_arrows");
    }
  }
}

export { showModal };
