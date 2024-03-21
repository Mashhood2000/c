import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';

 
mongoose.connect("mongodb+srv://mashhood:mashhood@mern-estate.qbgbhfr.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate").then(()=>{console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
});
const app = express();
app.use(express.json())
app.listen(3000,() => {
    console.log('server is running on port 3000!!!');
}
);

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;

    const message = err.message || 'internal Server error';
    return res.status(statusCode).json({
        sucess: false,
        statusCode,
        message,

    });


});