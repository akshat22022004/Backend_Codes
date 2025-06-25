const mongoose = require("mongoose");   

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
    },  
})
const orderSchema  = mongoose.orderSchema({
    orderPrice:{
        type: Number,
        required: true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,    
        ref:"User", 
    },
    orderItems:{
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum:["pending", "completed", "cancelled"],
        default: "pending",
    },
},{timeStamps: true});   



export const Order = mongoose.model("Order",orderSchema);   