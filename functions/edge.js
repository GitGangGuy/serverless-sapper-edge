const sirv = require('sirv');
const polka = require('polka'); // Spin up a polka server with sirv and compression
const compression = require('compression');
const sapper = require('sapper/server'); // Import the sapper middleware
const serverless = require('serverless-http'); // Serverless HTTP Connections

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = polka().use(
	compression({
		threshold: 0
	}),
	sirv('static', {
		dev
	}),
	sapper.middleware()
).listen(PORT, err => {
	if (err) console.log('error', err);
});

module.exports.server = serverless(app, {
	type: 'edge-origin-request',
	platform: 'aws'
});