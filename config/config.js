var express = require('express');

module.exports = function (app) {

	// Set .html as the default template extension
	app.set('view engine', 'html');

	// Initialize the ejs template engine
	app.engine('html', require('ejs').renderFile);

	// Tell express where it can find the templates
	app.set('views', __dirname + '/../views');

	// Make the files in the public folder available to the world
	app.use(express.static(__dirname + '/../public'));

	//Setting port to app
	app.set('port', process.env.PORT || 3001);
	app.listen(app.get('port'));
	console.log("Node Express server listening on port " + app.get('port'));

};