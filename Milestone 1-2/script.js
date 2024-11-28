// Toggle visibility of skills section
document.getElementById("toggle-skills").addEventListener("click", function () {
    const skillsSection = document.getElementById("skills");
    skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
});

// Toggle between light and dark mode
document.getElementById("toggle-theme").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Download resume as PDF (opens print dialog for saving as PDF)
document.getElementById("download-pdf").addEventListener("click", function () {
    window.print();
});
