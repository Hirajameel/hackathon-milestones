// Toggle visibility for Skills section
const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    } else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});

// Toggle Dark Mode
const toggleThemeButton = document.getElementById('toggle-theme') as HTMLButtonElement;

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    toggleThemeButton.textContent = `Switch to ${theme}`;
});

// Function to download the resume as a PDF (Stub function)
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

downloadPdfButton.addEventListener('click', () => {
    generatePdf();
});

function generatePdf(): void {
    // This function would contain logic for PDF generation.
    // Libraries like jsPDF or html2canvas can be used to export the page as a PDF.
    alert('PDF download functionality is not implemented yet.');
}
