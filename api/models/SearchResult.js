const mongoose = require('mongoose')
/*
	Search Result Schema
*/
const SearchResultSchema = mongoose.Schema = {
	requestUrl:  String,
	response:  String,
	request_date: { type : Date, default: Date.now }
}

module.exports = mongoose.model('SearchResult', SearchResultSchema)
