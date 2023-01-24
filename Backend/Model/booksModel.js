import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    bookTitle:{type: String, required: true},
    author:{type: String, required: true},
    category:{type: String, required: true},
    price:{type: Number, required: true},
})


export default mongoose.model('books', bookSchema)