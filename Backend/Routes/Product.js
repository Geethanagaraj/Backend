const router = require('express').Router();
const Product = require('../Schema/Product');

//create a new product
router.post('/create', async(req, res) => {
  try{
    const{name, price, description, reviews, ratings} = req.body;
    const newProduct = new Product({name, price, description, reviews, ratings});
    await newProduct.save();
    res.status(201).json(newProduct);
  }
  catch (error) {
    res.status(500).json({message:error.message});
  }
});

//get all data
router.get('/all', async(req, res) => {
  try{
    const products = await Product.find();
    res.status(200).json(products);
  }
  catch(error) {
    res.status(500).json({message:error.message});
  }
});

//get started by id
router.get('/:id' , async(req,res) => {
  try{
    const product = await Product.findById(req.params.id);
    if(!product) {
      return res.status(404).json({message: 'Product not found'});
    } 
    res.status(200).json(product);  
  }
  catch(error) {
    res.status(500).json({message:error.message});
  }
});

//update by id
router.put('/:id', async(req,res) => {
  try{
    const{id} = req.params;
    const{name, price, description, reviews, ratings} = req.body;
    const product = await Product.findById(id);
  if(!product) {
    return res.status(404).json({message: 'Product not found'});
  } 
  product.name = name;
  product.price = price;
  product.description = description;
  product.reviews = reviews;
  product.ratings = ratings;
  await product.save();
  res.status(200).json(product);
  }
catch(error) {
    res.status(500).json({message:error.message});
  }
});

//delete by id
router.delete('/:id' , async(req,res) => {
  try{
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if(!product) {
      return res.status(404).json({message: 'Product not found'});
    } 
    res.status(200).json({message: 'Product deleted successfully'});  
  }
  catch(error) {
    res.status(500).json({message:error.message});
  }
});

module.exports = router;
