// SELECTED MENU ITEM
export function initNav() {
  const path = window.location.pathname;
  const page = path.split("/").pop().replace(".html","");
  const current = page === "" ? "index" : page;

  document.querySelectorAll(".navbar-item[data-page]").forEach(item => {
    if (item.dataset.page === current) {
      item.classList.add("has-text-primary");

      // If this item is inside a dropdown, highlight the parent link too
      const parentDropdown = item.closest(".has-dropdown");
      if (parentDropdown) {
        parentDropdown.querySelector(".navbar-link")?.classList.add("has-text-primary");
      }
    }
  });

  // Optional: detail pages point to Catalogue
  if (current.startsWith("detail")) {
    document.querySelector('.navbar-item[data-page="index"]')?.classList.add("has-text-primary");
  }
}

// HAMBURGER MENU
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
