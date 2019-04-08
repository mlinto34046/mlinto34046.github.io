let macyOddjob = L.map('macyMapp3').setView([30.464806, -90.040734], 4)
L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(macyOddjob)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
let stateGeojsonOptions = { 
 	style: stateStyle,
 	onEachFeature: onEachFeature
   }
jQuery.getJSON(stateDemographicsUrl, function (data) {
  L.geoJSON(data).addTo(macyOddjob)
})
let stateStyle = function (feature) {
  let age = feature.properties.MED_AGE // get the current state's Median Age attribute
  let stateColor = 'olive' // let the initial color be a darker green
  if ( age < 38 ) { stateColor = 'green' } // if the state's median age is less than the average, color it a lighter green
  return {
    color: stateColor, //use the color variable above for the value
    weight: 1,
    fillOpacity: 0.2
  }
}
 let onEachFeature = function (feature, layer) {
     let name = feature.properties.STATE_NAME
     let age = feature.properties.MED_AGE
     layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
   }
