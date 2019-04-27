let demoMap = L.map('map').setView([38.959897, -100.371851], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(demoMap)
let temp9311 = '/final/Intersection_of_Chinook_habitat_and_9311_stream_temp_zip.geojson'
let temp2040 = '/final/Stream_Temps_2040.geojson'
let temp2080 = '/final/Projected_Stream_Temperatures_2080.geojson'
jQuery.getJSON(temp2040, function (data) {
    L.geoJSON(data, {
      style: tempBstyle,
      onEachFeature: onEachFeatureB
    }).addTo(demoMap)
 })

let tempBstyle = function (feature) {
  let temp = feature.properties.S30_2040D // get the stream's temp attribute
  let tempStroke = '#A8000' // let the initial color be a darker red
  if ( temp < 12.5 ) { tempStroke = '#00FFC5' } // if the state's median age is less than the average, color it a lighter green
	else if (temp < 15) {tempStroke = '#98E600'}
	else if (temp < 17.5) {tempStroke = '#FFFF00'}
	else if (temp < 20) {tempStroke = '#F96C13'}
	else if (temp < 22.5) {tempStroke = '#FF5500'}
		else {tempStroke = '#A8000'} // possibly wrong syntax
  return {
    color: tempStroke,
    weight: 1,
    fillOpacity: 0.2,
  }
}
 let onEachFeatureB = function (feature, layer) {
     let name = feature.properties.GNIS_NAME
     let temp = feature.properties.S30_2040D
     layer.bindPopup('The temperature of ' + name + ' in 201: ' + temp + '<br>The ideal water temperature for Chinook salmon ranges from 12.8 to 17.8 degrees Celsius.')
   }
let stateGeojsonOptions = { 
 	style: tempBStyle,
 	onEachFeature: onEachFeatureB
   }
