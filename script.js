const searchInput = document.getElementById("searchInput");
const productContainer = document.getElementById("productContainer");
const products = Array.from(document.getElementsByClassName("product"));
const scripts = Array.from(document.getElementsByClassName("script"));

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();

  products.forEach((product) => {
    const title = product.querySelector("h2").textContent.toLowerCase();
    if (title.includes(query)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });

  scripts.forEach((script) => {
    const title = script.querySelector("h2").textContent.toLowerCase();
    if (title.includes(query)) {
      script.style.display = "block";
    } else {
      script.style.display = "none";
    }
  });
});

function openModal(imageElement) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imageElement.src;
  modal.style.display = "flex";
}

function closeModal(event) {
  if (
    event.target.id === "imageModal" ||
    event.target.classList.contains("modal-close")
  ) {
    document.getElementById("imageModal").style.display = "none";
  }
}

function toggleMenu() {
  const navbarLinks = document.getElementById("navbarLinks");
  const navbarOverlay = document.getElementById("navbarOverlay");
  navbarLinks.classList.toggle("active"); 
  navbarOverlay.classList.toggle("active"); 
}

function closeMenu() {
  const navbarLinks = document.getElementById("navbarLinks");
  const navbarOverlay = document.getElementById("navbarOverlay");
  navbarLinks.classList.remove("active"); 
  navbarOverlay.classList.remove("active"); 
}

function toggleMode(event) {
  event.preventDefault(); // Mencegah # dari mengarahkan ke atas
  
  const body = document.body;
  const toggleButton = document.getElementById("toggle-button");

  // Toggle mode
  const isDarkMode = body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode", !isDarkMode);

  // Ubah teks tombol
  toggleButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

  // Simpan mode ke localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Set mode saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const toggleButton = document.getElementById("toggle-button");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "Light Mode";
  } else {
    body.classList.add("light-mode");
    toggleButton.textContent = "Dark Mode";
  }
});

