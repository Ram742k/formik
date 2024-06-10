
import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import AddBook from './AddBook';
import AddAuthor from './AddAuthor';
import ManageBooks from './ManageBooks';
import ManageAuthors from './ManageAuthors';

const Dashboard = () => {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);

    const addBook = (book) => {
        setBooks([...books, book]);
    };

    const addAuthor = (author) => {
        setAuthors([...authors, author]);
    };

    return (
        <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <Link to="/" className='navbar-brand'>Library Management System</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link' to="/">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to="/add-book">Add Book</Link>
        </li>
        
        <li className="nav-item">
          <Link className='nav-link' to="/add-author">Add author</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to="/manage-books">Manage Books</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to="/manage-authors">Manage Authors</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
            
           
            <Routes>
                <Route path="/" element={<div className='text-ani'>
	<h1 data-text="Welcome to the "> 
		<span data-text="Library Management System">Welcome to the<br/> Library Management System
 </span>
	</h1>
</div>} />
                <Route path="/add-book" element={<AddBook onAddBook={addBook} />} />
                <Route path="/add-author" element={<AddAuthor onAddAuthor={addAuthor} />} />
                <Route path="/manage-books" element={<ManageBooks books={books} />} />
                <Route path="/manage-authors" element={<ManageAuthors authors={authors} />} />
            </Routes>
        </div>
    );
};

export default Dashboard;
