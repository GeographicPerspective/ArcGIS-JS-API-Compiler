/*global document, define, console, alert*/
define([
	'dijit/form/Button',
	"esri/map",
	"esri/layers/FeatureLayer",
	'dojo/domReady!'
], function (Button, Map, FeatureLayer) {
	"use strict";
	var myButton, map, secureLayer;

	myButton = new Button({
		label: "Button",
		onClick: function () {
			alert("Hello World");
		}
	}, "ButtonDiv").startup();


	map = new Map("map", {
		center: [-120.723, 35.165],
		zoom: 12,
		basemap: "topo"
	});

	//add the secure service - token is required
	secureLayer = new FeatureLayer("http://sampleserver6.arcgisonline.com/arcgis/rest/services/SaveTheBay/FeatureServer/0", {
		mode: FeatureLayer.MODE_ONDEMAND,
		outFields: ["*"]
	});
	map.addLayer(secureLayer);

});
