// Intersection Observer for active nav links
const sections = document.querySelectorAll('.section-panel');
const navLinks = document.querySelectorAll('.nav a');

const options = {
    threshold: 0.3,
    rootMargin: '-20% 0px -20% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, options);

sections.forEach(section => observer.observe(section));

// Tab Switch
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        // Remove active from all
        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));
        
        // Add active to clicked
        btn.classList.add('active');
        document.querySelector(`[data-panel="${targetTab}"]`).classList.add('active');
    });
});