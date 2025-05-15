const shareButton = document.querySelector(".share-btn");
const shareNavbar = document.querySelector(".share-nav");

shareButton.addEventListener("click", () => {
  shareNavbar.classList.toggle("active");
  shareButton.classList.toggle("active");
});
