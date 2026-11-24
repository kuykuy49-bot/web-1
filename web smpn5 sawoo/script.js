// ==================================================
// SCRIPT.JS
// JavaScript website SMPN 5 Sawoo
// ==================================================
// Membuka dan menutup menu HP
var menuButton = document.getElementById("menu-button");
var mainMenu = document.getElementById("main-menu");

menuButton.addEventListener("click", function () {
    mainMenu.classList.toggle("show");
});

// Menutup menu setelah salah satu link diklik
var menuLinks = mainMenu.querySelectorAll("a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mainMenu.classList.remove("show");
    });
});


// ==============================
// MODAL BERITA
// ==============================

var newsModal = document.getElementById("news-modal");
var modalTitle = document.getElementById("modal-title");
var modalText = document.getElementById("modal-text");

// Fungsi untuk membuka berita
function openNews(judul, isi) {
    modalTitle.innerText = judul;
    modalText.innerText = isi;
    newsModal.classList.add("show");
}

// Fungsi untuk menutup berita
function closeNews() {
    newsModal.classList.remove("show");
}

// Menutup modal jika area luar kotak diklik
newsModal.addEventListener("click", function (event) {
    if (event.target === newsModal) {
        closeNews();
    }
});


// ==============================
// FORM KONTAK
// ==============================

var contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Terima kasih. Pesan Anda sudah dicatat pada halaman ini.");

    contactForm.reset();
});
