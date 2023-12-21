const Employee = require("../model/empModel");
// const { ObjectID } = require('mongoose').Types;
var mongoose = require('mongoose');



// async function convertObjectIdsToStrings() {
//     try {
//         // Find all documents in the Employee collection
//         const employees = await Employee.find({}).lean();

//         // Iterate through each document and update the ObjectId fields to strings
//         const updatedEmployees = employees.map(employee => {
//             const empFamily = Array.isArray(employee.personalDetails.empFamily)
//                 ? employee.personalDetails.empFamily.map(familyMember => ({
//                     ...familyMember,
//                     _id: familyMember._id.toString(),
//                 }))
//                 : [];

//             const updatedPersonalDetails = {
//                 ...employee.personalDetails,
//                 empFamily: empFamily,
//             };

//             return {
//                 ...employee,
//                 personalDetails: updatedPersonalDetails,
//                 _id: employee._id.toString(), // Convert ObjectId to string
//             };
//         });

//         // Update the documents in the Employee collection
//         for (const updatedEmployee of updatedEmployees) {
//             await Employee.updateOne({ _id: updatedEmployee._id }, updatedEmployee);
//         }

//         console.log('All ObjectId values in the Employee collection converted to strings successfully.');
//     } catch (error) {
//         console.error('Error occurred:', error);
//     } finally {
//         // Close the Mongoose connection
//         // mongoose.connection.close();
//     }
// }

// // Call the function to convert ObjectId values to strings
// convertObjectIdsToStrings();


const generateEmployeeId = async () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    const highestEmployee = await Employee.findOne(
        { "otherDetails.employeeId": { $regex: `^VIDZI${year}` } },
        {},
        { sort: { "otherDetails.employeeId": -1 } }
    );

    let sequentialNumber = 1;
    if (highestEmployee && highestEmployee.otherDetails && highestEmployee.otherDetails.employeeId) {
        const previousEmployeeId = highestEmployee.otherDetails.employeeId;
        const previousNumber = parseInt(previousEmployeeId.substring(9), 10);
        if (!isNaN(previousNumber)) {
            sequentialNumber = previousNumber + 1;
        }
    }

    const sequentialNumberString = sequentialNumber.toString().padStart(3, '0');
    const employeeId = `VIDZI${year}${sequentialNumberString}`;

    return employeeId;
};

