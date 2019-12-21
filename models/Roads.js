const mongoose = require('mongoose');
const schema = mongoose.Schema;

const roads = new schema({
	line : {
		type : [ [Number, Number] ]
	},
	streetName : {
		type : String
	}
},
{strict : false}
);

const Roads = mongoose.model('Roads', roads);

module.exports = Roads;
