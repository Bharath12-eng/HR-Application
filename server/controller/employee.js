const  Employe = require("../model/empSchema");




let tabs = ["personalDetails","qualifications","workhistory","otherdetails"];
const addEmployees = async (req, res) => {

    try {
        let {personalDetails:{ firstName, lastName, email,bloodGroup,countryCode,phone,altPhone,DOB, maritalStatus,
            languages,
            accommodation,
            gender,

            permanentAddress,
            contactAddress,
            qualification
        }
        }  = req.body;

        console.log("myreq",req.body)

        // const Existingemployee = await Employe.findOne({ email });
        // if (Existingemployee) {
        //     res.status(401).json("Employee already Exist")
        // }
        
        const generateempId = await generateId(req,res);
        const Employeedata = new Employe({personalDetails:{ EmployeeID:generateempId,firstName, lastName, email,bloodGroup,countryCode,phone,altPhone,DOB, maritalStatus,
            languages,
            accommodation,
            gender,

            permanentAddress,

            contactAddress,
            qualification
        },step:"qualifications"
        } )
        
       
       
        const savedata = await Employeedata.save();
        console.log("emsdata",Employeedata)
        res.status(201).json({
            message: "Employee has Created Successfully",
            employesId:generateempId,
            savedata
        },
            )
    } catch (err) {
        res.status(400).json({ message: err.message })
        console.log(err)
    }
    
}



const generateId = async(req,res) =>{
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    const {email} = req.body;
    const existemp = Employe.findOne({email});
        if(existemp.length>0){
           
            return true
        }else{
    try{
            
            let companyName= "VIDZI";
            let emplength = (await Employe.find({})).length;
           
            // console.log("minr",emplength.length)
            // let generateemp = `${companyName}+${year}+${emplength.length+1}`;
            let generateemp= companyName+year+emplength;
           

            console.log("JOBid",generateemp)
            return generateemp
            // res.status(201).json({message:"Employee ID is Generated",generateemp})
    }catch(err){
        console.log(err);
        // res.status(400).json({message:err.message})
    }
}
}

const allEmployees = async(req,res) =>{
    const sort =req.query.sort || ""
    const search = req.query.search || ""
    const page = req.query.page || 1
    const Item_Per_Page = 4;

    const query = {
        email: { $regex: search, $option: "i" }
    }
    console.log("myrequest",req.query)
    try{

            const skip = (page-1)*Item_Per_Page

            const count = await Employe.countDocuments(query);
            console.log("Documents",count)

            let empdata = await Employe.find({query})
            .sort({createdAt:sort == "new" ? -1 : 1})
            .limit(Item_Per_Page)
            .skip(skip)

            const pageCount = Math.ceil(count/Item_Per_Page)

            console.log("mine",empdata)
            res.status(201).json({
                Pagination:{
                    count,pageCount
                },
                message:"All Employess Data",empdata})
    }catch(err){
        res.status(400).json({message:err.message})
            console.log(err)
    }
}

const getEmployeeByID = async(req,res) =>{
    const id = req.params.id;
    console.log("myid",id)
           
    
        try{
          
            let singleEmployee = await Employe.findById(id);

            // const employee = await Employe.find((emp) => emp._id === id);
            
            console.log("mysingle",singleEmployee);
            res.status(201).json({message:"Single Employee data",singleEmployee})
        }catch(err){
                res.status(400).json({message:err.message})
                console.log(err)
        }
}

const editEmployee = async(req,res) =>{
    // const id = req.params.id;
    // const employedata = req.body;
    // console.log("edi",employedata)
    // try{
    //         let editdata = await Employe.findByIdAndUpdate({_id:id},employedata,{
    //             new:true
    //         })
    //         console.log("editdata",editdata)
    //         res.status(201).json({message:"Data is Updated Successfully",editdata})
    // }catch(err){
    //     res.status(400).json({message:err.message})
    //     console.log(err)
    // }

    const id = req.params.id;
   
  
    let { tabname}  = req.body;


    try{
        
        if(tabname==""){
            res.status(401).json({message:"TabName is required"})
        }
        // else if(tabs.includes(!"qualifications",!"workhistory",!"otherdetails")){
        //     res.status(401).json({message:"TabName doesnot exist"})
        // }
        else if(tabname!="qualifications"&&tabname!="workhistory"&&tabname!="otherdetails"){
            res.status(401).json({message:"TabName doesnot exist"})
        }
        else{
            switch(tabname){
                case "qualifications":
                    let existdata = await Employe.findById({_id:id});
                    console.log("myexist",existdata)
                let {
                  tabname,
                    qualification:[{
                       examination_passed,university,year_of_passing,percentage} ]
                }=req.body;
    
                console.log("qualimy",req.body);

                existdata= await Employe.findByIdAndUpdate({_id:id},{qualification:[{
                    examination_passed,university,year_of_passing,percentage} ],step:"workhistory"
             },{
                        new:true
                    })
    
               
              

                    await existdata.save();

                  
                  
          
                    res.status(201).json({message:"Qualification deatails added Succesfully",existdata})
                    
           
                        
            }
           



        }
    
          
    }catch(err){
        console.log(err);
        res.status(400).json({message:err.message})
    }
}

const deleteempdata = async(req,res)=>{
    const id = req.params.id;
        try{
                let deleteemp = await Employe.findByIdAndDelete({_id:id});
                res.status(201).json({message:"Employee deleted Successfully",deleteemp })
        }catch(err){
            console.log(err);
            res.status(400).json({message:err.message})
        }
}


const Qualification = async(req,res) =>{

    try{

        let {
            qualification:[{ examination_Passed,university,year_of_passing,percentage}] }= req.body;
            console.log("quality",req.body)

            let qualificationdata = new Employe({
                qualification:[{ examination_Passed,university,year_of_passing,percentage}]
            })

            let qualificationdetails = await qualificationdata.save();
            res.status(201).json({message:"Qualification details are added Successfully",
                                qualificationdetails
        })

        console.log("qualitydata",qualificationdetails)
        
    }catch(err){
        res.status(401).json({message:err.message})
        console.log(err)
    }
}




module.exports = {
    addEmployees,
    allEmployees,
    getEmployeeByID,
    editEmployee,
    deleteempdata,
    // generateId,
    Qualification
}