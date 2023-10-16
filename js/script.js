import { setModalType, showModal } from "./script_modal.js";

// setModalType("portraits").then((data) => {
//   console.log(data);
// });
// console.log(photos);

function show_photos(site) {
  setModalType(site);

  fetch(`../json/${site}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      let photos = data["photos"];
      let photos_small = data["photos_small"];

      setTimeout(function () {
        document.body.className = "";
      }, 350);

      let images = [];
      photos.forEach((zdj) => {
        let img = document.createElement("img");
        // img.setAttribute("data-src", zdj); //tutaj musi byc docelowe zdjecie
        //rozwazyc uzycie data-srcset (to be done)
        img.setAttribute("src", zdj); //zblurowany placeholder
        img.setAttribute("alt", "Zdjęcie");
        img.setAttribute("loading", "lazy");
        img.classList.add("foto");

        img.addEventListener("click", () => {
          showModal(zdj);
        });
        images.push(img);
      });

      let ii = 1;
      function show_3_rows_images(jj) {
        let div = document.createElement("div");
        div.classList.add("photo");
        div.classList.add("disable-select");

        let img = document.createElement("img");
        img = images[jj++];
        if (typeof img != "undefined") {
          div.appendChild(img);
        }

        document.querySelector(`#s${ii}`).appendChild(div);
        let descr = document.createElement("div");
        descr.classList.add("descr");
        descr.innerText = "Kliknij, aby powiększyć";
        div.appendChild(descr);

        if (typeof img != "undefined") {
          img.onload = function () {
            ii++;
            if (ii == 4) {
              ii = 1;
            }
            show_3_rows_images(jj);
          };
          img.src = images[jj - 1].src;
        }
      }
      show_3_rows_images(0);

      let images_small = [];
      photos_small.forEach((zdj) => {
        let img = document.createElement("img");
        // img.setAttribute("data-src", zdj); //tutaj musi byc docelowe zdjecie
        //rozwazyc uzycie data-srcset (to be done)
        img.setAttribute("src", zdj); //zblurowany placeholder
        img.setAttribute("alt", "Zdjęcie");
        img.setAttribute("loading", "lazy");
        img.classList.add("foto");

        img.addEventListener("click", () => {
          showModal(zdj);
        });
        images_small.push(img);
      });

      let dd = 1;
      function show_2_rows_images(kk) {
        let div = document.createElement("div");
        div.classList.add("photo");
        div.classList.add("disable-select");

        let img = document.createElement("img");
        img = images_small[kk++];
        if (typeof img != "undefined") {
          div.appendChild(img);
        }

        document.querySelector(`#s${dd}smol`).appendChild(div);
        let descr = document.createElement("div");
        descr.classList.add("descr");
        descr.innerText = "Kliknij, aby powiększyć";
        div.appendChild(descr);

        if (typeof img != "undefined") {
          img.onload = function () {
            dd++;
            if (dd == 3) {
              dd = 1;
            }
            show_2_rows_images(kk);
          };
          img.src = images_small[kk - 1].src;
        }
      }
      show_2_rows_images(0);

      document
        .querySelector("#navigation_button")
        .addEventListener("click", function () {
          if (document.querySelector("#menu").classList.contains("show")) {
            document.querySelector("#menu").classList.replace("show", "hide");
          } else {
            document.querySelector("#menu").classList.add("show");
            document.querySelector("#menu").classList.remove("hide");
          }
        });

      document.querySelector("body").addEventListener("click", (evt) => {
        let button = document.querySelector("#navigation_button");
        let menu = document.querySelector("#menu");
        if (
          evt.target != button &&
          !button.contains(evt.target) &&
          evt.target != menu &&
          !menu.contains(evt.target)
        ) {
          document.querySelector("#menu").classList.remove("show");
          document.querySelector("#menu").classList.add("hide");
        }
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

export { show_photos };
// show_photos("portraits");

let divvv = document.querySelectorAll("div");
divvv.forEach((el) => {
  el.classList.add("disable-select");
});
