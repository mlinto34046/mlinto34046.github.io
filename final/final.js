function init () {
let demoMap = L.map('map').setView([30.464806, -90.040734], 12)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(demoMap)
let mysteryHaus = L.marker([30.4474, -90.0362]).addTo(demoMap)
let museumPoly = L.polygon([
  [30.479094, -90.039538],
  [30.478792, -90.039021],
  [30.479276, -90.039158]
]).addTo(demoMap)
let hotelTo = L.polyline([
	[30.4778, -90.0379],
	[30.4821, -90.0550]
]).addTo(demoMap);
mysteryHaus.bindPopup('Abita Mystery House')
museumPoly.bindPopup('Abita Trailhead Museum')
}
window.addEventListener('load', init)
