const urlParams = new URLSearchParams(window.location.search);
const amphoraId = urlParams.get('id');

fetch('../data/amphoras.json')
  .then(response => response.json())
  .then(data => {
    const amphora = data.find(a => a.id === amphoraId);
    console.log("URL parameter id:", amphoraId);
    console.log("Found amphora:", amphora ? amphora.name : null);
    const container = document.getElementById('details');

    if (!amphora) {
      container.innerHTML = "<p>Amphora not found.</p>";
      return;
    }

    container.innerHTML = `
      <h1 class="title">${amphora.name}</h1>
      <h2 class="subtitle">${amphora.chronology.period} (${amphora.chronology.century})</h2>

      <div class="columns">
        
        <!-- LEFT COLUMN : MEDIA GALLERY -->
        <div class="column is-one-third">
          
          <h3 class="title is-5">Media</h3>

          <!-- IMAGE GALLERY -->
          <div>
            <h4 class="title is-6">Photos</h4>
            ${amphora.media.images && amphora.media.images.length > 0
              ? amphora.media.images.map(img => `
                <figure class="image mb-3">
                  <img src="${img}" alt="${amphora.name}">
                </figure>
              `).join('')
              : '<p>No photos available.</p>'
            }
          </div>

        </div>

        <!-- RIGHT COLUMN : DETAILS -->
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

          <br>

          <!-- DRAWINGS (Images) -->
          <div>
            <h4 class="title is-4">Drawings</h4>
            <div class="columns">
              ${amphora.media.drawings && amphora.media.drawings.length > 0
                ? amphora.media.drawings.map(img => `
                  <figure class="image mb-3 column is-3">
                    <img src="${img}" alt="Drawing of ${amphora.name}">
                  </figure>
                `).join('')
                : '<p>No drawings available.</p>'
              }
            </div>
          </div>

          <br>

          <!-- SVG MODELS -->
          <div>
            <h4 class="title is-6">SVG Model</h4>
            ${amphora.media.svg && amphora.media.svg.length > 0
              ? amphora.media.svg.map(svgFile => `
                <model-viewer src="${svgFile}"
                  alt="${amphora.name} SVG"
                  camera-controls
                  auto-rotate
                  exposure="1"
                  style="width:100%; height:300px; background:#f4f4f4; margin-bottom:1rem;">
                </model-viewer>
              `).join('')
              : '<p>No SVG model available.</p>'
            }
          </div>

          <br>

          <!-- 3D MODELS -->
          <div>
            <h4 class="title is-6">3D Model</h4>
            ${amphora.media.models3d && amphora.media.models3d.length > 0
              ? amphora.media.models3d.map(model => `
                <model-viewer src="${model}"
                  alt="${amphora.name}"
                  camera-controls
                  auto-rotate
                  exposure="1"
                  camera-orbit="90deg 75deg auto"
                  style="width:100%; height:500px; background:#333; margin-bottom:1rem;">
                </model-viewer>
              `).join('')
              : '<p>No 3D model available.</p>'
            }
          </div>

        </div>
      </div>
    `;
  });
