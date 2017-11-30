const SearchResult = require('./../models/SearchResult');
const whois = require('node-whois')

module.exports.getSearchResult = async (url) => {
    console.log("ZZZZZZZZZZZZZZZZZZ" + url)
    return new Promise((resolve, reject) => {
        whois.lookup(url, (err, data) => {
            if(data == null) {
                console.log(err);
                logToDb(err, url)
                reject(err);
            }
            console.log("ZZZZZZZZZZZZZZZZZZ" + logToDb)
            logToDb(data, url)
            resolve(data);
        })
    })
}


logToDb = (whoisResult, url) => {
    console.log("ZZZZZZZZZZZZZZZZZ.2" + logToDb)
    const searchResult = new SearchResult()
    searchResult.requestUrl = url,
    searchResult.response = whoisResult
    searchResult.save()
        .then(data => { console.log(data); console.log("then.2" + logToDb) })
        .catch(error => { console.log(error) })
}