let osm = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

let map = L.map('map', {
  center: [43.4047068, 142.4223918],
  zoom: 18,
  zoomControl: true,
  layers: [osm]
}).addTo(map);
