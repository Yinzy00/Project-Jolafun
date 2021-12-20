const express = require('express'),
Springkasteel = require('./models/springkasteel'),
router = express.Router()
;
//Get (with optional sortOrder & sortFilter params)
router.get('/', async (req, res) => {
    try {
        const sortFilter = req.query.sortFilter;
        const sortOrder = req.query.sortOrder;

        let collection = await Springkasteel.find();

        if (sortFilter != undefined) {
            if (sortOrder == "1") {
                collection.sort((a, b) => (a[sortFilter] < b[sortFilter]) ? 1 : -1);
            }
            else{
                collection.sort((a, b) => (a[sortFilter] < b[sortFilter]) ? -1 : 1);
            }
        }
        console.log(sortFilter);
        res.json(collection);
    } catch (e) {
        console.log(`Foutmelding ${e}`);
        res.sendStatus(500);
    }
    console.log("GET route /springkasteel called");
});
//Get by Id
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await Springkasteel.findById(id));
    } catch (e) {
        console.log(`Foutmelding ${e}`);
        res.sendStatus(500);
    }
    console.log("GET route  /springkasteel/:id called");
});
//Create
router.post('/', async (req, res) => {
    console.log("POST route /springkasteel called");
    try {
        res.send(await Springkasteel.create(req.body));
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    console.log("POST route  /springkasteel called");
})
//Update by id
router.put('/:id', async (req, res) => {
    console.log("");
    try {
        const id = req.params.id;
        const item = await Springkasteel.findById(id);
        if(item!=null){
            const body = req.body;
            if(body!=""){
                res.send(await Springkasteel.findByIdAndUpdate(id, {$set: req.body}));
            }
            else{
                console.log(body);
                // res.send("Body moet ingevuld zijn");
                res.status(500).send({status:500, message:"Body ongeldig"});
            }
        }
        else{
            res.status(500).send({status:500, message:"Id ongeldig"});
        }
        
    } catch (error) {
        console.log(`Foutmelding ${error}`)
        res.sendStatus(500);
    }
    console.log("PUT route  /springkasteel/:id called");
});
router.delete('/:id', async);
module.exports = router;