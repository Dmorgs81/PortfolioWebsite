// Function to show specific sections when clicked
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the clicked section
    const section = document.getElementById(sectionId);
    section.style.display = 'block';

    // Add smooth transition
    setTimeout(() => {
        section.style.opacity = '1';
    }, 50);
}

// Initial Section Load
document.addEventListener("DOMContentLoaded", () => {
    showSection('profile'); // Show Profile section by default
});
