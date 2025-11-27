document.addEventListener('DOMContentLoaded', () => {
  const rimFilter = document.getElementById('filterRim');
  const shoulderFilter = document.getElementById('filterShoulder');
  const handleProfileFilter = document.getElementById('filterHandleProfile');
  const handleSectionFilter = document.getElementById('filterHandleSection');
  const neckFilter = document.getElementById('filterNeck');
  const bodyFilter = document.getElementById('filterBody');
  const baseFilter = document.getElementById('filterBase');
  const cards = document.querySelectorAll('.amphora-card');

  // Normalization function
  function normalize(str) {
    return String(str).toLowerCase().replace(/\s+/g, '-').replace('/', '-');
  }

  // Filtering function
  function filterCards() {
    const rimValue = normalize($('#filterRim').val());
    const shoulderValue = normalize(shoulderFilter.value);
    const handleProfileValue = normalize(handleProfileFilter.value);
    const handleSectionValue = normalize(handleSectionFilter.value);
    const neckValue = normalize(neckFilter.value);
    const bodyValue = normalize(bodyFilter.value);
    const baseValue = normalize(baseFilter.value);

    cards.forEach(card => {
      const rim = normalize(card.dataset.filterRim);
      const shoulder = normalize(card.dataset.filterShoulder);
      const handleProfile = normalize(card.dataset.filterHandleProfile);
      const handleSection = normalize(card.dataset.filterHandleSection);
      const neck = normalize(card.dataset.filterNeck);
      const body = normalize(card.dataset.filterBody);
      const base = normalize(card.dataset.filterBase);

      const show =
        (!rimValue || rim === rimValue) &&
        (!shoulderValue || shoulder === shoulderValue) &&
        (!handleProfileValue || handleProfile === handleProfileValue) &&
        (!handleSectionValue || handleSection === handleSectionValue) &&
        (!neckValue || neck === neckValue) &&
        (!bodyValue || body === bodyValue) &&
        (!baseValue || base === baseValue);

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
  handleProfileFilter.addEventListener('change', filterCards);
  handleSectionFilter.addEventListener('change', filterCards);
  neckFilter.addEventListener('change', filterCards);
  bodyFilter.addEventListener('change', filterCards);
  baseFilter.addEventListener('change', filterCards);

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
    handleProfileFilter.value = '';
    handleSectionFilter.value = '';
    neckFilter.value = '';
    bodyFilter.value = '';
    baseFilter.value = '';
    filterCards();
  });
});

// FILTER SECTION TOGGLE
document.getElementById('toggleAdvancedFilters').addEventListener('click', () => {
  const box = document.getElementById('advancedFilterBox');

  if (box.style.display === "none") {
    box.style.display = "block";
    box.style.maxHeight = "0px";

    setTimeout(() => {
      box.style.transition = "max-height 0.3s ease";
      box.style.maxHeight = "500px";
    }, 10);
  } else {
    box.style.transition = "max-height 0.3s ease";
    box.style.maxHeight = "0px";

    setTimeout(() => {
      box.style.display = "none";
    }, 300);
  }
});