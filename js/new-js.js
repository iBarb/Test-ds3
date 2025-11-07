// Image gallery functionality
function changeMainImage(src) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = src;

    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.grid.grid-cols-3 > div');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('border-blue-500', 'border-2');
        thumb.classList.add('border-gray-200', 'border-2');
    });
    event.currentTarget.parentElement.classList.remove('border-gray-200');
    event.currentTarget.parentElement.classList.add('border-blue-500');
}

// Modal functionality
function openImageModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = src;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Close modal with ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeImageModal();
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.getElementById("menuIcon");

    if (mobileMenu.classList.contains("max-h-0")) {
        // Abrir menú
        mobileMenu.classList.remove("max-h-0");
        mobileMenu.classList.add("max-h-[300px]"); // puedes ajustar la altura
        menuIcon.classList.replace("fa-bars", "fa-times");
    } else {
        // Cerrar menú
        mobileMenu.classList.remove("max-h-[300px]");
        mobileMenu.classList.add("max-h-0");
        menuIcon.classList.replace("fa-times", "fa-bars");
    }
}

// Accordion functionality
function toggleAccordion(accordionId) {
    const content = document.getElementById(accordionId);
    const icon = document.getElementById(accordionId + '-icon');

    if (content.classList.contains('active')) {
        // Cerrar
        content.classList.remove('active');
        icon.classList.remove('rotate');
    } else {
        // Abrir
        content.classList.add('active');
        icon.classList.add('rotate');
    }
}

// Initialize first accordion as open on page load
document.addEventListener('DOMContentLoaded', function() {
    const firstAccordion = document.getElementById('accordion-1');
    const firstIcon = document.getElementById('accordion-1-icon');
    if (firstAccordion && firstIcon) {
        firstAccordion.classList.add('active');
        firstIcon.classList.add('rotate');
    }
});