let demoMap = L.map('map').setView([38.959897, -100.371851], 4)
let basemap = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(demoMap)
let temp9311 = '/Intersection_of_Chinook_habitat_and_9311_stream_temp_zip.geojson'
let temp2040 = '/Stream_Temps_2040.geojson'
let temp2080 = '/Projected_Stream_Temperatures_2080.geojson'
jQuery.getJSON(temp9311, function (data) {
    L.geoJSON(data, {
      style: tempAstyle,
      onEachFeature: onEachFeatureA
    }).addTo(demoMap)
 })

let tempAstyle = function (feature) {
  let temp = feature.properties.S1_93_11 // get the stream's temp attribute
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
 let onEachFeatureA = function (feature, layer) {
     let name = feature.properties.GNIS_NAME
     let temp = feature.properties.S1_93_11
     layer.bindPopup('The temperature of ' + name + ' from 1993 to 2011: ' + temp + '<br>The ideal water temperature for Chinook salmon ranges from 12.8 to 17.8 degrees Celsius.')
   }
let aGeojsonOptions = { 
 	style: tempAStyle,
 	onEachFeature: onEachFeatureA
   };

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
     layer.bindPopup('The temperature of ' + name + ' in 2040: ' + temp + '<br>The ideal water temperature for Chinook salmon ranges from 12.8 to 17.8 degrees Celsius.')
   }
let bGeojsonOptions = { 
 	style: tempBStyle,
 	onEachFeature: onEachFeatureB
   };

jQuery.getJSON(temp2080, function (data) {
    L.geoJSON(data, {
      style: tempCstyle,
      onEachFeature: onEachFeatureC
    }).addTo(demoMap)
 })

let tempCstyle = function (feature) {
  let temp = feature.properties.S32_2080D // get the stream's temp attribute
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
 let onEachFeatureC = function (feature, layer) {
     let name = feature.properties.GNIS_NAME
     let temp = feature.properties.S32_2080D
     layer.bindPopup('The temperature of ' + name + ' in 2080: ' + temp + '<br>The ideal water temperature for Chinook salmon ranges from 12.8 to 17.8 degrees Celsius.')
   }
let cGeojsonOptions = { 
 	style: tempCStyle,
 	onEachFeature: onEachFeatureC
   };

var baseMap = {
    "Grayscale": basemap,
};

var overlayMaps = {
    "Average Temperatures from 1993 to 2011": temp9311,
    "Projected Temperatures in 2040": temp2040,
    "Projeted Temperatures in 2080": temp2080
};

L.control.layers(baseMap, overlayMaps).addTo(demoMap);
