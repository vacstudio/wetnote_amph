fetch('../data/amphoras.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('amphoraList');

    data.forEach(amphora => {
      const col = document.createElement('div');
      col.className = "column is-one-quarter";

      // NEW JSON STRUCTURE
      const filters = amphora.filter_data;

      col.innerHTML = `
        <div 
          class="card amphora-card" 
          data-filter-rim="${filters.rim || ''}" 
          data-filter-shoulder="${filters.shoulder || ''}"
          data-filter-handle-profile="${filters.handle_profile || ''}"
          data-filter-handle-section="${filters.handle_section || ''}"
          data-filter-neck="${filters.neck || ''}"
          data-filter-body="${filters.body || ''}"
          data-filter-base="${filters.base || ''}"
        >
          <div class="card-image">
            <figure class="image is-4by3 amphora-visual has-background-white" 
              style="max-height:250px; overflow:hidden;">
              
              <!-- NEW: photos instead of images -->
              <img class="amphora-thumb" 
                src="${amphora.media.photos?.[0]?.src || ''}" 
                alt="${amphora.name}" 
                style="width:100%; height:100%; object-fit: contain;">

              <!-- NEW: models_3d instead of models3d -->
              <model-viewer class="amphora-3d" 
                src="${amphora.media.models_3d?.[0] || ''}"
                alt="${amphora.name}"
                camera-controls
                disable-zoom
                auto-rotate
                exposure="1"
                camera-orbit="90deg 75deg auto"
                style="display:none; width:100%; height:100%; background-color:#2e333d; object-fit: contain;">
              </model-viewer>
            </figure>
          </div>

          <div class="card-content">
            <div class="level">
              <div class="level-left">
                <div class="level-item"> 
                  <div>
                    <p class="title is-5">${amphora.name}</p>
                    <p class="subtitle is-6">${amphora.chronology.label}</p>
                  </div>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <a class="button is-small is-link is-light" href="detail.html?id=${amphora.id}">
                    Details <i class="fas fa-arrow-right" style="margin-left:8px"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      container.appendChild(col);

      // Hover logic for switching between image & 3D model
      const card = col.querySelector('.amphora-card');
      const img = col.querySelector('.amphora-thumb');
      const viewer = col.querySelector('.amphora-3d');

      if (viewer && viewer.getAttribute('src')) {
        card.addEventListener('mouseenter', () => {
          img.style.display = 'none';
          viewer.style.display = 'block';
        });

        card.addEventListener('mouseleave', () => {
          viewer.style.display = 'none';
          img.style.display = 'block';
        });
      }
    });

    // Grid layout switcher
    function applyGridLayout(columns) {
      const cards = document.querySelectorAll('#amphoraList .column');

      cards.forEach(card => {
        const figure = card.querySelector('figure.amphora-visual');

        if (columns === 4) {
          card.className = "column is-one-quarter";
          if (figure) figure.style.maxHeight = "250px";
        } else if (columns === 3) {
          card.className = "column is-one-third";
          if (figure) figure.style.maxHeight = "450px";
        }
      });
    }

    document.getElementById('viewGrid4')?.addEventListener('click', () => {
      applyGridLayout(4);
    });

    document.getElementById('viewGrid3')?.addEventListener('click', () => {
      applyGridLayout(3);
    });
  })
  .catch(err => console.error('Error loading amphoras.json:', err));