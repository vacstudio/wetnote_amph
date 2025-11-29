// main.js

// Load Components
fetch("../components/navbar/navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("Navbar").innerHTML = html;

    // Run nav.js only after navbar is placed in DOM
    import("../components/navbar/nav.js").then(module => {
      module.initNav();
    });
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
