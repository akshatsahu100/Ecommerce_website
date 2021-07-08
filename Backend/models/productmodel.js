const mongoose = require('mongoose');
const Model_name = "product";

const productSchema = new mongoose.Schema({
     title: { 
          type: String, 
          required: true 
     },
     image: { 
          type: String, 
          required: true 
     },
     brand: { 
          type: String, 
          required: true 
     },
     price: { 
          type: Number, 
          default: 0, 
          required: true 
     },
     category: { 
          type: String, 
          required: true 
     },
     countInStock: {
          type: Number, 
          default: 0, 
          required: true 
     },
     description: { 
          type: String, 
          required: false
     },
     rating: { 
          type: Number, 
          default: 0, 
          required: true 
     },
     numReviews: { 
          type: Number,
          default: 0, 
          required: true 
     }
});

mongoose.model(Model_name, productSchema);
module.exports = {Model_name};