const mongoose = require('mongoose');
const schema = mongoose.Schema;

const survey = new schema({
	"geometry": {
		"type": {
			type : String,
			default : "Point"
		},
		"coordinates": {
			type : [Number],
			default : [0,0],
			index: '2dsphere'
		}
	},
	"isPothole": {
		type : Boolean,
		default : "false"
	},
	"completion": {
		type : Number,
		default : 50
	},
	"date" : String,
	"userId": String,
	"potholeId": String
});

const Survey = mongoose.model('Survey', survey);

module.exports = Survey;
