import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongoDB/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config() //pulling environment variable from dotenv file

//adding express application
const app = express()

//adding middlewares
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

//create route

app.get('/', async (req,res)=>{
    res.send('Hello from DALL-E')
})

//running the server

const startServer = async () =>{

    //connecting to mongoDB
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, ()=> console.log('Server has started on port http://localhost:8080'))
    } catch (error) {
        console.log(error);
    }
}

startServer();