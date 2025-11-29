// main.js
import { initNav } from './components/nav.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
});

// Load Components
fetch("script/components/partners/partners.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("Partners").innerHTML = html;
  });

  fetch("script/components/footer/footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("Footer").innerHTML = html;
  });
