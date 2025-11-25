# Amphora Typology Database (wetnote_amph)

## Overview

This project provides a web-based **Amphora Typology Database** designed for archaeologists, researchers, museum professionals, and enthusiasts to identify and compare ancient amphora types efficiently. The system includes:

- **Catalogue**: Interactive, filterable database of amphoras with detailed morphological descriptions.
- **Image Recognition Tool (AmphorAI)**: Analyze and match amphora images using AI for faster identification.
- **Documentation**: Guides users on morphology, typological comparison, and effective use of the catalogue filters.

---

## Features

- Fully searchable and filterable catalogue by:
  - Rim, Neck, Shoulder, Body, Base, Handles
  - Chronology, Region, Fabric, Dimensions
- Media support:
  - High-quality images
  - Drawings
  - 3D Models (GLB)
  - SVG silhouettes
- Clear academic documentation for each amphora
- Responsive design with Bulma CSS framework
- Select2-enhanced filters for a smooth user experience
- Clear Filters and dynamic filtering support multiple morphological criteria

---

## Project Structure

```
AmphTyp/
├─ data/                  # JSON database, images, drawings, 3D models, SVGs
├─ script/                # JS files: catalogue.js, filter.js, detail.js
├─ index.html             # Home page
├─ detail.html            # Amphora detail page
├─ documentation.html     # User guide
├─ README.md              # Project documentation
├─ .gitignore             # Git ignore configuration
```

---

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/vacstudio/wetnote_amph.git
```

2. Open `index.html` in a browser to start exploring the catalogue.

3. Optionally, use a local web server (recommended for 3D models and SVGs):

```bash
# Python 3
python3 -m http.server 8000
# Navigate to http://localhost:8000
```

---

## Adding New Data

- All amphora data is stored in `data/amphoras.json`.
- Add new items with the same structure, including:
  - `filterData` for all morphological filters
  - `media` for images, drawings, 3D models, and SVGs
  - Chronology, dimensions, and fabric information
- Ensure IDs are unique and consistent for filtering.

---

## Contributing

- Fork the repository and create a branch for your feature or fix.
- Update JSON data or frontend scripts as needed.
- Submit a pull request with detailed explanation.

---

## License

MIT License

---

## Contact

For questions or support:

- Project lead: Nevcan Uludaş  
- Email: [your email here]  
- Website: [your project website if any]