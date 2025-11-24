const urlParams = new URLSearchParams(window.location.search);
const amphoraId = urlParams.get('id');

fetch('../data/amphoras.json')
  .then(response => response.json())
  .then(data => {
    const amphora = data.find(a => a.id === amphoraId);
    const container = document.getElementById('details');

    if (!amphora) {
      container.innerHTML = "<p>Amphora not found.</p>";
      return;
    }

    container.innerHTML = `
      <h1 class="title">${amphora.name}</h1>
      <h2 class="subtitle">${amphora.chronology.period} (${amphora.chronology.century})</h2>

      <div class="columns">
        <div class="column is-one-third">
          <figure class="image">
            <img src="${amphora.media.images[0]}" alt="${amphora.name}">
          </figure>
        </div>

        <div class="column">

          <h3 class="title is-5">Classification</h3>
          <p><strong>Typology:</strong> ${amphora.classification.typology}</p>
          <p><strong>Category:</strong> ${amphora.classification.category}</p>
          <p><strong>Subcategory:</strong> ${amphora.classification.subCategory}</p>

          <br>

          <h3 class="title is-5">Origin</h3>
          <p><strong>Production Region:</strong> ${amphora.origin.productionRegion}</p>
          <p><strong>Production Center:</strong> ${amphora.origin.productionCenter}</p>
          <p><strong>Fabric:</strong> ${amphora.origin.fabricCode}</p>

          <br>

          <h3 class="title is-5">Morphology</h3>
          <p><strong>Rim:</strong> ${amphora.morphology.rim}</p>
          <p><strong>Neck:</strong> ${amphora.morphology.neck}</p>
          <p><strong>Handles:</strong> ${amphora.morphology.handles}</p>
          <p><strong>Body:</strong> ${amphora.morphology.body}</p>
          <p><strong>Shoulder:</strong> ${amphora.morphology.shoulder}</p>
          <p><strong>Base:</strong> ${amphora.morphology.base}</p>

          <br>

          <h3 class="title is-5">Measurements</h3>
          <p><strong>Height:</strong> ${amphora.measurements.height_cm} cm</p>
          <p><strong>Rim Diameter:</strong> ${amphora.measurements.rimDiameter_cm} cm</p>
          <p><strong>Body Diameter:</strong> ${amphora.measurements.bodyDiameter_cm} cm</p>

          <br>

          <h3 class="title is-5">Description</h3>
          <p>${amphora.description}</p>
        </div>
      </div>
    `;
  });