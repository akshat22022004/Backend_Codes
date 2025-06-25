const mongoose = require ("mongoose");  


const categorySchema = new mongoose.schema({
  name: {
    type: String,
    required: true,
  },
  
},{ timeStamps: true });    

export const Category = mongoose.model("Category",categorySchema);