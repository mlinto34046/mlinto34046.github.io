macyObject = L.map('macyMap').setView([30.4474, -90.0362], 5)
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
}).addTo(macyObj)
let mysteryHouse = L.marker([30.4474, -90.0362]).addto(macyObj)
let museumPolygon = L.polygon([

let macyOddjob = L.map('macyMapp').setView([30.464806, -90.040734], 12)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(macyOddjob)
let mysteryHaus = L.marker([30.4474, -90.0362]).addTo(macyOddjob)
let museumPoly = L.polygon([
  [30.479094, -90.039538],
  [30.478792, -90.039021],
  [30.479276, -90.039158]
]).addTo(macyObj)
mysteryHouse.bindPopup('Abita Mystery House')
museumPolygon.bindPopup('Abita Trailhead Museum')
]).addTo(macyOddjob)
let hotelTo = L.polyline([
	[30.4778, -90.0379],
	[30.4821, -90.0550]
]).addTo(macyOddjob);
mysteryHaus.bindPopup('Abita Mystery House')
museumPoly.bindPopup('Abita Trailhead Museum')
