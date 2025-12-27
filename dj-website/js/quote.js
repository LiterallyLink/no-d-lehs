// Quote Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    const successMessage = document.getElementById('successMessage');

    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                eventType: document.getElementById('eventType').value,
                eventDate: document.getElementById('eventDate').value,
                eventLocation: document.getElementById('eventLocation').value,
                guestCount: document.getElementById('guestCount').value,
                duration: document.getElementById('duration').value,
                package: document.getElementById('package').value,
                details: document.getElementById('details').value,
                addons: []
            };

            // Collect selected add-ons
            const addonCheckboxes = ['uplighting', 'photobooth', 'projection', 'fog', 'monogram', 'ceremony', 'streaming'];
            addonCheckboxes.forEach(addon => {
                const checkbox = document.getElementById(addon);
                if (checkbox && checkbox.checked) {
                    formData.addons.push(addon);
                }
            });

            // Log form data (in production, this would be sent to a server)
            console.log('Quote Request:', formData);

            // Show success message
            quoteForm.style.display = 'none';
            successMessage.style.display = 'block';

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth' });

            // In production, you would send this data to your server:
            // fetch('/api/quote', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     // Handle success
            // })
            // .catch(error => {
            //     // Handle error
            // });
        });
    }
});
