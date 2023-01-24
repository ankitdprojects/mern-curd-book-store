import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-primary text-white">
         <div className="container ">
            <Link className="navbar-brand text-white" to="/">BookStore By Ankit Dhanotiya</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="a nav-item">
          <Link to='/' className='nav-link active text-white'>Home</Link>
        </li>
        <li className="nav-item ">
          <Link to='/books' className='nav-link text-white'>Books</Link>
        </li>
        <li className="nav-item ">
          <Link to='/addbook' className='nav-link text-white'>Add Books</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar