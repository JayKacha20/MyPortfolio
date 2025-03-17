function sendEmail(event) {
    event.preventDefault(); // Prevents default form submission
    
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Construct Gmail mailto URL
    let mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=your-email@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

    // Open Gmail compose window in new tab
    window.open(mailtoLink, '_blank');
}
