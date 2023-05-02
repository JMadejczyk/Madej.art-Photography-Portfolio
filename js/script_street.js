function openImg(src) {
  // window.open(src);
  location.href = src.slice(0, -4) + "_.jpg";
}

const photos = [
  "street/Img0001.jpg",
  "street/Img0006.jpg",
  "street/Img0003.jpg",
  "street/Img0007.jpg",

  "street/Img0004.jpg",
  "street/Img0005.jpg",
  "street/Img0002.jpg",
  ,
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

setTimeout(function () {
  document.body.className = "";
}, 350);

let i = 1;
photos.forEach((zdj) => {
  let div = document.createElement("div");
  div.classList.add("photo");
  document.querySelector(`#s${i}`).appendChild(div);
  let img = document.createElement("img");
  img.setAttribute("src", zdj);
  img.setAttribute("alt", "Zdjęcie");
  img.setAttribute("onClick", "openImg(src)");
  img.classList.add("foto");
  div.appendChild(img);

  let descr = document.createElement("div");
  descr.classList.add("descr");
  descr.innerText = "Kliknij, aby powiększyć";

  div.appendChild(descr);

  i++;
  if (i == 4) {
    i = 1;
  }
});

let j = 1;
photos_small.forEach((zdj) => {
  let div = document.createElement("div");
  div.classList.add("photo");
  document.querySelector(`#s${j}smol`).appendChild(div);
  let img = document.createElement("img");
  img.setAttribute("src", zdj);
  img.setAttribute("alt", "Zdjęcie");
  img.setAttribute("onClick", "openImg(src)");
  img.classList.add("foto");
  div.appendChild(img);

  let descr = document.createElement("div");
  descr.classList.add("descr");
  // descr.innerText = "Kliknij, aby otworzyć w większej rozdzielczości";
  descr.innerText = "Kliknij, aby powiększyć";

  div.appendChild(descr);

  j++;
  if (j == 3) {
    j = 1;
  }
});

// let show = false;
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
  // console.log(evt);
  let button = document.querySelector("#navigation_button");
  let menu = document.querySelector("#menu");
  if (
    evt.target != button &&
    !button.contains(evt.target) &&
    evt.target != menu &&
    !menu.contains(evt.target)
  ) {
    console.log("Dupa dupa");
    document.querySelector("#menu").classList.remove("show");
    document.querySelector("#menu").classList.add("hide");
  }
});
