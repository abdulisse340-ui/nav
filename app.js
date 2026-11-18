const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const navLinks = document.querySelectorAll('.nav-links a');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// 1. Hubi xaaladdii hore ee Sidebar-ka (LocalStorage)
const isSidebarHidden = JSON.parse(localStorage.getItem('sidebarHidden'));

if (isSidebarHidden) {
    sidebar.classList.add('hide-sidebar');
    mainContent.classList.add('expand-content');
}

// 2. Furista iyo Xirista Sidebar-ka
toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('hide-sidebar');
    mainContent.classList.toggle('expand-content');

    const isHidden = sidebar.classList.contains('hide-sidebar');
    localStorage.setItem('sidebarHidden', JSON.stringify(isHidden));
});

// 3. Beddelidda link-ga firfircoon (Active link) & xirista sidebar-ka marka moobil la joogo
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');

        if (window.innerWidth <= 768) {
            sidebar.classList.add('hide-sidebar');
            mainContent.classList.add('expand-content');
        }
    });
});

// 4. Foomka Xiriirka (Contact Form)
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    formStatus.textContent = `Mahadsanid ${name}! Fariintaada si guul leh ayaa loo diray.`;
    contactForm.reset();

    setTimeout(() => {
        formStatus.textContent = '';
    }, 4000);
});