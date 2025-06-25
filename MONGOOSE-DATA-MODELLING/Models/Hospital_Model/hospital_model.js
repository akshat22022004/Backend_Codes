const  mongoose = require ("mongoose");

const hospitalRecordSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: true, 
    },
    address:{
        type: String,
        required: true, 
    },
    phoneNumber:{
        type: Number,
        required: true, 
    },
    city:{
        type: String,
        required: true, 
    },
    pincode:{
        type: String,
        required: true,
    },
    specializedIn:[
        {
            type: String,
            required: true, 
        },
    ],
},{ timeStamps: true });


export const HospitalRecord = mongoose.model("Hospital",hospitalRecordSchema);    