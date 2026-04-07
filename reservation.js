// Reservation System
let reservations = JSON.parse(localStorage.getItem('restaurantReservations')) || [];

document.addEventListener('DOMContentLoaded', function() {
    initReservationForm();
    loadReservations();
});

// Initialize Reservation Form
function initReservationForm() {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('reservationDate').setAttribute('min', today);
    
    // Time validation (restaurant hours: 11AM - 11PM)
    const timeInput = document.getElementById('reservationTime');
    timeInput.addEventListener('change', validateTime);
    
    // Form submission
    const form = document.getElementById('reservationForm');
    if (form) {
        form.addEventListener('submit', handleReservationSubmit);
    }
}

// Form Validation
function validateReservationForm(formData) {
    const errors = [];
    
    // Name validation
    const name = formData.get('name').trim();
    if (!name || name.length < 2) {
        errors.push('Name must be at least 2 characters');
    }
    
    // Email validation
    const email = formData.get('email').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('Please enter a valid email address');
    }
    
    // Phone validation
    const phone = formData.get('phone').trim();
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        errors.push('Please enter a valid phone number');
    }
    
    // Guests validation
    const guests = parseInt(formData.get('guests'));
    if (guests < 1 || guests > 20) {
        errors.push('Number of guests must be between 1 and 20');
    }
    
    return errors;
}

// Handle Form Submission
function handleReservationSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const errors = validateReservationForm(formData);
    
    if (errors.length > 0) {
        showReservationError(errors.join(', '));
        return;
    }
    
    // Create reservation object
    const reservation = {
        id: 'RES' + Date.now(),
        name: formData.get('name').trim(),
        phone: formData.get('phone').trim(),
        email: formData.get('email').trim(),
        date: formData.get('date'),
        time: formData.get('time'),
        guests: parseInt(formData.get('guests')),
        specialRequest: formData.get('specialRequest').trim(),
        status: 'Pending',
        createdAt: new Date().toISOString()
    };
    
    // Save reservation
    reservations.unshift(reservation);
    localStorage.setItem('restaurantReservations', JSON.stringify(reservations));
    
    // Show success
    showReservationSuccess(reservation);
    
    // Reset form
    e.target.reset();
}

// Show Success Modal
function showReservationSuccess(reservation) {
    const successModal = document.getElementById('successModal');
    if (successModal) {
        document.getElementById('successMessage').innerHTML = `
            <strong>Reservation Confirmed!</strong><br>
            <small>Reservation ID: <strong>${reservation.id}</strong></small><br><br>
            <p><strong>Date:</strong> ${formatDate(reservation.date)} at ${reservation.time}</p>
            <p><strong>Guests:</strong> ${reservation.guests}</p>
            <p><strong>Name:</strong> ${reservation.name}</p>
            <p class="mb-0"><strong>Phone:</strong> ${reservation.phone}</p>
        `;
        
        const modal = new bootstrap.Modal(successModal);
        modal.show();
    }
}

// Show Error
function showReservationError(message) {
    const alert = document.getElementById('formAlert');
    if (alert) {
        alert.textContent = message;
        alert.classList.remove('d-none');
        alert.classList.add('show');
        
        setTimeout(() => {
            alert.classList.remove('show');
            setTimeout(() => alert.classList.add('d-none'), 300);
        }, 5000);
    }
}

// Time Validation (11AM - 11PM)
function validateTime() {
    const time = document.getElementById('reservationTime').value;
    const [hours, minutes] = time.split(':').map(Number);
    
    const now = new Date();
    const today = now.toISOString()}