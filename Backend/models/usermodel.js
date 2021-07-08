const mongoose = require('mongoose');
const Model_name = "user";

const userSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true,
          unique: true,
          index: true
     },
     password: {
          type: String,
          required: true,
     },
     isAdmin: {
          type: Boolean,
          required: true,
          default: false
     }    
});


mongoose.model(Model_name, userSchema);
module.exports = {Model_name};