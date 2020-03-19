const moreBtn = document.querySelector(".moreBtn");
const title = document.querySelector(".title");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
