# ArcGIS-JS-API-Compiler (for ESRI JS API 3.12)

ESRI ArcGIS JS API Compiler is a basic template for a single page ESRI mapping application. The project has been designed so that a user can easily set-up and compile all the JavaScript and CSS files. The more complex the web application developed, the more benefit will be gained from compiling the code. For example, a recently developed map viewer compiled down from 116 JavaScript files to 10 and 57 CSS files to 9. In this project a simple demo web application has been include to demonstrate file structure and location.

Prerequisite
------------
1. A web server: [Apache](http://www.apache.org/) or [IIS](http://www.iis.net/)
2. [git](http://git-scm.com/)
3. [Node.js](http://nodejs.org)
4. [GRUNT](http://gruntjs.com/)
5. [Java runtime](http://www.oracle.com/technetwork/java/index.html)

Installation
------------
1. Open `terminal/cmd`: Create a directory your web server can see
2. Clone the git repository using `git clone --recursive https://github.com/GeographicPerspective/ArcGIS-JS-API-Compiler.git`.
3. Type `cd ArcGIS-JS-API-Compiler.git`.
3. Type `npm install` to install additional Node.js dependencies.
4. Type `grunt esri-snarff` to slurp the ESRI JavaScript API. 
  * Unfortunately a grunt slurp of the ESRI JavaScript API does not acquire all the ESRI JS API. If you project requires the complete package see the Manual Set-up instructions below.  

Compile
-------
1. Run `build.sh` to compile the `/src` folder. It will be built into `/dist`.

Project Structure
-----------------
* All of the application's source files go in `/src`. The project compiles into `/dist`.
* The build profile is located in `/profiles`.
* The demo application HTML file is located at `/src/index.html`.
* All custom application code is located in `/src/index/app`
* The `build.sh` script compiles the application files, dojo file and ESRI file into a few JavaSript files.
* CSS Stylus has been set-up with the demo application. To enable this feature uncomment the Stylus line in the `build.sh` script.
* If you are using Stylus, `src/app/resources/app.styl` will contain all the applications CSS.

Directory Tree
--------------
* `/dist` Output folder for the complied code.
* `/node_modules` Node.js modules used to compile the JavaScript.
* `/profiles` Holds the build profile.
 * `/app.profile.js` Setting used in the build process.
* `/src`  Application's source files.
 * `/app` **Application code**.
 * `/dgrid` Vendor js files. Should not require editing.
 * `/dijit` Vendor js files. Should not require editing.
 * `/dojo` Vendor js files. Should not require editing.
 * `/dojox` Vendor js files. Should not require editing.
 * `/esri` Vendor js files. Should not require editing.
 * `/esri-init`Esri initialization js file. Should not require editing.
 * `/put-selector` Vendor js files. Should not require editing.
 * `/util` Vendor js files. Should not require editing.
 * `/xstyle` Vendor js files. Should not require editing.
 * `/index.html` **Application's HTML file**.
* `/build.sh` Sets up and starts the build process. Uses `app.profile.js`.

Manual Set-up Installation of the ESRI JavaSrcipt API
----------------------------------------------
Using grunt to slurp the ESRI JavaScript API does not acquire all the ESRI JS API. For most applications, a manual installation of the ESRI JavaSrcipt API will not be required. However, if you need the full installation here are the steps.

1. Go to https://developers.arcgis.com/en/downloads/
2. Login. You will need an ESRI account.
3. Download the ArcGIS API for JavaScript Locally Hosted API version 3.12
4. Open the downloaded `arcgis_js_v312_api.zip` zip file
5. Extract `arcgis_js_v312_api.zip/arcgis_js_v312_api/arcgis_js_api/library/3.12/3.12/esri/` to `/src/esri/`
6. Extract `arcgis_js_v312_api.zip/arcgis_js_v312_api/arcgis_js_api/library/3.12/3.12/init.js` to `src/esri-init/`
7. Open `src/esri-init/init.js` in a text editor and search for the text `[HOSTNAME_AND_PATH_TO_JSAPI]` replace `baseUrl:(location.protocol === 'file:' ? 'http:' : location.protocol) + '//' + "[HOSTNAME_AND_PATH_TO_JSAPI]dojo"` text with `baseUrl:"../dojo"`

A Special Thanks
----------------
This project derived a lot of its structure and design from the excellent dojo-boilerplate project https://github.com/csnover/dojo-boilerplate.
