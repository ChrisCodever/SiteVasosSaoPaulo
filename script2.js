
function openModal(image) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = image.src;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}







