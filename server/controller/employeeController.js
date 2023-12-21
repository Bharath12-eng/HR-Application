const Employee = require("../model/empModel");
var mongoose = require('mongoose');
const moment = require("moment")

const addEmployee = async (req, res) => {
    try {
        let {
            personalDetails: {
                FirstName,
                LastName,
                FatherName,
                MotherName,
                Email,
                BloodGroup,
                Phone,
                AltPhone,
                Age,
                DOB,
                MaritalStatus,
                Languages,
                Accommodation,
                Gender,
                Family,
                relation,
                age,
                education,
                occupation,
                otherDetails,
                CurrentHouseNo,
                CurrentRoadLocality,
                CurrentCity,
                CurrentState,
                CurrentPinCode,
                PermanentHouseNo,
                PermanentRoadLocality,
                PermanentCity,
                PermanentState,
                PermanentPinCode }, } = req.body;


        console.log("request", req.body);

        const newEmployee = new Employee({
            personalDetails: {
                FirstName,
                LastName,
                FatherName,
                MotherName,
                Email,
                BloodGroup,
                Phone,
                AltPhone,
                Age,
                DOB,
                MaritalStatus,
                Languages,
                Accommodation,
                Gender,
                Family,
                relation,
                age,
                education,
                occupation,
                otherDetails,
                CurrentHouseNo,
                CurrentRoadLocality,
                CurrentCity,
                CurrentState,
                CurrentPinCode,
                PermanentHouseNo,
                PermanentRoadLocality,
                PermanentCity,
                PermanentState,
                PermanentPinCode
            }
        });

        // const StoredEmployee = Employee.findOne({Email})

        // if(StoredEmployee){
        //     res.status(401).json({message:"Employee Already Exist"})
        // }
        const savedEmployee = await newEmployee.save();
        console.log("savedata", savedEmployee);
        res.json({
            msg: "Employee created successfully",
            employee: savedEmployee
        });

        console.log("First",FirstName)


    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message })
    }

    // try {
    //     const {
    //         'personalDetails[empFirstName]': empFirstName,
    //         'personalDetails[empLastName]': empLastName,
    //         'personalDetails[empFatherName]': empFatherName,
    //         'personalDetails[empMotherName]': empMotherName,
    //         'personalDetails[empEmail]': empEmail,
    //         'personalDetails[empBloodGroup]': empBloodGroup,
    //         'personalDetails[empPhone]': empPhone,
    //         'personalDetails[empAltPhone]': empAltPhone,
    //         'personalDetails[empAge]': empAge,
    //         'personalDetails[empDOB]': empDOB,
    //         'personalDetails[empMaritalStatus]': empMaritalStatus,
    //         'personalDetails[empLanguages]': empLanguages,
    //         'personalDetails[empAccommodation]': empAccommodation,
    //         'personalDetails[empGender]': empGender,
    //         'personalDetails[empFamily][0][relation]': empFamilyRelation,
    //         'personalDetails[empFamily][0][education]': empFamilyEducation,
    //         'personalDetails[empFamily][0][occupation]': empFamilyOccupation,
    //         'personalDetails[empFamily][0][otherDetails]': empFamilyOtherDetails,
    //         'personalDetails[empCurrentHouseNo]': empCurrentHouseNo,
    //         'personalDetails[empCurrentRoadLocality]': empCurrentRoadLocality,
    //         'personalDetails[empCurrentCity]': empCurrentCity,
    //         'personalDetails[empCurrentState]': empCurrentState,
    //         'personalDetails[empCurrentPinCode]': empCurrentPinCode,
    //         'personalDetails[empPermanentHouseNo]': empPermanentHouseNo,
    //         'personalDetails[empPermanentRoadLocality]': empPermanentRoadLocality,
    //         'personalDetails[empPermanentCity]': empPermanentCity,
    //         'personalDetails[empPermanentState]': empPermanentState,
    //         'personalDetails[empPermanentPinCode]': empPermanentPinCode,
    //         'qualification[0][examinationPassed]': qualificationExaminationPassed,
    //         'qualification[0][university]': qualificationUniversity,
    //         'workHistory[0][organization]': workHistoryOrganization,
    //         'workHistory[0][location]': workHistoryLocation,
    //         'workHistory[0][industry]': workHistoryIndustry,
    //         'workHistory[0][designation]': workHistoryDesignation,
    //         'workHistory[0][dateOfJoining]': workHistoryDateOfJoining,
    //         'workHistory[0][dateOfLeaving]': workHistoryDateOfLeaving,
    //         'workHistory[0][netSalary]': workHistoryNetSalary,
    //         'workHistory[0][reasonForChange]': workHistoryReasonForChange,
    //         'otherDetails[illegalProceedings]': otherDetailsIllegalProceedings,
    //         'otherDetails[illegalProceedingsDetails]': otherDetailsIllegalProceedingsDetails,
    //         'otherDetails[employeeId]': otherDetailsEmployeeId,
    //         'otherDetails[dateOfJoining]': otherDetailsDateOfJoining,
    //         'otherDetails[accessCardNo]': otherDetailsAccessCardNo,
    //         'otherDetails[positionOffered]': otherDetailsPositionOffered
    //     } = req.body;


    //     console.log("addreq", req.body);

    //     const newEmployee = new Employee({
    //         personalDetails: {
    //             empFirstName,
    //             empLastName,
    //             empFatherName,
    //             empMotherName,
    //             empEmail,
    //             empBloodGroup,
    //             empPhone,
    //             empAltPhone,
    //             empAge,
    //             empDOB,
    //             empMaritalStatus,
    //             empLanguages,
    //             empAccommodation,
    //             empGender,
    //             empFamily: [
    //                 {
    //                     relation: empFamilyRelation,
    //                     education: empFamilyEducation,
    //                     occupation: empFamilyOccupation,
    //                     otherDetails: empFamilyOtherDetails
    //                 }
    //             ],
    //             empCurrentHouseNo,
    //             empCurrentRoadLocality,
    //             empCurrentCity,
    //             empCurrentState,
    //             empCurrentPinCode,
    //             empPermanentHouseNo,
    //             empPermanentRoadLocality,
    //             empPermanentCity,
    //             empPermanentState,
    //             empPermanentPinCode
    //         },
    //         qualification: [
    //             {
    //                 examinationPassed: qualificationExaminationPassed,
    //                 university: qualificationUniversity
    //             }
    //         ],
    //         workHistory: [
    //             {
    //                 organization: workHistoryOrganization,
    //                 location: workHistoryLocation,
    //                 industry: workHistoryIndustry,
    //                 designation: workHistoryDesignation,
    //                 dateOfJoining: workHistoryDateOfJoining,
    //                 dateOfLeaving: workHistoryDateOfLeaving,
    //                 netSalary: workHistoryNetSalary,
    //                 reasonForChange: workHistoryReasonForChange
    //             }
    //         ],
    //         otherDetails: {
    //             illegalProceedings: otherDetailsIllegalProceedings,
    //             illegalProceedingsDetails: otherDetailsIllegalProceedingsDetails,
    //             employeeId: otherDetailsEmployeeId,
    //             dateOfJoining: otherDetailsDateOfJoining,
    //             accessCardNo: otherDetailsAccessCardNo,
    //             positionOffered: otherDetailsPositionOffered
    //         }
    //     });

    //     await newEmployee.save();


    //     // Send the newly created employee data in the response
    //     res.json({
    //         msg: "Employee created successfully",
    //         employee: newEmployee
    //     });
    // } catch (err) {
    //     console.log(err);
    //     return res.status(500).json({ msg: err.message });
    // }

}

