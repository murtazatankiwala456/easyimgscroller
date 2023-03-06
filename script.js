const galleryContainer = document.querySelector(".gallery");
const backBtn = document.querySelector("#backBtn");
const nextBtn = document.querySelector("#nextBtn");
// when back button is click the galleryContainer translate by -900px as the width of gallery is 900px
backBtn.addEventListener("click", () => {
  galleryContainer.style.scrollBehavior = "smooth";
  galleryContainer.scrollLeft = -900;
});
// when next button is click the galleryContainer translate by +900px as the width of gallery is 900px
nextBtn.addEventListener("click", () => {
  galleryContainer.style.scrollBehavior = "smooth";
  galleryContainer.scrollLeft = +900;
});
