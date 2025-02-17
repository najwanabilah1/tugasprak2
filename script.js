document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // Cek apakah pengguna sebelumnya memilih dark mode
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        themeIcon.textContent = "🌙"; // Ubah ikon ke mode gelap
    }

    // Toggle Dark Mode
    themeToggle.addEventListener("change", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            themeIcon.textContent = "☀️";
            localStorage.setItem("dark-mode", "disabled"); // Simpan preferensi
        } else {
            body.classList.add("dark-mode");
            themeIcon.textContent = "🌙";
            localStorage.setItem("dark-mode", "enabled"); // Simpan preferensi
        }
    });
});
