import React, { useState } from 'react';
import './BookSection.css';
import axios from 'axios';

const BooksSection = ({ data, dataset }) => {
  const [ selectedBook, setSelectedBook ] = useState();
  const [ updateTitle, setUpdateTitle ] = useState();
  const [ updateAuthor, setUpdateAuthor ] = useState();
  const [ updateCategory, setUpdateCategory ] = useState();
  const [ updatePrice, setUpdatePrice ] = useState();

  const deleteBook = async (id) => {
    await axios.delete(`https://mern-curd-book-store-backend.vercel.app/api/v1/deleteBook/${id}`)
      .then((res) => {
        axios.get("https://mern-curd-book-store-backend.vercel.app/api/v1/getBooks")
        .then((res)=>{
          dataset(res.data.books)
      })
      .catch((err)=>console.log(err))
      })
      .catch((error) => console.log(error))
  }
  const getBooks = async() => {
    const { data } = await axios.get("https://mern-curd-book-store-backend.vercel.app/api/v1/getBooks");
    return data.books;
  }
  const updateBook = async (id, data) => {
    await axios.put(`https://mern-curd-book-store-backend.vercel.app/api/v1/updateBook/${id}`, data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  const handleSaveClick = async() => {
    const updatedBook = {
      bookTitle: updateTitle,
      author: updateAuthor,
      category: updateCategory,
      price: updatePrice
    }
    
    await updateBook(selectedBook._id, updatedBook);
    const updatedData = await getBooks();
    dataset(updatedData);
    setSelectedBook(null)
    setUpdateTitle('');
    setUpdateAuthor('');
    setUpdateCategory('');
    setUpdatePrice('');
  }
  const handleUpdateClick = (book) => {
    setSelectedBook(book);
    setUpdateTitle(book.bookTitle);
    setUpdateAuthor(book.author);
    setUpdateCategory(book.category);
    setUpdatePrice(book.price);
    
  }

  return (
    <div className='contain'>
 <div className="container">
  <div className="heading">
    <div className="col col-width">Book Title</div>
    <div className="col col-width">Author </div>
    <div className="col col-width">Category </div>
    <div className="col col-width">Price </div>
    <div className="col col-width">Action </div>
  </div>
</div>
        {
           data && data.map((item,i) =>(
                <> 
                <div>
                <div className="container">
                
  <div className="table-row">
    <div className="col col-width">{item.bookTitle}</div>
    <div className="col col-width">{item.author}</div>
    <div className="col col-width">{item.category}</div>
    <div className="col col-width">{item.price}</div>
    <div className="col col-width">
    <div className='d-flex justify-content-evenly align-item-center'>
    <button className='btn btn-primary' onClick={() => handleUpdateClick(item)}>Edit</button> 
    <button className='btn btn-danger' onClick={() => deleteBook(item._id)}  >Delete</button> </div></div>
  </div>
</div>
                </div>
                 </>
            )
           )
        }
        {selectedBook && (
    <div className='d-flex justify-content-center'>
      <input type="text" value={updateTitle} onChange={(e) => setUpdateTitle(e.target.value)} />
      <input type="text" value={updateAuthor} onChange={(e) => setUpdateAuthor(e.target.value)} />
      <select className="custom-select" id="validationTooltip04"   required name='category' value={updateCategory} onChange={e => setUpdateCategory(e.target.value)}>
        <option selected disabled value >Categories</option>
        <option>Action</option>
        <option>Horror</option>
        <option>Adventure</option>
        <option>Classic</option>
        <option>Friction</option>
        <option>Novel</option>
        <option>Romance</option>
        <option>Tragedy</option>
        <option>Mystery</option>
        <option>Crime</option>
      </select>
      <input type="number" value={updatePrice} onChange={(e) => setUpdatePrice(e.target.value)} />
      <button className='btn btn-secondary' onClick={() => handleSaveClick()} >Save</button>
    </div>
)}
    </div>
  )
}

export default BooksSection