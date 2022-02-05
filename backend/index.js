const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const user = require("./routes/user");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:/crud")
.then(()=>{
    console.log("Database is connected...")
})
.catch((e)=>{
    console.log(e.message);
})
app.use("/api" , user );
app.listen("5000" , ()=>{
    console.log("listining at port 5000");
})