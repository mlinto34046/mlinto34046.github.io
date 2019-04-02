let macyOddjob = L.map('macyMapp3').setView([30.464806, -90.040734], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(macyOddjob)
L.tileLayer.wms('https://geo.weather.gc.ca/geomet-beta', {
  layers: 'geomet-beta',
  format: 'image/png',
  transparent: true,
  attribution: 'Government of Canada, Environment and Climate Change Canada, Meteorological Service of Canada'
}).addTo(macyOddjob)
// L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/wwa.cgi', {
//   layers: 'warnings_c',
//   format: 'image/png',
//   transparent: true,
//   attribution: 'NOAA, Iowa State University'
// }).addTo(macyOddjob)
L.esri.dynamicMapLayer({
  url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer'
}).addTo(macyOddjob)
