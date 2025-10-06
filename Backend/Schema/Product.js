const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  description:{
    type: String,
    required: true,
    unique: true
  },
  reviews:{
    type: String,
    unique: true
  },
  ratings:{
    type: Number,
   
  },
 
});
 module.exports = mongoose.model('Product', productSchema);