import express from 'express';
import bookSchema from '../../Model/booksModel.js';

const router = express.Router();

// Post Request
router.post('/add', async (req, res) => {
    try {
        const newBook = new bookSchema(req.body);
        await newBook.save().then(() => {
            res.status(200).json({message: 'Book Added Successfully'})
        })
    } catch (error) {
        console.log(error)
    }
})

// Get Request
router.get('/getBooks', async (req,res) =>{
    let books;
    try {
        books = await bookSchema.find();
        res.status(200).json({books});
    } catch (error) {
        console.log(error)
    }
})


// Get Request with Id
router.get('/getBooks/:id', async (req,res) => {
    let books;
    const id = req.params.id;
    try {
        books = await bookSchema.findById(id);
        res.status(200).json({books})       
    } catch (error) {
        console.log(error)
    }
})

// Update Books by Id
router.put('/updateBook/:id', async (req,res) => {
    const id = req.params.id;
    const { bookTitle,author,category,price } = req.body; 
    let books;
    try {
        books = await bookSchema.findByIdAndUpdate(id,{ 
            bookTitle,
            author,
            category,
            price, });
            await books
            .save()
            .then(() => res.json({ message: "Data Updated"}))
    } catch (error) {
        console.log(error)
    }
})

// Delete Book By ID
router.delete("/deleteBook/:id", async (req,res) => {
    const id = req.params.id;
    try {
        await bookSchema.findByIdAndDelete(id).then(() => res.status(201).json({message: "Deleted Successfully"}))        
    } catch (error) {
        console.log(error)
    }
})
export default router;