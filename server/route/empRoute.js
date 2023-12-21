const route = require('express').Router();
const empCtrl = require('../controller/empCtrl');
const empdata = require('../controller/employeeController')

route.post(`/addEmployee`, empdata.addEmployee);
route.get(`/allemployee`, empdata.allEmployee)
route.get(`/employee/:id`, empdata.getEmployee);
route.put(`/updateEmployee/:id`, empdata.updateEmployee);
route.delete(`/deleteEmployee/:id`, empdata.deleteEmployee);
route.get(`/empProfile/:id`,empdata.empProfile)



module.exports = route;
