document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const toggle = document.getElementById('toggle');
    const navbarMenu = document.getElementById('navMenu');
    
    toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
    
    // Close menu when clicking nav links
    const navbarLinks = document.querySelectorAll('nav ul li a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const insideNavbar = navbarMenu.contains(event.target) || toggle.contains(event.target);
        
        if (!insideNavbar && navbarMenu.classList.contains('active')) {
            toggle.classList.remove('active');
            navbarMenu.classList.remove('active');
        }
    });
});