const empCtrl = {
    addEmp: async (req, res) => {
        try {
            const {
                'personalDetails[empFirstName]': empFirstName,
                'personalDetails[empLastName]': empLastName,
                'personalDetails[empFatherName]': empFatherName,
                'personalDetails[empMotherName]': empMotherName,
                'personalDetails[empEmail]': empEmail,
                'personalDetails[empBloodGroup]': empBloodGroup,
                'personalDetails[empPhone]': empPhone,
                'personalDetails[empAltPhone]': empAltPhone,
                'personalDetails[empAge]': empAge,
                'personalDetails[empDOB]': empDOB,
                'personalDetails[empMaritalStatus]': empMaritalStatus,
                'personalDetails[empLanguages]': empLanguages,
                'personalDetails[empAccommodation]': empAccommodation,
                'personalDetails[empGender]': empGender,
                'personalDetails[empFamily][0][relation]': empFamilyRelation,
                'personalDetails[empFamily][0][education]': empFamilyEducation,
                'personalDetails[empFamily][0][occupation]': empFamilyOccupation,
                'personalDetails[empFamily][0][otherDetails]': empFamilyOtherDetails,
                'personalDetails[empCurrentHouseNo]': empCurrentHouseNo,
                'personalDetails[empCurrentRoadLocality]': empCurrentRoadLocality,
                'personalDetails[empCurrentCity]': empCurrentCity,
                'personalDetails[empCurrentState]': empCurrentState,
                'personalDetails[empCurrentPinCode]': empCurrentPinCode,
                'personalDetails[empPermanentHouseNo]': empPermanentHouseNo,
                'personalDetails[empPermanentRoadLocality]': empPermanentRoadLocality,
                'personalDetails[empPermanentCity]': empPermanentCity,
                'personalDetails[empPermanentState]': empPermanentState,
                'personalDetails[empPermanentPinCode]': empPermanentPinCode,
                'qualification[0][examinationPassed]': qualificationExaminationPassed,
                'qualification[0][university]': qualificationUniversity,
                'workHistory[0][organization]': workHistoryOrganization,
                'workHistory[0][location]': workHistoryLocation,
                'workHistory[0][industry]': workHistoryIndustry,
                'workHistory[0][designation]': workHistoryDesignation,
                'workHistory[0][dateOfJoining]': workHistoryDateOfJoining,
                'workHistory[0][dateOfLeaving]': workHistoryDateOfLeaving,
                'workHistory[0][netSalary]': workHistoryNetSalary,
                'workHistory[0][reasonForChange]': workHistoryReasonForChange,
                'otherDetails[illegalProceedings]': otherDetailsIllegalProceedings,
                'otherDetails[illegalProceedingsDetails]': otherDetailsIllegalProceedingsDetails,
                'otherDetails[employeeId]': otherDetailsEmployeeId,
                'otherDetails[dateOfJoining]': otherDetailsDateOfJoining,
                'otherDetails[accessCardNo]': otherDetailsAccessCardNo,
                'otherDetails[positionOffered]': otherDetailsPositionOffered
            } = req.body;


            console.log("addreq", req.body);

            const newEmployee = new Employee({
                personalDetails: {
                    empFirstName,
                    empLastName,
                    empFatherName,
                    empMotherName,
                    empEmail,
                    empBloodGroup,
                    empPhone,
                    empAltPhone,
                    empAge,
                    empDOB,
                    empMaritalStatus,
                    empLanguages,
                    empAccommodation,
                    empGender,
                    empFamily: [
                        {
                            relation: empFamilyRelation,
                            education: empFamilyEducation,
                            occupation: empFamilyOccupation,
                            otherDetails: empFamilyOtherDetails
                        }
                    ],
                    empCurrentHouseNo,
                    empCurrentRoadLocality,
                    empCurrentCity,
                    empCurrentState,
                    empCurrentPinCode,
                    empPermanentHouseNo,
                    empPermanentRoadLocality,
                    empPermanentCity,
                    empPermanentState,
                    empPermanentPinCode
                },
                qualification: [
                    {
                        examinationPassed: qualificationExaminationPassed,
                        university: qualificationUniversity
                    }
                ],
                workHistory: [
                    {
                        organization: workHistoryOrganization,
                        location: workHistoryLocation,
                        industry: workHistoryIndustry,
                        designation: workHistoryDesignation,
                        dateOfJoining: workHistoryDateOfJoining,
                        dateOfLeaving: workHistoryDateOfLeaving,
                        netSalary: workHistoryNetSalary,
                        reasonForChange: workHistoryReasonForChange
                    }
                ],
                otherDetails: {
                    illegalProceedings: otherDetailsIllegalProceedings,
                    illegalProceedingsDetails: otherDetailsIllegalProceedingsDetails,
                    employeeId: otherDetailsEmployeeId,
                    dateOfJoining: otherDetailsDateOfJoining,
                    accessCardNo: otherDetailsAccessCardNo,
                    positionOffered: otherDetailsPositionOffered
                }
            });

            await newEmployee.save();


            // Send the newly created employee data in the response
            res.json({
                msg: "Employee created successfully",
                employee: newEmployee
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ msg: err.message });
        }
    },

    allEmp: async (req, res) => {
        try {
            let Empdata = await Employee.find({});
            res.status(200).json(Empdata);
            console.log(Empdata);
        } catch (err) {
            console.log(err);
            return res.status(404).json({ message: " Data not found" })

        }

    },




    getEmp: async (req, res) => {
        const id = req.params.id;
        try {
            // res.json("get emp called");
            const employee = await Employee.findById({ _id: id });
            res.status(200).json({ employee })
        } catch (err) {
            return res.status(404).json({ msg: err.message });
        }
    },

    updateEmp: async (req, res) => {

        try {
            const { empEmail } = req.body;
            const existingEmployee = await Employee.findOne({ "personalDetails.empEmail": empEmail });

            if (!existingEmployee) {
                return res.status(404).json({ msg: "Employee not found" });
            }

            const id = req.params.id;

            const {
                empFirstName, empLastName, empFatherName, empMotherName, empBloodGroup,
                empPhone, empAltPhone, empAge, empDOB, empMaritalStatus, empLanguages,
                empAccommodation, empGender, empFamily, empCurrentHouseNo, empCurrentRoadLocality,
                empCurrentCity, empCurrentState, empCurrentPinCode, empPermanentHouseNo,
                empPermanentRoadLocality, empPermanentCity, empPermanentState, empPermanentPinCode
            } = req.body;

            console.log("request", req.body)

            // existingEmployee.personalDetails.empFirstName = empFirstName;
            // existingEmployee.personalDetails.empLastName = empLastName;
            // existingEmployee.personalDetails.empFatherName = empFatherName;
            // existingEmployee.personalDetails.empMotherName = empMotherName;
            // existingEmployee.personalDetails.empBloodGroup = empBloodGroup;
            // existingEmployee.personalDetails.empPhone = empPhone;
            // existingEmployee.personalDetails.empAltPhone = empAltPhone;
            // existingEmployee.personalDetails.empAge = empAge;
            // existingEmployee.personalDetails.empDOB = empDOB;
            // existingEmployee.personalDetails.empMaritalStatus = empMaritalStatus;
            // existingEmployee.personalDetails.empLanguages = empLanguages;
            // existingEmployee.personalDetails.empAccommodation = empAccommodation;
            // existingEmployee.personalDetails.empGender = empGender;
            // existingEmployee.personalDetails.empFamily = empFamily;
            // existingEmployee.personalDetails.empCurrentHouseNo = empCurrentHouseNo;
            // existingEmployee.personalDetails.empCurrentRoadLocality = empCurrentRoadLocality;
            // existingEmployee.personalDetails.empCurrentCity = empCurrentCity;
            // existingEmployee.personalDetails.empCurrentState = empCurrentState;
            // existingEmployee.personalDetails.empCurrentPinCode = empCurrentPinCode;
            // existingEmployee.personalDetails.empPermanentHouseNo = empPermanentHouseNo;
            // existingEmployee.personalDetails.empPermanentRoadLocality = empPermanentRoadLocality;
            // existingEmployee.personalDetails.empPermanentCity = empPermanentCity;
            // existingEmployee.personalDetails.empPermanentState = empPermanentState;
            // existingEmployee.personalDetails.empPermanentPinCode = empPermanentPinCode;





            // await Employee.updateMany({_id:id},updatedata);
            // res.status(201).json(updatedata);

            const empupdate = req.body;
            console.log("emo", empupdate)
            // let updatedata = new Employee(empupdate);
            // if(!empupdate){
            //     return res.status(422).json({message:"All fields are required"})
            // }else{
            let data1 = await Employee.findByIdAndUpdate(id, empupdate);

            res.status(201).json({ data1 });
            console.log("data1", data1)

        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }

    },


    deleteEmp: async (req, res) => {
        // res.json("delete emp called");


        const id = req.params.id;
        try {

            await Employee.findByIdAndDelete({ _id: id });
            res.status(201).json({ message: "Employe  deleted successfully" })

        }

        catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },



}




