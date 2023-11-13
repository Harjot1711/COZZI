function nextStage(stage) {
    // Hide all stages
    document.querySelectorAll('.form-stage').forEach(stageDiv => {
        stageDiv.style.display = 'none';
    });

    // Show the requested stage
    document.getElementById('stage' + stage).style.display = 'block';
}

// Add form submission handling here
document.getElementById('marsApplicationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Gather data from form
    var formData = {
        fullName: document.getElementById('fullName').value,
        dob: document.getElementById('dob').value,
        nationality: document.getElementById('nationality').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        // Repeat for other form fields
    };

    fetch('YOUR_GOOGLE_APPS_SCRIPT_WEBHOOK_URL', {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(formData)
    })
    .then(response => {
        alert('Form submitted successfully!');
        // Handle response...
    })
    .catch(error => {
        alert('There was an error submitting the form!');
        console.error('Error:', error);
    });
});
