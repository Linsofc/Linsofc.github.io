const searchInput = document.getElementById("searchInput");
const productContainer = document.getElementById("productContainer");
const products = Array.from(document.getElementsByClassName("product"));
const scripts = Array.from(document.getElementsByClassName("script"));

// Fungsi untuk filter produk dan script secara real-time
searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();

  // Filter produk
  products.forEach((product) => {
    const title = product.querySelector("h2").textContent.toLowerCase();
    if (title.includes(query)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });

  // Filter script bot
  scripts.forEach((script) => {
    const title = script.querySelector("h2").textContent.toLowerCase();
    if (title.includes(query)) {
      script.style.display = "block";
    } else {
      script.style.display = "none";
    }
  });
});

// Modal functionality
function openModal(imageElement) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imageElement.src;
  modal.style.display = "flex";
}

function closeModal(event) {
  if (
    event.target.id === "imageModal" ||
    event.target.classList.contains("close-btn")
  ) {
    document.getElementById("imageModal").style.display = "none";
  }
}
