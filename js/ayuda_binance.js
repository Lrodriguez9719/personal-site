// Collapsible FAQ items — same toggle pattern used across the site.
document.querySelectorAll('.faq-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    const content = toggle.nextElementSibling;
    content.classList.toggle('open');
  });
});
