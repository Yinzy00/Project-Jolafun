const express = require('express'),
Springkasteel = require('./models/springkasteel'),
router = express.Router()
;

router.get('/', async (req, res) => {
    res.send('GET /springkasteel');
    try {
        res.json(await Springkasteel.find());
    } catch (e) {
        console.log(`Foutmelding ${e}`);
        // res.sendStatus(500);
    }
    console.log("GET route /springkasteel called");
});

router.post('/', async (req, res) => {
    console.log("POST route /springkasteel called");
    try {
        res.send(await Springkasteel.create(req.body));
    } catch (error) {
        console.log(error);
        //res.sendStatus(500);
    }
})

module.exports = router;