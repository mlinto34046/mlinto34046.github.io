let macyOddjob = L.map('macyMapp2').setView([39.8283, -98.5795], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(macyOddjob)
L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer', {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: 'NWS/NOAA'
}).addTo(macyOddjob)
L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer', {
   layers: '1',
   format: 'image/png',
   transparent: true,
   attribution: 'NWS/NOAA'
 }).addTo(macyOddjob)
L.esri.dynamicMapLayer({
  url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/guidance_model_greatlakes_lmofs_time/MapServer'
}).addTo(macyOddjob)
