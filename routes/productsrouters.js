const router = require("express").Router();
let Products = require("../models/products.model");

//add a new product
router.route("/add").post((req, res) => {

    const products = new Products(req.body);
    products.save().then(() => {
        res.json("Product Added")
    }).catch((err) => {
        console.log(err);
    })

})

//get all products
router.route("/all").get((req, res) => {
    Products.find({}).populate('categories', 'name Description')
        .then((events => {
            res.json(events)
        })).catch((err) => {
            console.log(err)
        })
})

//get products using product id
router.route("/product/:id").get((req, res) => {
    let proid = req.params.id;
    Products.findById(proid).populate('categories', 'name Description')
        .then((events => {
            res.json(events)
        })).catch((err) => {
            console.log(err)
        })
})

//delete products
router.route("/delete/:id").delete(async (req, res) => {
    let eventId = req.params.id;

    await Products.findByIdAndDelete(eventId).then(() => {
        res.status(200).send({ status: "product deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with delete ", eventerror: err.message });

    })
})


module.exports = router;
