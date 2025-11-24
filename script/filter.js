document.addEventListener('DOMContentLoaded', () => {
  const rimFilter = document.getElementById('filterRim');
  const shoulderFilter = document.getElementById('filterShoulder');
  const cards = document.querySelectorAll('.amphora-card');

  // Normalization function
  function normalize(str) {
    return String(str).toLowerCase().replace(/\s+/g, '-').replace('/', '-');
  }

  // Filtering function
  function filterCards() {
    const rimValue = normalize($('#filterRim').val());
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

  // Expose filterCards globally for Clear Filters button
  window.filterCards = filterCards;

  // Event listeners
  rimFilter.addEventListener('change', filterCards);
  $('#filterRim').on('select2:select', filterCards);
  $('#filterRim').on('select2:clear', filterCards);
  shoulderFilter.addEventListener('change', filterCards);

  // Select2 initialization for Rim filter
  function formatRim(option) {
    if (!option.id) return option.text;
    const img = $(option.element).data('img');
    if (!img) return option.text;
    return $(`
      <span style="display:flex; align-items:center;">
        <img src="${img}" style="width:30px; height:auto; margin-right:8px; background:white; padding:2px; border:1px solid #ccc;">
        ${option.text}
      </span>
    `);
  }

  $('#filterRim').select2({
    templateResult: formatRim,
    templateSelection: formatRim,
    dropdownAutoWidth: true,
    width: 'resolve'
  });

  // Clear Filters button
  $(document).on('click', '#clearFilters', () => {
    $('#filterRim').val('').trigger('change');
    shoulderFilter.value = '';
    filterCards();
  });
});
