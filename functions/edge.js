const sirv = require('sirv');
const server = require('polka');
const compression = require('compression');
const serverless = require('serverless-http'); // Serverless HTTP Connections
global.isExport = true;
const { sapper } = require('./__sapper__/build/server/server'); // Import the sapper middleware
var app = server();

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