let lastSubmissionTime = 0;
const SUBMISSION_COOLDOWN = 5000; // 5000 milliseconds = 5 seconds

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    if (!form) {
        console.error('Contact form not found!');
        return;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Form submitted');

        const currentTime = Date.now();
        if (currentTime - lastSubmissionTime < SUBMISSION_COOLDOWN) {
            console.log('Submission too soon');
            alert('Please wait a few seconds before submitting again.');
            return;
        }

        lastSubmissionTime = currentTime;

        console.log('Attempting to send email');
        // These IDs from the previous steps
        emailjs.sendForm('NEXT_SERVICE_ID', 'NEXT_TEMPLATE_ID', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Message sent successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again.');
            });
    });
});