Link to my project repository: https://github.com/gamboagirl/My_JSCRIPT300_Spring2015_Project 

# project_structure
directory layout for the course project

In the project's root directory, you will need at a minimum the following files:

package.json

.gitignore

Gruntfile.js

LICENSE

README.md


In the app directory, you will be creating your express application. Make an app.js file there that connects to your mongodb database, uses any necessary middle-ware, uses the necessary router module, and listens on the port for your application. 

In the models directory, put your truckModel module that exports a mongoose model which uses a foodTruckSchema. 

In the routes directory, put the truckRoutes module that defines the handlers for your truck routes.

In the public directory, you will create an index.html file that serves as the default file served up when visitors visit your root url. This is also where you will have the main js file which serves as the entrypoint for your client-side application. You can call is main.js, or app.js, or whatever you like, but it will need a script reference inside index.html that follows script references for jquery.js, underscore.js, and backbone.js. Once you implement the individual modules for your client-side application those will need script references as well, but for now, just include the main application js file.

Inside the js/libs directory, if you choose to use it, place the 3rd party libraries you need for your application. If you choose to use CDN references instead, then you don't need to place those files there.

In the root of your application you will find a tests directory. If you wish (it is recommended, but not required for grading), you can write tests for your application. I would create separate server and client-side directories if you intend to write tests to organize them. 
