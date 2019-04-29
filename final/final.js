let demoMap = L.map('map').setView([47.493774, -121.823899], 9)
let basemap = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(demoMap)
let temp9311 = '/final/Intersection_of_Chinook_habitat_and_9311_stream_temp_zip.geojson'
let temp2040 = '/final/Stream_Temps_2040.geojson'
let temp2080 = '/final/Projected_Stream_Temperatures_2080.geojson'
let bounds = '/final/WA_County_Boundaries.geojson'
let layerA = L.layerGroup();

let sliderA = jQuery.getJSON(temp9311, function (data) {
    L.geoJSON(data, {
      style: tempAStyle,
      onEachFeature: onEachFeatureA
    }).addTo(layerA)
 })


  let tempAStyle = function (feature) {
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
    weight: 2,
  }
 }
 let onEachFeatureA = function (feature, layer) {
     let name = feature.properties.GNIS_NAME
     let temp = feature.properties.S1_93_11
     layer.bindPopup('The temperature of ' + name + ' from 1993 to 2011: ' + temp + '<br>The ideal water temperature for Chinook salmon ranges from 12.8 to 17.8 degrees Celsius.')
     if (name.length = 0) 
         return {
	     name: 'this unnamed stream'
     }
 }
 
 
let aGeojsonOptions = { 
 	style: tempAStyle,
 	onEachFeature: onEachFeatureA
   };
		 
layerA.addTo(demoMap);


let layerB = L.layerGroup();

    jQuery.getJSON(temp2040, function (data) {
    L.geoJSON(data, {
      style: tempBStyle,
      onEachFeature: onEachFeatureB
    }).addTo(layerB)
 })

let tempBStyle = function (feature) {
  let temp = feature.properties.S30_2040D // get the stream's temp attribute
  let tempStroke = '#A8000' // let the initial color be a darker red
  if ( temp < 12.5 ) { tempStroke = '#00FFC5' } 
	else if (temp < 15) {tempStroke = '#98E600'}
	else if (temp < 17.5) {tempStroke = '#FFFF00'}
	else if (temp < 20) {tempStroke = '#F96C13'}
	else if (temp < 22.5) {tempStroke = '#FF5500'}
		else {tempStroke = '#A8000'} // possibly wrong syntax
  return {
    color: tempStroke,
    weight: 2,
  }
}
 let onEachFeatureB = function (feature, layer) {
     let name = feature.properties.GNIS_NAME
     let temp = feature.properties.S30_2040D
     if (name.length = 0) {
	     return 'this unnamed stream'
     }
     layer.bindPopup('The temperature of ' + name + ' in 2040: ' + temp + '<br>The ideal water temperature for Chinook salmon ranges from 12.8 to 17.8 degrees Celsius.')
   }
let bGeojsonOptions = { 
 	style: tempBStyle,
 	onEachFeature: onEachFeatureB
   };

let layerC = L.layerGroup();

jQuery.getJSON(temp2080, function (data) {
    L.geoJSON(data, {
      style: tempCStyle,
      onEachFeature: onEachFeatureC
    }).addTo(layerC)
 })

let tempCStyle = function (feature) {
  let temp = feature.properties.S32_2080D // get the stream's temp attribute
  let tempStroke = '#A8000' // let the initial color be a darker red
  if ( temp < 12.5 ) { tempStroke = '#00FFC5' }
	else if (temp < 15) {tempStroke = '#98E600'}
	else if (temp < 17.5) {tempStroke = '#FFFF00'}
	else if (temp < 20) {tempStroke = '#F96C13'}
	else if (temp < 22.5) {tempStroke = '#FF5500'}
		else {tempStroke = '#A8000'} // possibly wrong syntax
  return {
    color: tempStroke,
    weight: 2,
  }
}
 let onEachFeatureC = function (feature, layer) {
     let name = feature.properties.GNIS_NAME
     let temp = feature.properties.S32_2080D
     if (name.length = 0) {
	     return 'this unnamed stream'
     }
     layer.bindPopup('The temperature of ' + name + ' in 2080: ' + temp + '<br>The ideal water temperature for Chinook salmon ranges from 12.8 to 17.8 degrees Celsius.')
   }
let cGeojsonOptions = { 
 	style: tempCStyle,
 	onEachFeature: onEachFeatureC
   };

jQuery.getJSON(bounds, function (data) {
    L.geoJSON(data, {
      filter: boundsFilter,
      style: boundsStyle
    }).addTo(demoMap)
})
	

let boundsFilter = function (feature) {
	let county = feature.properties.JURISDIC_2
		if (county === "King") return true
}
  
let boundsStyle = {
    color: '#162f56',
    weight: 2,
    opacity: 0.6,
    dashArray: '20,15',
    fillOpacity: 0
  }

let boundsGeojsonOptions = { 
 	style: boundsStyle,
   };

let baseMap = {
    "Grayscale": basemap,
};

let overlayMaps = {
    "Average Temperatures from 1993 to 2011": layerA,
    "Projected Temperatures in 2040": layerB,
    "Projected Temperatures in 2080": layerC
};

let layerNav = L.control.layers(baseMap, overlayMaps).addTo(demoMap);

jQuery.( function() {
    jQuery.( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        jQuery.( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    jQuery.( "#amount" ).val( "$" + jQuery.( "#slider-range" ).slider( "values", 0 ) +
      " - $" + jQuery.( "#slider-range" ).slider( "values", 1 ) );
  } );
