// function openImg(src) {
//   // window.open(src);
//   location.href = src.slice(0, -4) + "_.jpg";
// }
let divvv = document.querySelectorAll("div");
divvv.forEach((el) => {
  el.classList.add("disable-select");
});

const photos = [
  "images/Img0801.jpg",
  "images/Img0802.jpg",
  "images/Img0803.jpg",
  "images/Img0819.jpg",
  "images/Img0820.jpg",
  "images/Img0818.jpg",
  "images/Img0804.jpg",
  "images/Img0805.jpg",
  "images/Img0806.jpg",
  "images/Img0807.jpg",
  "images/Img0808.jpg",
  "images/Img0809.jpg",
  "images/Img0810.jpg",
  "images/Img0811.jpg",
  "images/Img0812.jpg",
  "images/Img0813.jpg",
  "images/Img0814.jpg",
  "images/Img0815.jpg",
  "images/Img0816.jpg",
  "images/Img0817.jpg",
  "images/Img0821.jpg",

  "images/Img0703.jpg",
  "images/Img0702.jpg",
  // "images/Img0701.jpg",
  "images/Img0704.jpg",
  "images/Img0700.jpg",

  "images/Img0607.jpg",
  "images/Img0605.jpg",
  "images/Img0600.jpg",
  // "images/Img0601.jpg",
  "images/Img0608.jpg",
  "images/Img0603.jpg",
  "images/Img0604.jpg",
  "images/Img0602.jpg",
  "images/Img0606.jpg",
  "images/Img0500.jpg",
  "images/Img0501.jpg",
  "images/Img0502.jpg",
  "images/Img0503.jpg",
  "images/Img0504.jpg",
  "images/Img0505.jpg",
  "images/Img0506.jpg",
  "images/Img0507.jpg",
  "images/Img0508.jpg",
  "images/Img0509.jpg",
  "images/Img0510.jpg",
  "images/Img0511.jpg",
  "images/Img0512.jpg",
  "images/Img0513.jpg",

  "images/Img0400.jpg",
  "images/Img0401.jpg",
  "images/Img0402.jpg",
  "images/Img0406.jpg",

  "images/Img0404.jpg",
  "images/Img0408.jpg",
  "images/Img0412.jpg",
  "images/Img0407.jpg",

  "images/Img0414.jpg",
  // "images/Img0409.jpg",
  "images/Img0410.jpg",
  // "images/Img0411.jpg",
  "images/Img0403.jpg",
  "images/Img0413.jpg",

  "images/Img0405.jpg",

  "images/Img0305.jpg",
  "images/Img0300.jpg",
  // "images/Img0301.jpg",
  "images/Img0302.jpg",
  // "images/Img0303.jpg",
  "images/Img0304.jpg",

  "images/Img0200.jpg",
  "images/Img0201.jpg",
  // "images/Img0205.jpg",
  "images/Img0203.jpg",
  "images/Img0211.jpg",
  // "images/Img0202.jpg",
  "images/Img0207.jpg",
  "images/Img0206.jpg",
  // "images/Img0208.jpg",
  "images/Img0209.jpg",
  "images/Img0210.jpg",

  "images/Img0100.jpg",
  // "images/Img0204.jpg",
  // "images/Img0102.jpg",
  "images/Img0103.jpg",
  // "images/Img0104.jpg",
  "images/Img0108.jpg",
  "images/Img0106.jpg",
  "images/Img0107.jpg",
  "images/Img0109.jpg",
  // "images/Img0111.jpg",
  "images/Img0110.jpg",
  // "images/Img0101.jpg",
  // "images/Img0105.jpg",

  // "images/DSC02003.jpg",
  "images/Img0055.jpg",
  // "images/Img0064.jpg",
  // "images/Img0004.jpg",
  // "images/Img0051.jpg",
  // "images/Img0063.jpg",
  // "images/Img0059.jpg",
  // "images/DSC02045.jpg",
  // "images/DSC02026.jpg",
  // "images/DSC02023.jpg",
  // "images/DSC01797.jpg",
  // "images/DSC01953.jpg",
  // "images/DSC01684.jpg",
  // "images/Img0006.jpg",
  // "images/Img0002.jpg",
  // "images/Img0003.jpg",
  // "images/Img0001.jpg",
  // "images/Img0007.jpg",
  // "images/Img0010.jpg",
  // "images/Img0008.jpg",
  // "images/Img0005.jpg",
  // "images/Img0009.jpg",
  // "images/Img0014.jpg",
  // "images/Img0011.jpg",
  // "images/Img0015.jpg",
  // "images/Img0013.jpg",
];

