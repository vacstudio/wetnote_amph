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
