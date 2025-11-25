const urlParams = new URLSearchParams(window.location.search);
const amphoraId = urlParams.get('id');

fetch('../data/amphoras.json')
  .then(response => response.json())
  .then(data => {
    const amphora = data.find(a => a.id === amphoraId);
    // DEBUGGING
    console.log("URL parameter id:", amphoraId);
    console.log("Found amphora:", amphora ? amphora.name : null);

    const container = document.getElementById('details');

    if (!amphora) {
      container.innerHTML = "<p>Amphora not found.</p>";
      return;
    }

    container.innerHTML = `
      <h1 class="title">${amphora.name}</h1>
      <h2 class="subtitle">${amphora.chronology?.period || 'N/A'} (${amphora.chronology?.century || 'N/A'})</h2>

      <div class="columns">
        
        <!-- LEFT COLUMN : MEDIA GALLERY -->
        <div class="column is-one-third">

          <!-- IMAGE GALLERY -->
          <div>
            ${amphora.media.images && amphora.media.images.length > 0
              ? amphora.media.images.map(imgObj => `
                <figure class="image mb-3">
                  <img src="${imgObj.src}" alt="${amphora.name}">
                  ${imgObj.caption ? `<figcaption class="has-text-centered is-size-7 mt-1">${imgObj.caption}</figcaption>` : ''}
                </figure>
              `).join('')
              : '<p>No photos available.</p>'
            }
          </div>

        </div>

        <!-- RIGHT COLUMN : DETAILS -->
        <div class="column">

          <h3 class="title is-5">Classification</h3>
          <p><strong>Typology:</strong> ${amphora.classification?.typology || 'N/A'}</p>
          <p><strong>Category:</strong> ${amphora.classification?.category || 'N/A'}</p>
          <p><strong>Subcategory:</strong> ${amphora.classification?.subCategory || 'N/A'}</p>

          <br>

          <h3 class="title is-5">Origin</h3>
          <p><strong>Production Region:</strong> ${amphora.origin?.productionRegion || 'N/A'}</p>
          <p><strong>Production Center:</strong> ${amphora.origin?.productionCenter || 'N/A'}</p>
          <p><strong>Fabric:</strong> ${amphora.origin?.fabricCode || 'N/A'}</p>

          <br>
          
          <div class="box mb-5">
            <h3 class="title is-5">Characteristics</h3>
            <p><strong>Rim:</strong> ${amphora.characteristics?.rim || 'N/A'}</p>
            <p><strong>Shoulder:</strong> ${amphora.characteristics?.shoulder || 'N/A'}</p>
            <p><strong>Handles in Profile:</strong> ${amphora.characteristics?.handleProfile || 'N/A'}</p>
            <p><strong>Handles in Section:</strong> ${amphora.characteristics?.handleSection || 'N/A'}</p>
            <p><strong>Neck:</strong> ${amphora.characteristics?.neck || 'N/A'}</p>
            <p><strong>Body:</strong> ${amphora.characteristics?.body || 'N/A'}</p>
            <p><strong>Base:</strong> ${amphora.characteristics?.base || 'N/A'}</p>
          </div>

          <h3 class="title is-5">Measurements</h3>
          <p><strong>Height:</strong> ${amphora.measurements?.height_cm || 'N/A'} cm</p>
          <p><strong>Rim Diameter:</strong> ${amphora.measurements?.rimDiameter_cm || 'N/A'} cm</p>
          <p><strong>Body Diameter:</strong> ${amphora.measurements?.bodyDiameter_cm || 'N/A'} cm</p>

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
            ${amphora.media.modelsSVG && amphora.media.modelsSVG.length > 0
              ? amphora.media.modelsSVG.map(svgFile => `
                <object 
                  data="${svgFile}" 
                  type="image/svg+xml"
                  style="width:auto; height:500px; background:white;">
                </object>
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
                  style="width:100%; height:500px; background:#2e333d; margin-bottom:1rem;">
                </model-viewer>
              `).join('')
              : '<p>No 3D model available.</p>'
            }
          </div>

        </div>
      </div>
    `;
  });
