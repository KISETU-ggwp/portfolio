document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded event fired');

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  console.log('menuToggle:', menuToggle);
  console.log('nav:', nav);

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      console.log('Menu toggle clicked');
      this.classList.toggle('active');
      nav.classList.toggle('active');
      console.log('Menu toggle active:', this.classList.contains('active'));
      console.log('Nav active:', nav.classList.contains('active'));
    });
  } else {
    console.error('menuToggle or nav not found');
  }
});