const allEmployee = async(req,res) =>{

        try{
            let Empdata= Employee.find({});
            res.status(200).json(Empdata)
        }catch(err){
            console.log(err)
            res.status(404).json({message:"Data not found"})
        }
}



const getEmployee = async(req,res)=>{
    const id = req.params.id;
        try{
               let getemploye= await Employee.findById({_id:id}) ;
               return res.status(200).json(getemploye)
        }catch(err){
            console.log(err)
           return  res.status(404).json("Data not found")
        }
}

const updatEmployee = async(req,res) =>{
    const Updatedata = req.body;
        try{
                let updateEmploye = await Employee.findByIdAndUpdate(id,Updatedata);
                return res.status(201).json(updateEmploye)
        }catch(err){
            console.log(err)
                return res.status(404).json({message:err.message})
        }
}

const deleteEmployee = async(req,res)=>{
    const id = req.params.id;
            try{
                    let deletemploye = await Employee.findByIdAndDelete({_id:id})
                    console.log("Delete data ",deletemploye)
                    return res.status(200).json({message:"Deleted Successfully"})
                   
            }catch(err){
                console.log(err);
                return res.status(404).json({message:err})

            }
}
module.exports = {
    empCtrl,
    allEmployee,
    getEmployee,
    updatEmployee,
    deleteEmployee
};