const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
    DepartNames:{
        type:String,
        enum:['IT Department','Sales Department','HR Department'],
        require:true,
    },
    HOD:{
        type:String,
        require:true,

    },
    Designation:{
        type:String,
        require: true
    }
})

autoIncrement.initialize(mongoose.connection);
DepartmentSchema.plugin(autoIncrement.plugin, 'Departments');

const Department = mongoose.model("Departments",DepartmentSchema);

module.exports={
    Department
}