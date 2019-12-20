const router = require('express').Router();
const Jerks = require('../models/Jerks');

router.get('/', (req, res) => {
	res.send("server is up");
})

router.post('/post', (req, res) => {
	const jerk = new Jerks({
		'yacc' : req.body.yacc,
		'lat' : req.body.lat,
		'lon' : req.body.lon
	});

	Jerks.create(jerk).then(dat => {
		res.send(dat);
	});
});

router.get('/all', (req, res) => {
	Jerks.find({}).then(data => {
		res.json(data);
	})
})

module.exports = router;