const router = require('express').Router();
const Jerks = require('../models/Jerks');
const Survey = require('../models/Survey');
const Roads = require('../models/Roads');

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


router.post('/postRoad', (req, res) => {
	Roads.create(req.body).then(dat => {
		res.send(dat)
	})
})
router.get('/allRoads',async (req, res) => {
	const all = await Roads.find({});
	res.send(all);
})



router.post('/postSurvey', (req, res) => {
	const surv = new Jerks(req.body);

	Survey.create(surv).then(dat => {
		res.send(data);
	})
});
router.post('/notifQ', (req, res) => {
	let loc = req.body.loc;
	let userId = req.body.user;	
})
router.get('/modify', async (req, res) => {
	const All = await Jerks.find({});
	res.send(All);
})

module.exports = router;