const photos_small = [
  "images/Img0801.jpg",
  "images/Img0802.jpg",
  "images/Img0803.jpg",
  "images/Img0819.jpg",
  "images/Img0820.jpg",
  "images/Img0818.jpg",
  "images/Img0804.jpg",
  "images/Img0805.jpg",
  "images/Img0806.jpg",
  "images/Img0807.jpg",
  "images/Img0808.jpg",
  "images/Img0809.jpg",
  "images/Img0810.jpg",
  "images/Img0811.jpg",
  "images/Img0812.jpg",
  "images/Img0813.jpg",
  "images/Img0814.jpg",
  "images/Img0815.jpg",
  "images/Img0816.jpg",
  "images/Img0817.jpg",
  "images/Img0821.jpg",

  "images/Img0703.jpg",
  "images/Img0702.jpg",
  // "images/Img0701.jpg",
  "images/Img0704.jpg",
  "images/Img0700.jpg",

  "images/Img0607.jpg",
  "images/Img0605.jpg",
  "images/Img0600.jpg",
  // "images/Img0601.jpg",
  "images/Img0608.jpg",
  "images/Img0603.jpg",
  "images/Img0604.jpg",
  "images/Img0602.jpg",
  "images/Img0606.jpg",
  "images/Img0500.jpg",
  "images/Img0501.jpg",
  "images/Img0502.jpg",
  "images/Img0503.jpg",
  "images/Img0504.jpg",
  "images/Img0505.jpg",
  "images/Img0506.jpg",
  "images/Img0507.jpg",
  "images/Img0508.jpg",
  "images/Img0509.jpg",
  "images/Img0510.jpg",
  "images/Img0511.jpg",
  "images/Img0512.jpg",
  "images/Img0513.jpg",

  "images/Img0400.jpg",
  "images/Img0401.jpg",
  "images/Img0402.jpg",
  "images/Img0406.jpg",

  "images/Img0404.jpg",
  "images/Img0408.jpg",
  "images/Img0412.jpg",
  "images/Img0407.jpg",

  "images/Img0414.jpg",
  // "images/Img0409.jpg",
  "images/Img0410.jpg",
  // "images/Img0411.jpg",
  "images/Img0403.jpg",
  "images/Img0413.jpg",

  "images/Img0405.jpg",

  "images/Img0305.jpg",
  "images/Img0300.jpg",
  // "images/Img0301.jpg",
  "images/Img0302.jpg",
  // "images/Img0303.jpg",
  "images/Img0304.jpg",

  "images/Img0200.jpg",
  "images/Img0201.jpg",
  // "images/Img0205.jpg",
  "images/Img0203.jpg",
  "images/Img0211.jpg",
  // "images/Img0202.jpg",
  "images/Img0207.jpg",
  "images/Img0206.jpg",
  // "images/Img0208.jpg",
  "images/Img0209.jpg",
  "images/Img0210.jpg",

  "images/Img0100.jpg",
  // "images/Img0204.jpg",
  // "images/Img0102.jpg",
  "images/Img0103.jpg",
  // "images/Img0104.jpg",
  "images/Img0108.jpg",
  "images/Img0106.jpg",
  "images/Img0107.jpg",
  "images/Img0109.jpg",
  // "images/Img0111.jpg",
  "images/Img0110.jpg",
  // "images/Img0101.jpg",
  // "images/Img0105.jpg",

  // "images/DSC02003.jpg",
  "images/Img0055.jpg",
  // "images/Img0064.jpg",
  // "images/Img0004.jpg",
  // "images/Img0051.jpg",
  // "images/Img0063.jpg",
  // "images/Img0059.jpg",
  // "images/DSC02045.jpg",
  // "images/DSC02026.jpg",
  // "images/DSC02023.jpg",
  // "images/DSC01797.jpg",
  // "images/DSC01953.jpg",
  // "images/DSC01684.jpg",
  // "images/Img0006.jpg",
  // "images/Img0002.jpg",
  // "images/Img0003.jpg",
  // "images/Img0001.jpg",
  // "images/Img0007.jpg",
  // "images/Img0010.jpg",
  // "images/Img0008.jpg",
  // "images/Img0005.jpg",
  // "images/Img0009.jpg",
  // "images/Img0014.jpg",
  // "images/Img0011.jpg",
  // "images/Img0015.jpg",
  // "images/Img0013.jpg",
];

setTimeout(function () {
  document.body.className = "";
}, 350);

let i = 1;
photos.forEach((zdj) => {
  let div = document.createElement("div");
  div.classList.add("photo");
  div.classList.add("disable-select");
  document.querySelector(`#s${i}`).appendChild(div);
  let img = document.createElement("img");
  img.setAttribute("src", zdj);
  img.setAttribute("alt", "Zdjęcie");
  img.setAttribute("onClick", "showModal(src)");
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
  div.classList.add("disable-select");
  document.querySelector(`#s${j}smol`).appendChild(div);
  let img = document.createElement("img");
  img.setAttribute("src", zdj);
  img.setAttribute("alt", "Zdjęcie");
  img.setAttribute("onClick", "showModal(src)");
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
    // console.log("Dupa dupa");
    document.querySelector("#menu").classList.remove("show");
    document.querySelector("#menu").classList.add("hide");
  }
});
