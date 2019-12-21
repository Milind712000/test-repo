const mongoose = require('mongoose');
const schema = mongoose.Schema;

const jerks = new schema({
	"lat" : {
		type : Number,
		required : true
	},
	"lon" : {
		type : Number,
		required : true
	},
	"yacc" : {
		type : Number,
		required : true
	},
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
});

const Jerks = mongoose.model('Jerks', jerks);

module.exports = Jerks;
