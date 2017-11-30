const server = require('server')
const { get } = server.router;
const { render, json } = server.reply;

const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const whois = require('node-whois')
const config = require('./config.json')
const { getSearchResult } = require('./api/controllers/SearchResultController');

// connect to mongo
mongoose.connect(config.mongoConnectionString, { useMongoClient: true })
.then((response) => {
	console.log('mongo connection created')
})
.catch((err) => {
	console.log("Error connecting to Mongo")
	console.log(err)
})


server({ port: 8080 }, [
    get('/', async ctx => render('index.html')),

    // Using the GET so that service could be available as an Open API also.
    // If needed, API could be protected from direct access
    get('/whois/:url', async ctx => json( { "d" : await getSearchResult(ctx.params.url) } ))
]);