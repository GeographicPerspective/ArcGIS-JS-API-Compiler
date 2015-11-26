/*global document, define, console, alert*/
define([
	'dijit/Dialog',
	'dijit/form/Button',
	'esri/map',
	'esri/layers/FeatureLayer',
	'esri/IdentityManager',
	'dojo/domReady!'
], function (Dialog, Button, Map, FeatureLayer, IdentityManager) {
	"use strict";
	var myButton, map, secureLayer, dialog;

	dialog = new Dialog({
		title: "About",
		content: "A secure service was added to the demo application to illustrate the templates correct use of the ESRI libraries.  If the ESRI library was not implemented correctly the esri/kernel would not be populated with all its attributes. As a result of an incorrectly loaded esri/kernel a password prompt would not popup for a secure service.",
		style: "width: 300px"
	});

	myButton = new Button({
		label: "About",
		onClick: function () {
			//alert();
			dialog.show();
		}
	}, "ButtonDiv").startup();


	map = new Map("map", {
		center: [-120.723, 35.165],
		zoom: 12,
		basemap: "topo"
	});

	// A secure service was added to the demo application to illustrate the templates correct use of the ESRI init.js.  
	// If the ESRI init.js was not implemented correctly the esri/kernel would not be populated with all its attributes. 
	// As a result of an incorrectly loaded esri/kernel a password prompt would not popup for a secure service.
	// Use the following credentials to login: Username user1 Password user1
	secureLayer = new FeatureLayer("http://sampleserver6.arcgisonline.com/arcgis/rest/services/SaveTheBay/FeatureServer/0", {
		mode: FeatureLayer.MODE_ONDEMAND,
		outFields: ["*"]
	});
	map.addLayer(secureLayer);

});
