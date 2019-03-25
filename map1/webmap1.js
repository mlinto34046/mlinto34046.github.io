let macyOddjob = L.map('macyMapp').setView([30.477734, -90.046302], 14)
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
}).addTo(macyOddjob)
let mysteryHaus = L.marker([30.4474, -90.0362]).addTo(macyOddjob)
let museumPoly = L.polygon([
  [30.479094, -90.039538],
  [30.478792, -90.039021],
  [30.479276, -90.039158]
]).addTo(macyOddjob)
let hotelTo = L.polyline([
	[30.4778, -90.0379],
	[30.4821, -90.0550]
]).addTo(macyOddjob);
mysteryHaus.bindPopup('Abita Mystery House')
museumPoly.bindPopup('Abita Trailhead Museum')
