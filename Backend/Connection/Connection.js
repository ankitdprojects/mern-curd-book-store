import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.blsmir1.mongodb.net/BookStore?retryWrites=true&w=majority`)
.then(() => console.log('Connected') );