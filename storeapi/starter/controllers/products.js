const Product = require('../models/product')

const gettAllProductsStatic = async (req,res) =>{
    const products =await Product.find({}) 
    res.status(200).json({ products })
}
const gettAllProducts = async (req,res) =>{
    res.status(200).json({msg :'products  route'})
}

module.exports = {
    gettAllProducts,
    gettAllProductsStatic,
}