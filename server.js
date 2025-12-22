const express = require('express');
const courseRoutes=require('./routes/courseRoutes')
const studrouter=require("./routes/student")
//const videoRoutes=require("./routes/videoRouters")

const app=express();

app.use(express.json());
app.use('/courses',courseRoutes)
app.use("/student",studrouter)
//app.use("/video",videoRoutes)

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})