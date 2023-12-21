const mongoose = require('mongoose');

const Employee = new mongoose.Schema({
    
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
        FirstName: {
            type: String,
            required: true
        },
        LastName: {
            type: String,
            required: true
        },
        FatherName: {
            type: String,
            required: true
        },
        MotherName: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            unique: true,
        },
        BloodGroup: {
            type: String,
            required: true 
        },
        Phone: {
            type: Number,
            required: true,
            unique: true,
            minlength:10,
            maxlength:10
        },
        AltPhone: {
            type: Number,
            unique: true
        },
        Age: {
            type: Number,
            required: true
        },
        DOB: {
            type: String,
            required: true
        },
        MaritalStatus: {
            type: String,
            enum: ['single', 'married', 'divorced', 'widowed', 'separated'],
            required : true 
        },
        Languages: {
            type: String,
            required: true
        },
        Accommodation: {
            type: String,
            enum: ['rental', 'paying guest', 'own', 'other'],
            required : true 
        },
        Gender: {
            type: String,
            enum: ['male', 'female', 'trans', 'intersex', 'do not disclose'],
            required : true 
        },
        Family: [
            {
                relation: {
                    type: String,
                    // required: true,
                },
                age: {
                    type: Number,
                    // required: true,
                },
                education: {
                    type: String,
                    // required: true,
                },
                occupation: {
                    type: String,
                    // required: true,
                },
                otherDetails: {
                    type: String,
                    // required: true,
                },
            }
        ],
        CurrentHouseNo: {
            type: String,
            required: true,
        },
        CurrentRoadLocality: {
            type: String,
            required: true,
        },
        CurrentCity: {
            type: String,
            required: true,
        },
        CurrentState: {
            type: String,
            required: true,
        },
        CurrentPinCode: {
            type: String,
            required: true,
        },
        PermanentHouseNo: {
            type: String,
            required: true,
        },
        PermanentRoadLocality: {
            type: String,
            required: true,
        },
        PermanentCity: {
            type: String,
            required: true,
        },
        PermanentState: {
            type: String,
            required: true,
        },
        PermanentPinCode: {
            type: String,
            required: true,
        },
    },
    
    // qualification: [
    //     {
    //         examinationPassed: {
    //             type: String,
    //             required: true,
    //         },
    //         university: {
    //             type: String,
    //             required: true,
    //         },
    //         yearOfPassing: {
    //             type: Number,
    //             required: true,
    //         },
    //         percentageOfMarks: {
    //             type: Number,
    //             required: true,
    //         },
    //     }
    // ],
    
    // workHistory: [
    //     {
    //         organization: {
    //             type: String,
    //             required: true,
    //         },
    //         location: {
    //             type: String,
    //             required: true,
    //         },
    //         industry: {
    //             type: String,
    //             required: true,
    //         },
    //         designation: {
    //             type: String,
    //             required: true,
    //         },
    //         dateOfJoining: {
    //             type: Date,
    //             required: true,
    //         },
    //         dateOfLeaving: {
    //             type: Date,
    //             required: true,
    //         },
    //         netSalary: {
    //             type: String,
    //             required: true,
    //         },
    //         reasonForChange: {
    //             type: String,
    //             required: true,
    //         },
    //     }
    // ],

    // otherDetails: {
    //     illegalProceedings: {
    //         type: String,
    //         enum: ['No', 'Yes'],
    //         // required: true,
    //     },
    //     illegalProceedingsDetails: {
    //         type: String,
    //     },
    //     loyeeId: {
    //         type: String,
    //     },
    //     dateOfJoining: {
    //         type: Date,
    //         // required: true,
    //     },
    //     accessCardNo: {
    //         type: String,
    //         // required: true,
    //     },
    //     positionOffered: {
    //         type: String,
    //         // required: true,
    //     },
    // },

    deleted: { 
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null
    }
    
    
    // _id: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // _name: {
    //     type: String,
    //     required: true
    // },
    // _father_name: {
    //     type: String,
    //     required: true
    // },
    // _mother_name: {
    //     type: String,
    //     required: true
    // },
    // _present_address: {
    //     type: String,
    //     required: true
    // },
    // _permanent_address: {
    //     type: String,
    //     required: true
    // },
    // _email: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // _phone: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    // _alt_phone: {
    //     type: Number,
    //     unique: true
    // },
    // _blood_group: {
    //     type: String,
    //     required: true
    // },
    // _gender: {
    //     type: String,
    //     required: true
    // },
    // _age: {
    //     type: Number,
    //     required: true
    // },
    // _DOB: {
    //     type: String,
    //     required: true
    // },
    // _accommodation: {
    //     type: Boolean,
    //     required: true
    // },
    // _education: [
    //     {
    //         exm_passed: {
    //             type: String,
    //             required: true
    //         },
    //         university_name: {
    //             type: String,
    //             required: true
    //         },
    //         year_passedOut: {
    //             type: Number,
    //             required: true
    //         },
    //         percentile: {
    //             type: String,
    //             required: true
    //         },
    //         achievement: {
    //             type: String,
    //             required: true
    //         }
    //     },
    //     {
    //         exm_passed: {
    //             type: String,
    //             required: true
    //         },
    //         university_name: {
    //             type: String,
    //             required: true
    //         },
    //         year_passedOut: {
    //             type: Number,
    //             required: true
    //         },
    //         percentile: {
    //             type: String,
    //             required: true
    //         },
    //         achievement: {
    //             type: String,
    //             required: true
    //         }
    //     },
    //     {
    //         exm_passed: {
    //             type: String
    //         },
    //         university_name: {
    //             type: String
    //         },
    //         year_passedOut: {
    //             type: Number
    //         },
    //         percentile: {
    //             type: String
    //         },
    //         achievement: {
    //             type: String
    //         }
    //     },
    //     {
    //         exm_passed: {
    //             type: String
    //         },
    //         university_name: {
    //             type: String
    //         },
    //         year_passedOut: {
    //             type: Number
    //         },
    //         percentile: {
    //             type: String
    //         },
    //         achievement: {
    //             type: String
    //         }
    //     }
    // ],
    // _work_history: [
    //     {
    //         present_job: [
    //             {
    //                 organization: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 location: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 date_of_joining: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 date_of_leaving: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 industry: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 designation: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 net_salary: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 reason_for_change: {
    //                     type: String,
    //                     required: true
    //                 }
    //             }
    //         ],
    //         last_second_job: [
    //             {
    //                 organization: {
    //                     type: String,
    //                 },
    //                 location: {
    //                     type: String,
    //                 },
    //                 date_of_joining: {
    //                     type: String,
    //                 },
    //                 date_of_leaving: {
    //                     type: String,
    //                 },
    //                 industry: {
    //                     type: String,
    //                 },
    //                 designation: {
    //                     type: String,
    //                 },
    //                 net_salary: {
    //                     type: String,
    //                 },
    //                 reason_for_change: {
    //                     type: String,
    //                 }
    //             }
    //         ],
    //         last_third_job: [
    //             {
    //                 organization: {
    //                     type: String,
    //                 },
    //                 location: {
    //                     type: String,
    //                 },
    //                 date_of_joining: {
    //                     type: String,
    //                 },
    //                 date_of_leaving: {
    //                     type: String,
    //                 },
    //                 industry: {
    //                     type: String,
    //                 },
    //                 designation: {
    //                     type: String,
    //                 },
    //                 net_salary: {
    //                     type: String,
    //                 },
    //                 reason_for_change: {
    //                     type: String,
    //                 }
    //             }
    //         ]
    //     }
    // ],
    // _UAN_no: {
    //     type: String,
    //     // required: true
    // },
    // _ESI_no: {
    //     type: String,
    //     // required: true
    // },
    // _contact_reference: [
    //     {
    //         first_ref: [
    //             {
    //                 name: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 address: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 occupation: {
    //                     type: String,
    //                     required: true
    //                 },
    //                 mobile: {
    //                     type: Number,
    //                     required: true
    //                 }
    //             }
    //         ],
    //         second_ref: [
    //             {
    //                 name: {
    //                     type: String
    //                 },
    //                 address: {
    //                     type: String
    //                 },
    //                 occupation: {
    //                     type: String
    //                 },
    //                 mobile: {
    //                     type: Number
    //                 }
    //             }
    //         ]
    //     }
    // ],
    // _loyment_reference: [
    //     {
    //         ref: [
    //             {
    //                 name: {
    //                     type: String
    //                 },
    //                 occupation: {
    //                     type: String
    //                 },
    //                 mobile: {
    //                     type: Number
    //                 }
    //             }
    //         ]
    //     }
    // ],

    // _family_bg: [
    //     {
    //         age: [
    //             {
    //                 father: {
    //                     type: Number
    //                 },
    //                 mother: {
    //                     type: Number
    //                 },
    //                 husband_wife: {
    //                     type: Number
    //                 },
    //                 brother: {
    //                     type: Number
    //                 },
    //                 sister: {
    //                     type: Number
    //                 },
    //                 others: {
    //                     type: Number
    //                 }
    //             }
    //         ],
    //         education: [
    //             {
    //                 father: {
    //                     type: String
    //                 },
    //                 mother: {
    //                     type: String
    //                 },
    //                 husband_wife: {
    //                     type: String
    //                 },
    //                 brother: {
    //                     type: String
    //                 },
    //                 sister: {
    //                     type: String
    //                 },
    //                 others: {
    //                     type: String
    //                 }
    //             }
    //         ],
    //         occupation: [
    //             {
    //                 father: {
    //                     type: String
    //                 },
    //                 mother: {
    //                     type: String
    //                 },
    //                 husband_wife: {
    //                     type: String
    //                 },
    //                 brother: {
    //                     type: String
    //                 },
    //                 sister: {
    //                     type: String
    //                 },
    //                 others: {
    //                     type: String
    //                 }
    //             }
    //         ],
    //         other_details: [
    //             {
    //                 father: {
    //                     type: String
    //                 },
    //                 mother: {
    //                     type: String
    //                 },
    //                 husband_wife: {
    //                     type: String
    //                 },
    //                 brother: {
    //                     type: String
    //                 },
    //                 sister: {
    //                     type: String
    //                 },
    //                 others: {
    //                     type: String
    //                 }
    //             }
    //         ],
    //     }
    // ],
    // _language: {
    //     type: String,
    //     required: true
    // },
    // _hobbies: {
    //     type: String,
    //     required: true
    // },
    // _criminal_offense: {
    //     type: Boolean,
    //     required: true
    // },

    // deleted: { 
    //     type: Boolean,
    //     default: false
    // },
    // deletedAt: {
    //     type: Date,
    //     default: null
    // }
}, 


{
    collection: "Employees",
    timestamps: true,
},


);

module.exports = mongoose.model("Employees", Employee);