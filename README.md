# ArcGIS-JS-API-Compiler (for ESRI JS API 3.14)

ESRI ArcGIS JS API Compiler is a basic template for a single page ESRI mapping application. The project has been designed so that a user can easily set-up and compile all the JavaScript and CSS files. The more complex the web application developed, the more benefit will be gained from compiling the code. For example, a recently developed map viewer compiled down from 133 JavaScript files to 12 and 17 CSS files to 9. A total saving of 129 file or 573 kilobytes. In this project a simple demo web application has been included to demonstrate file structure and location.

Prerequisite
------------
1. A web server: [Apache](http://www.apache.org/) or [IIS](http://www.iis.net/) - Needed to host the mapping application.
2. [git](http://git-scm.com/) - Used to download the repository and to run `build.sh` shell script.
3. [Node.js](http://nodejs.org) - Used to compile the code.
4. [GRUNT](http://gruntjs.com/) - Used to slurp(download) the ESRI JavaScript API.
5. [Java runtime](http://www.java.com/) - Used to compile the code.

Installation
------------
1. Open `terminal/cmd`: Create a directory your web server can see
2. Clone the git repository using `git clone --recursive https://github.com/GeographicPerspective/ArcGIS-JS-API-Compiler.git`.
3. Type `cd ArcGIS-JS-API-Compiler`.
4. Type `npm install` to install additional Node.js dependencies.
5. Type `grunt esri-snarff` to slurp the ESRI JavaScript API. 

Compile
-------
1. Run `build.sh` to compile the `/src` folder. It will be built into `/dist`.
  * **Warning and errors:** Unfortunately the compile process generates a collection of errors and warnings which can't be address. Most of these messages can be ignored.

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
   * `/resources` Holds the application's resources (images, css, etc.)
     * `/app.css` The primary CSS file.
    * `main.js` The primary JavaScript file.
    * `/package.js` Used to tell the compiler how to handle the enclosed files
    * `/package.json` Used to tell the compiler information about the folder
 * `/dgrid` Vendor js files. Should not require editing.
 * `/dijit` Vendor js files. Should not require editing.
 * `/dojo` Vendor js files. Should not require editing.
 * `/dojox` Vendor js files. Should not require editing.
 * `/dstore` Vendor js files. Should not require editing.
 * `/esri` Vendor js files. Should not require editing.
 * `/put-selector` Vendor js files. Should not require editing.
 * `/util` Vendor js files. Should not require editing.
 * `/xstyle` Vendor js files. Should not require editing.
 * `/index.html` **Application's HTML file**.
* `/build.sh` Sets up and starts the build process. Uses `app.profile.js`.
* `gruntfile.js` Instructs `Grunt` to slurp the ESRI JavaScript API.
* `package.json` Instructs `Node.js` on which packages to install.

A Special Thanks
----------------
This project derived a lot of its structure and design from the excellent dojo-boilerplate project https://github.com/csnover/dojo-boilerplate.
