import express from 'express'; 
import './Connenction/Connection.js';
import router from './Connenction/Routes/bookRoutes.js';
import cors from 'cors';

var app=express();
app.use(express.json())
app.use(cors())
app.use('/api/v1',router)

app.listen(3000 , () => {
    console.log('SERVER STARTED')
})