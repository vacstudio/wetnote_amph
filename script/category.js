fetch('../data/amphoras.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('amphoraList');

    data.forEach(amphora => {
      const col = document.createElement('div');
      col.className = "column is-one-quarter";

      col.innerHTML = `
        <div class="card amphora-card">
          <div class="card-image">
            <figure class="image is-4by3 amphora-visual">
              <img class="amphora-thumb" src="${amphora.media.images[0]}" alt="${amphora.name}">
              <model-viewer class="amphora-3d" src="${amphora.media.models3d ? amphora.media.models3d[0] : ''}"
                alt="${amphora.name}"
                camera-controls
                disable-zoom
                exposure="1"
                style="display:none; width:100%; height:100%;">
              </model-viewer>
            </figure>
          </div>
          <div class="card-content">
            <div class="level">
              <div class="level-left">
                <div class="level-item"> 
                  <div>
                    <p class="title is-5">${amphora.name}</p>
                    <p class="subtitle is-6">${amphora.chronology.period}</p>
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
  });
