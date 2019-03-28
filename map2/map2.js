let macyOddjob = L.map('macyMapp2').setView([30.464806, -90.040734], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(macyOddjob)
L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer', {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: 'NWS/NOAA'
L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_windspeed_offsets/MapServer/WMSServer', {
   layers: '1',
   format: 'image/png',
   transparent: true,
   attribution: 'NWS/NOAA'
 }).addTo(macyOddjob)
