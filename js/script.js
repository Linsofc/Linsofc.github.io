fetch("../shop.html")
    .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat shop.html");
        return res.text();
    })
    .then((data) => {
        document.getElementById("shop-section").innerHTML = data;
    })
    .catch((err) => console.error("Fetch error:", err));

fetch("../script.html")
    .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat script.html");
        return res.text();
    })
    .then((data) => {
        document.getElementById("free-section").innerHTML = data;
    })
    .catch((err) => console.error("Fetch error:", err));

fetch("../contact.html")
    .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat contact.html");
        return res.text();
    })
    .then((data) => {
        document.getElementById("contact").innerHTML = data;
    })
    .catch((err) => console.error("Fetch error:", err));


// Navbar Start
const menu = document.querySelector('.menu')
const hamburger = document.querySelector('.hamburger')
const faBars = document.querySelector('.fa-bars')
const fsXmark = document.querySelector('.fa-xmark')

hamburger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');

    if (isOpen) {
        faBars.style.display = 'none';
        fsXmark.style.display = 'inline';
    } else {
        faBars.style.display = 'inline';
        fsXmark.style.display = 'none';
    }
});