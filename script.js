(function () {
  const images = [
    "nature1",
    "nature2",
    "nature3",
    "nature4",
    "nature5",
    "nature6",
  ];

  const button = document.querySelectorAll(".btn");
  const imageDiv = document.querySelector(".image-container");

  let counter = 0;

  button.forEach(function (btn) {
    btn.addEventListener("click", function (a) {
      if (btn.classList.contains("btn-left")) {
        counter--;
        if (counter < 0) {
          counter = images.length - 1;
        }
        imageDiv.style.background = `url('${images[counter]}.jpg') center/cover fixed no-repeat`;
      }

      if (btn.classList.contains("btn-right")) {
        counter++;
        if (counter > images.length - 1) {
          counter = 0;
        }
        imageDiv.style.background = `url('${images[counter]}.jpg') center/cover fixed no-repeat`;
      }
    });
  });
})();
