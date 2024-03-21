import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
 
mongoose.connect("mongodb+srv://mashhood:mashhood@mern-estate.qbgbhfr.mongodb.net/?retryWrites=true&w=majority&appName=mern-estate").then(()=>{console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
});
const app = express();

app.listen(3000,() => {
    console.log('server is running on port 3000!!!');
}
);

app.use('/api/user', userRouter);