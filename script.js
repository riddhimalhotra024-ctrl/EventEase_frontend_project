function openModal(category) {
  const modal = document.getElementById(category + "Modal");
  if (modal) modal.style.display = "block";
}

function closeModal(category) {
  const modal = document.getElementById(category + "Modal");
  if (modal) modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
