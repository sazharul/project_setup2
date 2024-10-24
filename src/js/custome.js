window.toggleMenu = function (x) {
    x.classList.toggle("change");
    // Toggle the hamburger animation

    // Toggle the mobile menu visibility
    const menuSection = document.querySelector('.mobile_menu_section');
    menuSection.classList.toggle('menu-open');

    const body = document.querySelector('body');
    body.classList.toggle('no-scroll');
}

// Get modal element
const modal = document.getElementById('myModal');

// Get open modal button
const openModalBtn = document.getElementById('openModalBtn');
const openModalBtn2 = document.getElementById('openModalBtn2');
const openModalBtn3 = document.getElementById('openModalBtn3');
const openModalBtn4 = document.getElementById('openModalBtn4');
const openModalBtn5 = document.getElementById('openModalBtn5');

// Get close button inside modal
const closeBtn = document.querySelector('.close-btn');

// Show the modal
openModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Disable body scroll when modal is open
});
openModalBtn2.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Disable body scroll when modal is open
});
openModalBtn3.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Disable body scroll when modal is open
});
openModalBtn4.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Disable body scroll when modal is open
});

openModalBtn5.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Disable body scroll when modal is open
});

// Hide the modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Re-enable body scroll
});

// Hide modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Re-enable body scroll
    }
});

// Close modal on "Esc" key press
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Re-enable body scroll
    }
});
