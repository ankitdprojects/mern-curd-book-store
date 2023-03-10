import express from 'express'; 
import './Connection/Connection.js';
import router from './Connection/Routes/BookRoutes.js';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();
var app=express();
app.use(express.json())
app.use(cors())
app.use('/api/v1',router)

const port = 'https://mern-curd-book-store-backend.vercel.app'

app.listen( port || 3000 , () => {
    console.log('SERVER STARTED')
})