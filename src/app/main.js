/*global document, define, console, alert*/
define([
	'dijit/form/Button',
	"esri/map",
	'dojo/domReady!'
], function (Button, Map) {
	"use strict";
	var myButton, map;

	myButton = new Button({
		label: "Button",
		onClick: function () {
			alert("Hello World");
		}
	}, "ButtonDiv").startup();


	map = new Map("map", {
		center: [-118, 34.5],
		zoom: 8,
		basemap: "topo"
	});

});
