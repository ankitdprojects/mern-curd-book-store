import mongoose from "mongoose";


mongoose.connect('mongodb+srv://ankitbook:ADD224898@cluster0.blsmir1.mongodb.net/BookStore?retryWrites=true&w=majority')
.then(() => console.log('Connected') )