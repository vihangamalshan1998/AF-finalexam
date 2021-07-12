const router = require("express").Router();
let Catergories = require("../models/Categories.model");

//add a new catergery
router.route("/add").post((req, res) => {

    const catergories = new Catergories(req.body);
    catergories.save().then(() => {
        res.json("catergories Added")
    }).catch((err) => {
        console.log(err);
    })

})

//get all catergory
router.route("/all").get((req, res) => {
    Catergories.find({}).populate('products', 'code name amount price size')
        .then((events => {
            res.json(events)
        })).catch((err) => {
            console.log(err)
        })
})

router.route("/catergory/:id").get((req, res) => {
    let catid = req.params.id;
    Catergories.findById(catid).populate('products', 'code name amount price size')
        .then((events => {
            res.json(events)
        })).catch((err) => {
            console.log(err)
        })
})




module.exports = router;
