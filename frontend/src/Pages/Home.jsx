import React from 'react';
import './Home.css'
import '../App.css'
import book from '../Assets/books.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Home-Page container-fluid gradient container d-flex justify-content-center align-items-center '>
    <div className='row '>
        <div className='col-lg-6 d-flex justify-content-center align-items-start flex-column' style={{height:'91.5vh'}}>
            <h2 style={{fontSize:'80px'}}>Book Store</h2>
            <h3 style={{fontSize:'50px'}}>for you</h3>
            <p className='mb-0' style={{color:'silver'}}>Checkout the book from Here.</p>
            <button className='btn btn-outline-primary'>
            <Link to='/books' className='viewBook my-3'>View Books</Link>
            </button>
        </div>
        <div className='col-lg-6 d-flex justify-content-center align-items-end flex-column' style={{height:'91.5vh'}}>
            <img className='img-fluid homeImg' src={book} alt="" srcset="" />
        </div>
    </div>
    </div>
  )
}

export default Home