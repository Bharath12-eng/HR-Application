const express = require("express");
const empdatas = require("../controller/employee");

const empRoutes = express.Router();


empRoutes.post("/addEmployees",empdatas.addEmployees);
empRoutes.get("/allemployees",empdatas.allEmployees);
empRoutes.get("/employee/:id",empdatas.getEmployeeByID);
// empRoutes.put("/edit/:id",empdatas.editEmployee);
empRoutes.delete("/deleteemployee/:id",empdatas.deleteempdata);
// empRoutes.post("/generate",empdatas.generateId)

empRoutes.put("/edit/:id",empdatas.editEmployee)

module.exports= empRoutes;
