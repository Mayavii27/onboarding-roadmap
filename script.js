document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const assessment = document.getElementById('assessment');
    checkboxes.forEach(checkbox => {
        const id = checkbox.id;
        const checked = localStorage.getItem(id) === 'true';
        checkbox.checked = checked;

        // Show assessment link based on course completion
        if (checkbox.id === 'course1' && checked) {
            // Do something if necessary
        }
        if (checkbox.id === 'course2' && checked && document.getElementById('course1').checked) {
            assessment.style.display = 'block';
        }
    });
});

function markComplete(checkbox) {
    const id = checkbox.id;
    localStorage.setItem(id, checkbox.checked);
    const assessment = document.getElementById('assessment');

    // Show assessment link based on course completion
    if (checkbox.id === 'course1' && document.getElementById('course2').checked) {
        assessment.style.display = 'block';
    } else if (checkbox.id === 'course2' && checkbox.checked && document.getElementById('course1').checked) {
        assessment.style.display = 'block';
    } else {
        assessment.style.display = 'none';
    }
}
