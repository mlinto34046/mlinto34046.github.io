let macyOddjob = L.map('macyMapp2').setView([30.464806, -90.040734], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(macyOddjob)
L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer', {
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
