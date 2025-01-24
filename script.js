// Example of basic contact form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        // Here, you could also send the form data to a backend (e.g., using Fetch API)
    } else {
        alert('Please fill out all fields.');
    }
});
