const sirv = require('sirv');
const polka = require('polka');
const compression = require('compression');
const sapper = require('./__sapper__/build/server/server'); // Import the sapper middleware
const serverless = require('serverless-http'); // Serverless HTTP Connections

const app = polka().use(
	compression({
		threshold: 0
	}),
	sirv('static'),
	sapper.middleware()
).listen(PORT);

module.exports.server = serverless(app, {
	type: 'edge-origin-request',
	platform: 'aws'
});