// Initialize map
const map = L.map('amphoraMap').setView([38.5, 26.5], 7); // center on Turkey/Mediterranean

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Sample amphora data
const amphoras = [
  {
    name: "Dressel 20",
    period: "Roman",
    coordinates: [36.0, 27.0]
  },
  {
    name: "Dressel 1",
    period: "Roman",
    coordinates: [38.0, 26.0]
  },
  {
    name: "Byzantine Amphora",
    period: "Byzantine",
    coordinates: [37.5, 27.5]
  },
  {
    name: "Hellenistic Amphora",
    period: "Hellenistic",
    coordinates: [39.0, 26.5]
  }
];

// Assign colors for periods
const periodColors = {
  "Roman": "red",
  "Byzantine": "blue",
  "Hellenistic": "green"
};

const productionCenters = [
  {
    name: "Rhodes Pottery House",
    coordinates: [36.4, 28.2]
  },
  {
    name: "Athens Pottery House",
    coordinates: [37.98, 23.73]
  },
  {
    name: "Ephesus Pottery House",
    coordinates: [37.94, 27.34]
  }
];

// Add markers for production centers
productionCenters.forEach(center => {
  const homeIcon = L.divIcon({
    html: '<i class="fa-solid fa-house" style="color:orange; font-size:24px;"></i>',
    className: 'custom-amphora-icon',
    iconSize: [24,24],
    iconAnchor: [12,12]
  });

  L.marker(center.coordinates, {icon: homeIcon})
    .addTo(map)
    .bindPopup(`<strong>${center.name}</strong><br>Production Center`);
});

// Add markers to map
amphoras.forEach(amp => {
  const color = periodColors[amp.period] || "gray";
  const amphoraIcon = L.divIcon({
    html: '<i class="fa-solid fa-trophy" style="color:'+color+'; font-size:24px;"></i>',
    className: 'custom-amphora-icon',
    iconSize: [24,24],
    iconAnchor: [12,12]
  });

  L.marker(amp.coordinates, {icon: amphoraIcon})
    .addTo(map)
    .bindPopup(`<strong>${amp.name}</strong><br>Period: ${amp.period}`);
});

// Example Sea Trade Route (polyline)
const seaTradeRoute = [
  [36.0, 27.0],  // start near Rhodes
  [37.0, 26.5],  // midpoint Aegean
  [38.0, 25.5],  // midpoint central
  [39.0, 26.5]   // end northern Mediterranean
];

const routeLine = L.polyline(seaTradeRoute, {
  color: 'yellow',
  weight: 4,
  opacity: 0.7,
  dashArray: '8, 8' // dashed line
}).addTo(map);

// Optional: fit map bounds to include route
map.fitBounds(routeLine.getBounds());