const allEmployee = async (req, res) => {
    const search = req.query.search || ""
    const gender = req.query.gender || ""
    const sort = req.query.sort || ""
    const page = req.query.page || 1
    const Item_Per_Page = 4

    const query = {
        Email: { $regex: search, $option: "i" }
    }

    if (gender !== 'All') {
        query.gender = gender;
    }
    console.log("myquery", req.query)

    try {

        const dataskip = (page - 1) * Item_Per_Page;

        const datacount = await Employee.countDocuments(query);

        let empdata = await Employee.find({ query })
            .sort({ createdAt: sort == "new" ? -1 : 1 })
            .limit(Item_Per_Page)
            .skip(dataskip)

        const pagecount = Math.ceil(datacount / Item_Per_Page)

        console.log(empdata);
        return res.status(201).json({
            message: "All Employees Data",
            Pagination: {
                datacount, pagecount
            },
            empdata
        });


    } catch (err) {
        console.log(err)
        return res.status(404).json("Employee Data not found");
    }
}


const getEmployee = async (req, res) => {
    const id = req.params.id;
    if (id == "") {
        return res.status(400).json({ message: "Id  is required" });
    } else {
        try {
            let mydata = await Employee.findById({ _id: id });
            console.log("mydata", mydata);
            return res.status(200).json({
                message: "Single Employee Data",
                mydata
            });


        } catch (err) {
            console.log(err);
            return res.status(404).json({ message: "Data not found" })
        }


    }

}

const updateEmployee = async (req, res) => {
    let Updata = req.body;
    console.log("requestdata", req.body);
    let id = req.params.id;
    console.log("myid", id)
    let dateupdate = moment(new Date()).format("DD-MM-YYYY hh:mm:ss")
    if (Updata == "") {
        return res.status(400).json({ message: "All inputs are required " })
    } else {
        try {
            if (Updata == "") {
                return res.status(400).json({ message: "All Fields are required" })
            } else {
                let update = await Employee.findByIdAndUpdate({ _id: id }, Updata,
                    { new: true });
                console.log("updated", update)
                update = await update.save();
                console.log("Updatedata", update)

                return res.status(201).json({
                    message: "Data Updated Sucessfully",
                    update
                });
            }
        }

        catch (err) {
            console.log(err);
            return res.status(404).json({ message: "Update is not possible" })
        }
    }
}




const deleteEmployee = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(401).json()
    } else {
        try {
            let deletedata = await Employee.findByIdAndDelete({ _id: id });
            console.log("Deleted", deletedata);
            return res.status(200).json({ message: "Deleted Successfully", deletedata })

        } catch (err) {
            console.log(err);
            return res.status(404).json({ message: "Unable to delete the Data" })
        }
    }
}

const empProfile = async (req, res) => {
    const id = req.params.id;
    try {
        let userdata = await Employee.findById({ _id: id });
        console.log("userdata", userdata);
        res.status(200).json({ userdata })
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: "employee data not found" })
    }
}
module.exports = {
    addEmployee,
    allEmployee,
    getEmployee,
    updateEmployee,
    deleteEmployee,
    empProfile
}