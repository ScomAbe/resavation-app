const express = require('express')
const router = express.Router()
const Product = require('../model/product')

//MongoDBからすべて取得
router.get('', function(req, res) {
  Product.find({}, function(err, foundProduts) {
    return res.json(foundProduts)
  })
})

//MongoDBからidに応じて取得
router.get('/:productId', function(req, res) {
  const productId = req.params.productId
  Product.findById(productId, function(err, foundProdut) {
    if(err) {
       return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}]})
    }
    return res.json(foundProdut)
  })
})

module.exports = router
