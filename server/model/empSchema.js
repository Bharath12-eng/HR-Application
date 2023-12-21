const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    _id: {
        type: String, // Set the type of _id to String
        default: () => (new mongoose.Types.ObjectId()).toString(), // Set a default value as a new string ObjectId
        },
        dateCreated:{
            type:Date
        },
        dateUpdated:{
            type:Date
        },

    personalDetails: {
        EmployeeID:{
            type:String,
            required:true
        },
        firstName: {
            type: String,
            required: true,
            match: /^[A-Za-z\s\-']+$/i
        },
        lastName: {
            type: String,
            required: true,
            match: /^[A-Za-z\s\-']+$/i
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
        },
        bloodGroup: {
            type: String,
            match: /^(A|B|AB|O)[+-]$/,
            required: true
        },
        countryCode: {
            type: Number,
            required: true,
            enum: ["+91", "+1"],
            minlength: 2,
            maxlength: 2,
            match: /^[A-Z]{2}$/,
            
        },
        phone: {
            type: Number,
            required: true,
            minlength: 10,
            maxlength: 10,
            match: /^\+(?:[0-9] ?){6,14}[0-9]$/
        },
        altPhone: {
            type: Number,
            required: false,
            minlength: 10,
            maxlength: 10,
            match: /^\+(?:[0-9] ?){6,14}[0-9]$/
        },
        DOB: {
            type: Date,
            required: true,
            match: /^(?:19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
        },
        maritalStatus: {
            type: String,
            enum: ["single", "married", "divorced", "separated"],
            required: true
        },
        languages: {
            type: String,
            enum: ["English", "Kannada", "Hindi", "Telugu", "Tamil"],
            required: true
        },
        accommodation: {
            type: "String",
            enum: ["own", "rental", "paying guest", "other"],
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        permanentAddress: 
            {
                country: {
                    type: String,
                    required: true,
                    match: /^[A-Za-z\s\-,'.()]+$/
                },
                doorNo: {
                    type: String,
                    required: true,
                    match: /^[A-Za-z0-9\s\-\/]+$/
                },
                locality: {
                    type: String,
                    required: true,
                    match: /^[A-Za-z0-9\s\-,'.()]+$/

                },
                city: {
                    type: String,
                    required: true,
                    match: /^[A-Za-z\s\-,'.()]+$/
                },
                state: {
                    type: String,
                    required: true,
                    match: /^[A-Za-z\s\-,'.()]+$/
                },
                pincode: {
                    type: Number,
                    required: true,
                    match: /^[A-Za-z0-9\- ]+$/
                }


            },
        
        contactAddress: 
            {
                country: {
                    type: String,
                    required: true,
                    match: /^[A-Za-z\s\-,'.()]+$/
                },
                doorNo: {
                    type: String,
                    required: true,
                    match: /^[A-Za-z0-9\s\-\/]+$/
                },
                locality: {
                    type: String,
                    required: true,
                    match: /^[A-Za-z0-9\s\-,'.()]+$/
                },
                city: {
                    type: String,
                    required: true,
                    match: /^[A-Za-z\s\-,'.()]+$/
                },
                state: {
                    type: String,
                    required: true,
                    match: /^[A-Za-z\s\-,'.()]+$/
                },
                pincode: {
                    type: Number,
                    required: true,
                    match: /^[A-Za-z0-9\- ]+$/
                },
               
            },
        

        

    },
    step:{
        type:String,
        required:true
    },
    qualification:[
        {
                examination_passed:{
                        type:String,
                        required:true
                },
                university:{
                    type:String,
                    required:true
                },
                year_of_passing:{
                    type:Number,
                    required:true
                },
                percentage:{
                    type:Number,
                    required:true
                }
        },
    ],

    workHistory:[
        {
            Designation:{
                type:String,
                required:true
            },
            companyName:{
                type:String,
                required:true
            },
            From:{
                type:Date,
                required:true
            },
            To:{
                type:Date,
                required:true
            }
        }
    ],
    

    
},

{
    timestamps:true
}
)

module.exports = mongoose.model("Employe", EmployeeSchema);

