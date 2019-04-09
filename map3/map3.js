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
  let pop = feature.properties.POP2010 // get the current state's Median Age attribute
  let stateStroke = '#3ed691' // let the initial color be a darker green
  let stateFill = '#68edae'
  if ( pop < 4436369 ) { stateFill = '#e0fff0' } // if the state's median age is less than the average, color it a lighter green
  return {
    color: stateStroke,
    fillColor: stateFill, //use the color variable above for the value
    weight: 1,
    fillOpacity: 0.2,
  }
}
 let onEachFeature = function (feature, layer) {
     let name = feature.properties.STATE_NAME
     let pop = feature.properties.POP2010
     layer.bindPopup('The population in 2010 of ' + name + ': ' + pop + '<br>National average: 4436369')
   }
let stateGeojsonOptions = { 
 	style: stateStyle,
 	onEachFeature: onEachFeature
   }
