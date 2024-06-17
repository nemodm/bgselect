let btns = document.querySelectorAll(".btn");
let navbar = document.querySelector(".navbar");

btns.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.style.background = item.getAttribute("data-color");
  });
});
