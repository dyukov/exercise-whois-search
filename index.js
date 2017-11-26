const server = require('server')
const { get } = server.router;
const { render } = server.reply;

const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const whois = require('node-whois')


server({ port: 8080 }, [
    get('/', ctx => render('index.html')),
    get('/api/whois/:url', ctx => "BLAHAHAHHAH" )
]);


// whois.lookup('midaxo.com', function(err, data) {
//     console.log(data)
// })