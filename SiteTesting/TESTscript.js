document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page from refreshing

    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const feedback = document.getElementById('formFeedback');

    // Simulate sending data to a server or CRM database
    feedback.textContent = `Thank you, ${name}! We have sent a confirmation details to ${email}.`;
    feedback.className = "success-msg";

    // Clear input fields
    this.reset();
});
