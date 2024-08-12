let express=require('express')
const mongoose = require("mongoose");
const route = require('./routes/userroute');
const cors = require('cors')

let app=express()

app.use(express.json())



app.use(cors())

app.use("/",route)

mongoose
  .connect("mongodb://localhost:27017/userdbs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established");
  })
  .catch((error) => console.log(error));


app.listen(5000,()=>{
    console.log("Server started at the Port no 5000")
})