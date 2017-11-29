const server = require('server')
const { get } = server.router;
const { render, json } = server.reply;

const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const whois = require('node-whois')
const config = require('./config.json')

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
    // If needed, API could be protected from access for example using JWT
    get('/whois/:url', async ctx => json( { "d" : await getData(ctx.params.url) } ))
]);


function getData(url) {

   console.log(url)
    return new Promise((resolve, reject) => {
        whois.lookup(url, (err, data) => {
            if(data == null) {
                console.log("Error appeared while lookup: " + url)
                // TODO: Log to Errors table
                console.log(err);
                reject(err);
            }
            console.log("will OK")
            resolve(data);
        })
    })
}