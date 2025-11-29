// main.js
import { initNav } from '../components/navbar/nav.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
});

// Load Components
fetch("../components/navbar/navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("Navbar").innerHTML = html;
  });

fetch("../components/partners/partners.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("Partners").innerHTML = html;
  });

fetch("../components/footer/footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("Footer").innerHTML = html;
  });
