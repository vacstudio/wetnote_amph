document.addEventListener('DOMContentLoaded', () => {
  const rimFilter = document.getElementById('filterRim');
  const shoulderFilter = document.getElementById('filterShoulder');
  const cards = document.querySelectorAll('.amphora-card');

  function filterCards() {
    // Normalization function to match dropdown values with JSON filterData
    function normalize(str) {
      return str.toLowerCase().replace(/\s+/g, '-');
    }

    const rimValue = normalize(rimFilter.value);
    const shoulderValue = normalize(shoulderFilter.value);

    cards.forEach(card => {
      const rim = normalize(card.dataset.filterRim);
      const shoulder = normalize(card.dataset.filterShoulder);

      const show =
        (!rimValue || rim === rimValue) &&
        (!shoulderValue || shoulder === shoulderValue);

      card.style.display = show ? '' : 'none';
    });
  }

  rimFilter.addEventListener('change', filterCards);
  shoulderFilter.addEventListener('change', filterCards);
});
