fetch('../data/amphoras.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('amphoraList');

    data.forEach(amphora => {
      const col = document.createElement('div');
      col.className = "column is-one-quarter";

      col.innerHTML = `
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="${amphora.media.images[0]}" alt="${amphora.name}">
            </figure>
          </div>
          <div class="card-content">
            <p class="title is-5">${amphora.name}</p>
            <p class="subtitle is-6">${amphora.chronology.period}</p>
            <a class="button is-link is-light" href="detail.html?id=${amphora.id}">
              View Details <i class="fas fa-arrow-right" style="margin-left:8px"></i>
            </a>
          </div>
        </div>
      `;

      container.appendChild(col);
    });
  });
