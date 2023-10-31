const express = require('express');
const authRouter = require("./router/auth")
const userRouter = require("./router/Users");
require("dotenv").config();
const authenticating = require("./middleware/authentication")
const connectdb = require("./db/connect")
const errorHandlerMiddleware = require("./middleware/errorMiddleWare")
const app = express();
const port = process.env.PORT_NUM || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/jobs",authenticating,userRouter);
app.use(errorHandlerMiddleware)
const start = async() =>{
    try {
        await connectdb(process.env.MY_MONGODB_KEY)
        app.listen(port,()=>{
            console.log(`server has been started at ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start();