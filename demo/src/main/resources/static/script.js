document.getElementById('donorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const bloodType = document.getElementById('bloodType').value;
    const contactInfo = document.getElementById('contactInfo').value;

    const donor = {
        name: name,
        bloodType: bloodType,
        contactInfo: contactInfo
    };

    fetch('http://localhost:8080/donors/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(donor),
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Registration failed');
        }
    })
    .then(data => {
        showNotification('Donor registered successfully!', 'success');
        // Optionally, reset the form fields
        document.getElementById('donorForm').reset();
        // Optionally, load the updated donor list
        loadDonors();
    })
    .catch((error) => {
        showNotification('Error: ' + error.message, 'error');
    });
});

function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = 'notification ' + type;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000); // Hide notification after 3 seconds
}

function loadDonors() {
    // Function to load and display donors (similar to how you would fetch and display them)
    fetch('http://localhost:8080/donors/getall')
        .then(response => response.json())
        .then(data => {
            const donorList = document.getElementById('donorList');
            donorList.innerHTML = ''; // Clear existing list
            data.forEach(donor => {
                const donorDiv = document.createElement('div');
                donorDiv.textContent = `Name: ${donor.name}, Blood Type: ${donor.bloodType}, Contact Info: ${donor.contactInfo}`;
                donorList.appendChild(donorDiv);
                donorList.appendChild(document.createElement('hr'));
            });
        });
}



