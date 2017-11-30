const SearchResult = require('./../models/SearchResult');
const whois = require('node-whois')

module.exports.getSearchResult = async (url) => {
    return new Promise((resolve, reject) => {
        whois.lookup(url, (err, data) => {
            if(data == null) {
                console.log(err);
                logToDb(err, url)
                reject(err);
            }
            logToDb(data, url)
            resolve(data);
        })
    })
}


logToDb = (whoisResult, url) => {
    const searchResult = new SearchResult()
    searchResult.requestUrl = url,
    searchResult.response = whoisResult
    searchResult.save()
        .then(data => { console.log(data) })
        .catch(error => { console.log(error) })
}