
import React from 'react';

const ManageBooks = ({ books }) => {
    return (
        <div>
            <h2 className='text-center mt-5'>Manage Books</h2>
            {books.length === 0 ? (
                <p className='text-center mt-5' style={{ fontSize: 20, fontWeight: 400}}>No books available. Please add some books.</p>
            ) : (
              <div className='container card'>
                <div className='table-responsive'>
                 <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Publication Date</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>{book.publicationDate}</td>
                        </tr>
                    ))}
                </tbody>
               </table>
              </div>    
              </div>
            )}
        </div>
    );
};

export default ManageBooks;
