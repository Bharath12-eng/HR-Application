/* //create a simple nodejs express server?
const express = require('express');
const cors = require('cors');
const assert = require('assert');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT;

//ref to express
const app = express();

//to avoid port blocking
app.use(cors())

// mongodb connecting code in nodejs?

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_PROD, { useNewUrlParser: true }, (err) => {
    if (err) assert.deepStrictEqual(err, null);
    console.log("MongoDB connected successfully")
});


//to configure express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configuring cookies
app.use(cookieParser())

//route settings
app.use(`/api/auth`, require('./route/userRoute'))


//server 
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
}) */


const express = require("express");
const cors = require("cors");
const assert = require("assert");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');


require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

//declarig cors to avoid port blocking
app.use(cors());

//configure file
app.use(fileUpload({
    useTempFiles: true
}));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_PROD, { useNewUrlParser: true }, (err) => {
    if (err) assert.deepStrictEqual(err, null);
    console.log("mongo db connected successfully");
});

//configure express

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configure cookie

app.use(cookieParser());

//route settings
app.use(`/api/auth/`, require(`./route/userRoute`));
app.use(`/api/employee`, require(`./route/imgRoute`));
app.use(`/api/`, require(`./route/empRoute`));
app.use(`/apis/`,require(`./route/employeeRoutes`))

app.listen(PORT, () => {
    console.log(`server running on @ http://localhost:` + PORT);
});
