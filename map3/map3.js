let macyOddjob = L.map('macyMapp3').setView([38.959897, -100.371851], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(macyOddjob)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
    L.geoJSON(data, {
      style: stateStyle,
      onEachFeature: onEachFeature
    }).addTo(macyOddjob)
 })
let stateStyle = function (feature) {
  let age = feature.properties.MED_AGE // get the current state's Median Age attribute
  let stateStroke = '#3ed691' // let the initial color be a darker green
  let stateFill = '#adffd9'
  if ( age < 38 ) { stateFill = '#e0fff0' } // if the state's median age is less than the average, color it a lighter green
  return {
    color: stateStroke,
    fillColor: stateFill, //use the color variable above for the value
    weight: 1,
    fillOpacity: 0.2,
  }
}
 let onEachFeature = function (feature, layer) {
     let name = feature.properties.STATE_NAME
     let age = feature.properties.MED_AGE
     layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
   }
let stateGeojsonOptions = { 
 	style: stateStyle,
 	onEachFeature: onEachFeature
   }
