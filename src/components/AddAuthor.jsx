
import React from 'react';
import AuthorForm from './AuthorForm';

const AddAuthor = ({ onAddAuthor }) => {
    const initialValues = { name: '', birthDate: '', biography: '' };

    const handleAddAuthor = (author) => {
        console.log('Author added:', author);
        onAddAuthor(author);
        alert('Author added successfully');
    };

    return (
        <div>
            
            <AuthorForm onSubmit={handleAddAuthor} initialValues={initialValues} />
        </div>
    );
};

export default AddAuthor;
