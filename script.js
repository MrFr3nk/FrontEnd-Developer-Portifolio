
// Add event listener to hero button
document.querySelector('.hero button').addEventListener('click', () => {
    // Scroll to projects section
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to project cards
document.querySelectorAll('.project').forEach((project) => {
    project.addEventListener('mouseover', () => {
        // Add hover effect
        project.style.transform = 'scale(1.1)';
        project.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
    });

    project.addEventListener('mouseout', () => {
        // Remove hover effect
        project.style.transform = 'scale(1)';
        project.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });
});
