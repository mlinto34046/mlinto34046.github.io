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
jQuery.getJSON(temp9311, function (data) {
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
     layer.bindPopup('<img src="/final/Thermometersmall.png" alt="Thermometer icon" style="width:15px;height:15px;">The temperature of ' + name + ' from 1993 to 2011: ' + temp + '<br><img src="/final/fish-emoji-by-google-small.png" alt="Fish icon" style="width:15px;height:15px;">The ideal water temperature for Chinook salmon ranges from 12.8 to 17.8 degrees Celsius.')
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


let layerB = L.featureGroup();

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
     if (name == ' ') {name = 'this unnamed stream'}
     let temp = feature.properties.S30_2040D
     layer.bindPopup('<img src="/final/Thermometersmall.png" alt="Thermometer icon" style="width:15px;height:15px;"> The temperature of ' + name + ' in 2040: ' + temp + '<br><img src="/final/fish-emoji-by-google-small.png" alt="Fish icon" style="width:15px;height:15px;"> The ideal water temperature for Chinook salmon ranges from 12.8 to 17.8 degrees Celsius.')
   }
let bGeojsonOptions = { 
 	style: tempBStyle,
 	onEachFeature: onEachFeatureB
   };

let layerC = L.featureGroup();

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
     if (name == ' ') {name = 'this unnamed stream'}
     let temp = feature.properties.S32_2080D
     layer.bindPopup('<img src="/final/Thermometersmall.png" alt="Thermometer icon" style="width:15px;height:15px;"> The temperature of ' + name + ' in 2080: ' + temp + '<br><img src="/final/fish-emoji-by-google-small.png" alt="Fish icon" style="width:15px;height:15px;"> The ideal water temperature for Chinook salmon ranges from 12.8 to 17.8 degrees Celsius.')
   }
let cGeojsonOptions = { 
 	style: tempCStyle,
 	onEachFeature: onEachFeatureC
   };

let boundsLayer = L.featureGroup()

jQuery.getJSON(bounds, function (data) {
    L.geoJSON(data, {
      filter: boundsFilter,
      style: boundsStyle
    }).addTo(boundsLayer)
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

var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [40, 40],
    }
});
let thermIcon = new LeafIcon({iconUrl: 'Thermometersmall.png'});
let fishIcon = new LeafIcon({iconUrl: 'fish-emoji-by-google-small.png'});
let marker = L.marker([47.656500, -122.114400], {icon: thermIcon}).bindPopup('<li> In 2080, this stream will be the hottest in King County at 24.19°C. </li> <li> That is 2.5°C more than from 1993-2011. </li> <li> <b>Massive fish kills</b> have been known to occur over 22°C. </li>');
let marker2 = L.marker([47.529697, -122.038902], {icon: fishIcon}).bindPopup('In 2018, a plan was put into place in King County to save local salmon populations. This included a partnership with Issaquah Hatchery.');
let markerGroup = L.layerGroup([marker, marker2]);

let baseMap = {
    "Base Map": basemap,
};

let overlayMaps = {
    "Average Temperatures from 1993 to 2011": layerA,
    "Projected Temperatures in 2040": layerB,
    "Projected Temperatures in 2080": layerC,
    "Points of Interest": markerGroup,
    "King County Boundary" : boundsLayer
};

let layerNav = L.control.layers(baseMap, overlayMaps).addTo(demoMap);



function getColor(d) {
    return d > 22.5  ? '#ce0000' :
           d > 20  ? '#FF5500' :
           d > 17.5   ? '#F96C13' :
           d > 15   ? '#FFFF00' :
           d > 12.5   ? '#98E600' :
    			'#00FFC5';
    
}

function style(feature) {
		return {
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.density)
		};
	}


var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [10.3, 12.5, 15, 17.5, 20, 22.5],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(demoMap);

