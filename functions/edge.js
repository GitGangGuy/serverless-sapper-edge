const sirv = require('sirv');
// const server = require('polka'); // Currently no polka support with serverless-http
const server = require('express');
const compression = require('compression');
const { sapper } = require('./__sapper__/build/server/server'); // Import the sapper middleware
const serverless = require('serverless-http'); // Serverless HTTP Connections
const app = server();

app.use(
	compression({
		threshold: 0
	}),
	sirv('static'),
	sapper.middleware()
);

module.exports.server = serverless(app, {
	type: 'edge-origin-request',
	platform: 'aws'
});