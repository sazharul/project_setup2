// function toggleMenu(x) {
//     x.classList.toggle("change");
// }

window.toggleMenu = function (x) {
    x.classList.toggle("change");
    // Toggle the hamburger animation

    // Toggle the mobile menu visibility
    const menuSection = document.querySelector('.mobile_menu_section');
    menuSection.classList.toggle('menu-open');

    const body = document.querySelector('body');
    body.classList.toggle('no-scroll');
}