const server = require('server')
const { get } = server.router;
const { render, json } = server.reply;

const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const whois = require('node-whois')


const getData = async (url) => {
    console.log("....getting data for : " + url)
    return await whois.lookup(url)
}

// console.log(async () => { await zzz() })

server({ port: 8080 }, [
    get('/', async ctx => render('index.html')),
    get('/whois/:url', async ctx => json( { "d" : await myAsyncFunction(ctx.params.url) } ))
    /*
    ctx => {
        console.log(ctx.params.url);  // hello
        console.log(ctx.query.url);   // Francisco

        await getData(ctx.params.url)
        //return { page: ctx.params.url, name: ctx.query.url };
    })
    */
]);



function myAsyncFunction(url) {
    
    console.log("BLAAAAAAAAAAA")
    console.log(url)
  return new Promise((resolve, reject) => {
    whois.lookup(url, function(err, data) {
        if(data == null) {
            console.log("will reject")
            console.log(err);
            reject(err);
        }
        console.log("will OK")
        console.log(data);
        resolve(data);
    })
})
}
  /*
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(); 
  
  });  */
// }

/*
new Promise(whois.lookup('google.com', function(err, data) {

})
*/











const logit = (err, data) => {
    console.log(err)
    console.log("==== err ====")
    console.log(data)
}

const zzz = async (url) => {
    console.log("´...................");
    console.log(url);
    let eeee;
    await whois.lookup('google.com', function(err, data) {
        // logit(err, data)
        eeee = data;
    }); 
    console.log( "will return ... ")
    console.log(eeee)
    return eeee;
}


/*

async function zzz() {
    
await whois.lookup('google.com', function(err, data) {
console.log("...")
        return data

}) 
return "999"
}

*/