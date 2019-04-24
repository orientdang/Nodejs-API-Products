const ProductModel = require('../models/product.model');
const express = require('express');
const router = express.Router();

// Create new product
router.post('/product', (req, res) => {
    // console.log(req.body);
    if (req.body) {
        let model = new ProductModel(req.body);
        model.save().then((doc) => {
            if (!doc) {
                return res.status(500).send(doc);
            }
            res.status(201).send(doc);
        }).catch(err => {
            res.status(500).json(err);
        })
    } else {
        return res.status(400).send('Request body is missing');
    }
})

router.get('/listproduct', (req, res) => {
    if (req.body) {
        ProductModel.find({}, (err, docs) => {
            if (err) {
                res.status(500).send('Can not get list products');
            }
            let products = [];
            docs.map((doc)=>{
                products.push(doc)
            });
            res.status(200).send(products);
        })
    } else {
        res.status(404).send('Missing url params');
    }
})
module.exports = router;

