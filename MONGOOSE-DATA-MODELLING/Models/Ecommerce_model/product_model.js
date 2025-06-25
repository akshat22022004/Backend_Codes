import { Category } from "./category_model";

const mongoose = require("mongoose");   

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    productImage:{
        type: String,
        required: true, 
    },
    price: {
        type: Number,
        default: 0, 
        required: true,
    },
    stock:{
        type: Number,
        default: 0, 
        required: true, 
    },
    Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    Owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
},{ timeStamps: true });    


export const Product = mongoose.model("Product",productSchema); 