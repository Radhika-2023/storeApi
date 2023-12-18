const express= require('express')
const router = express.Router()

const {getAllProducts, getAllProductsStatic, gettAllProducts, gettAllProductsStatic} =require('../controllers/products')

router.route('/').get(gettAllProducts)
router.route('/static').get(gettAllProductsStatic)


module.exports= router