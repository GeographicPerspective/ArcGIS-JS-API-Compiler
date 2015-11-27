module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		esri_slurp: {
			options: {
				version: '3.14'
			},
			dev: {
				options: {
					beautify: false
				},
				dest: 'src/esri'
			},
			travis: {
				dest: 'src/esri'
			}
		},
		curl: {
			'src/esri-init/init.js': 'http://js.arcgis.com/3.14amd/init.js',
			'src/esri/nls/jsapi_ROOT.js': 'http://js.arcgis.com/3.14/esri/nls/jsapi_ROOT.js',
			'src/esri/nls/jsapi_en-us.js': 'http://js.arcgis.com/3.14/esri/nls/jsapi_en-us.js'
		}
	});
	grunt.loadNpmTasks("grunt-esri-slurp");
	grunt.loadNpmTasks('grunt-curl');
	grunt.registerTask("esri-snarff", ["esri_slurp:dev", "curl"]);
};
