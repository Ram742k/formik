
import React from 'react';
import BookForm from './BookForm';

const AddBook = ({ onAddBook }) => {
    const initialValues = { title: '', author: '', isbn: '', publicationDate: '' };
    const handleAddBook = (book) => {
        onAddBook(book);
        alert('Book added successfully');
    };

    return (
        <div>
           
            <BookForm onSubmit={handleAddBook} initialValues={initialValues} />
        </div>
    );
};

export default AddBook;
