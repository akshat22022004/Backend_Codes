const mongoose = require("mongoose");   

const doctorSchema  = new mongoose.Schema({
    name:{
        type: String,
        required: true, 
    },
    salary:{
        type: Number,
        required: true, 
    },
    qualification:{
        type: String,
        required: true,
    },
    experience:{
        type: Number,
        required: true,
        default: 0,
    },
    worksInHospitals:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
        },
        
    ]
},{ timeStamps: true });


export const DoctorRecord = mongoose.model("Doctor",doctorSchema);   