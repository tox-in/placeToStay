import express from 'express';
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 5000

app.use((req,res) =>{
    res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL)
    res.SetHeader('Access-Control-Allowed-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.SetHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization')
    next()
})

app.use(express.json({limit:'10mb'}))

app.use('/', (req,res)=>res.json({message:'Welcome to our API'}))
app.use((req,res)=>res.status(404).json({success:false, message:'Not Found'}))

const startServer = async() => {
    try {
        app.listen(port, ()=>console.log('Server is running on port'))
    } catch (error) {
        console.log(error);
    }
};

startServer();