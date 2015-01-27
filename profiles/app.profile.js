var profile = {
	basePath: '../src/',
	action: 'release',
	cssOptimize: 'comments',
	mini: true,
	optimize: 'closure',
	layerOptimize: 'closure',
	packages: [
		{ name: "esri-init", location: "esri-init" },
		{ name: 'app', location: 'app' },
		{ name: 'dgrid', location: 'dgrid'},
		{ name: 'dijit', location: "dijit"},
		{ name: 'dojo', location: "dojo"},
		{ name: 'dojox', location: "dojox"},
		{ name: 'put-selector', location: 'put-selector' },
		{ name: 'xstyle', location: 'xstyle' },
		{ name: 'esri', location: 'esri' }
	],
	stripConsole: 'all',
	selectorEngine: 'lite',
	layers: {
		'dojo/dojo': {
			include: [
				'app/main',

				// If the compiler missed some of the includes they can be manually added here
				"dojo/nls/dojo_en-us",
				"dojox/gfx/path",
				"dojox/gfx/shape",
				"dojox/gfx/svg",
				"esri/dijit/Attribution"
			],
			boot: true,
			customBase: true
		}
	},
	staticHasFeatures: {
		'dojo-trace-api': false,
		'dojo-log-api': false,
		'dojo-publish-privates': false,
		'dojo-sync-loader': false,
		'dojo-xhr-factory': false,
		'dojo-test-sniff': false
	},
	useSourceMaps : false
};