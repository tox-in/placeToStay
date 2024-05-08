import express from 'express';
import dotenv from 'dotenv'
import roomRouter from './routes/roomRouter.js';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config()

const app = express();

const port = process.env.PORT || 5000

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['X-Requested-With', 'Content-Type', 'Authorization'],
    credentials: true,
}));


app.use(express.json({limit:'10mb'}))

app.use('/room', roomRouter);
app.use('/', (req,res)=>res.json({message:'Welcome to our API'}))
app.use((req,res)=>res.status(404).json({success:false, message:'Not Found'}))

const startServer = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT);
        console.log('MongoDB connected successfully');
        app.listen(port, ()=>console.log('Server is running on http://localhost:5000'))
    } catch (error) {
        console.log(error);
    }
};

startServer();