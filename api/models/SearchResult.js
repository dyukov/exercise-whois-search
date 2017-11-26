const mongoose = require('mongoose')
/*
	Search Result Schema
*/
const SearchResultSchema = mongoose.Schema = {
	requestUrl:  String,
	response:  String,
	request_date: String,
	/*shape: String,
	size: String,
	smallPicLink: String,
	bigPicLink: String,
	tags: Array */
}

module.exports = mongoose.model('SearchResult', SearchResultSchema)
///